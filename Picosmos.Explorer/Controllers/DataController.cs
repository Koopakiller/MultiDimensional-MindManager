using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using Koopakiller.Apps.Picosmos.Explorer.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Koopakiller.Apps.Picosmos.Explorer.Controllers
{
    public class DataController : Controller
    {
        private readonly Entities entities = new Entities();

        public ActionResult GetTablesAndColumns()
        {
            var data = this.entities.Explorer_GetTablesAndColumns()
                .GroupBy(x => x.TableName)
                .Select(x => new { TableName = x.Key, Columns = x.Select(y => new { TableName = x.Key, ColumnName = y.ColumnName }) });

            return this.Json(data);
        }

        public ActionResult GetDataFromTableColumnValue(String tableName, String columnName, Int32 columnValue, DataTableKinds kind)
        {
            IEnumerable<Explorer_GetReferencedTableColumnValues_sql_Result> abc;
            switch (kind)
            {
                case DataTableKinds.Self:
                    abc = new[]
                    {
                        new Explorer_GetReferencedTableColumnValues_sql_Result()
                        {
                            TableName = tableName,
                            ColumnName = columnName,
                            ColumnValue = columnValue,
                        },
                    };
                    break;
                case DataTableKinds.Referenced:
                    abc = this.entities.Explorer_GetReferencedTableColumnValues_sql(tableName, columnName, columnValue);
                    break;
                default:
                    throw new ArgumentOutOfRangeException(nameof(kind), kind, null);
            }

            var result = abc.GroupBy(x => x.TableName).Select(x => this.GetTableResultModel(x.Key, x)).ToList();
            return this.Json(result);
        }

        public ActionResult GetCircularReferencedData(Int32? chainId, Int32? columnValue)
        {
            if (chainId == null || columnValue == null)
            {
                return this.EmptyJson();
            }

            var chain = this.entities.Explorer_CircularReferences.Where(x => x.ChainId == chainId)
                .OrderBy(x => x.ChainPosition)
                .ToList();
            var lst = new List<Explorer_GetDataFromTableColumnValue_Result>
            {
                new Explorer_GetDataFromTableColumnValue_Result()
                {
                    EntityId = 1,
                    ColumnName = chain[0].SourceColumnName,
                    ColumnValue = columnValue.ToString(),
                }
            };
            foreach (var chainLink in chain)
            {
                var vals = lst.Where(x => x.ColumnName == chainLink.SourceColumnName && x.ColumnValue != null && Int32.TryParse(x.ColumnValue, out _)).Select(x => Int32.Parse(x.ColumnValue));

                lst = SelectMany(vals.Select(y => this.entities.Explorer_GetDataFromTableColumnValue(chainLink.TargetTableName, chainLink.TargetColumnName, y))).ToList();
            }
            var result = this.GetTableResultModelScaffold(chain.Last().TargetTableName);
            result.Rows = lst.GroupBy(x => x.EntityId).Select(this.GetTableRow).ToList();
            return this.Json(result);
        }

        private static IEnumerable<Explorer_GetDataFromTableColumnValue_Result> SelectMany(IEnumerable<IEnumerable<Explorer_GetDataFromTableColumnValue_Result>> source)
        {
            var eId = 1;
            foreach (var list in source)
            {
                Int32? lastId = null;
                foreach (var item in list)
                {
                    if (item.EntityId != lastId)
                    {
                        lastId = item.EntityId;
                        ++eId;
                    }
                    item.EntityId = eId;
                    yield return item;
                }
            }
        }

        private TableResultModel GetTableResultModelScaffold(String tableName)
        {
            return new TableResultModel
            {
                Name = tableName,
                Columns = this.GetTableColumns(tableName),
                CircularReferences = this.GetCircularReferences(tableName).ToList(),
            };
        }

        private TableResultModel GetTableResultModel(String tableName, IEnumerable<Explorer_GetReferencedTableColumnValues_sql_Result> tcv)
        {
            var result = this.GetTableResultModelScaffold(tableName);
            result.Rows = tcv.SelectMany(itm => this.entities
                    .Explorer_GetDataFromTableColumnValue(tableName, itm.ColumnName, itm.ColumnValue)
                    .GroupBy(x => x.EntityId)
                    .Select(this.GetTableRow))
                .ToList();
            return result;
        }

        private TableRow GetTableRow(IGrouping<Int32?, Explorer_GetDataFromTableColumnValue_Result> x)
        {
            var tr = new TableRow()
            {
                RowNumber = x.Key ?? throw new NotSupportedException(),
                Cells = x.Select(y => new TableCell()
                {
                    ColumnName = y.ColumnName,
                    Content = y.ColumnValue,
                })
                    .OrderBy(y => y.ColumnName)
                    .ToList(),
            };

            tr.PossibleHeader = this.GetPossibleHeader(tr.Cells);

            return tr;
        }

        private String GetPossibleHeader(List<TableCell> cells)
        {
            foreach (var name in new[] { "Header", "Name", "Title", "Description", "Id" })
            {
                var val = cells.FirstOrDefault(x => String.Equals(x.ColumnName, name, StringComparison.CurrentCultureIgnoreCase));
                if (val != null)
                {
                    return val.Content;
                }
            }
            return null;
        }

        private IEnumerable<CircularReferenceModel> GetCircularReferences(String tableName)
        {
            return this.entities.Explorer_CircularReferences.GroupBy(x => x.ChainId)
                .Where(x => x.Any(y => y.ChainPosition == 1 && y.SourceTableName == tableName))
                .ToList() //fetch data from db
                .Select(x => new CircularReferenceModel()
                {
                    ChainId = x.Key,
                    Description = String.Join(" -> ", x.OrderBy(y => y.ChainPosition)
                                                       .Select(y => $"{y.SourceTableName}.{y.SourceColumnName} -> {y.TargetTableName}.{y.TargetColumnName}")),
                    FirstColumnName = x.OrderBy(y => y.ChainPosition).FirstOrDefault()?.SourceColumnName,
                });
        }

        protected ActionResult EmptyJson(Boolean succeeded = true)
        {
            return this.Json<Object>(null, succeeded: false);
        }

        protected ActionResult Json<T>(T data, Boolean succeeded = true, Formatting formatting = Formatting.None)
        {
            var boxed = new
            {
                Data = data,
                Succeeded = succeeded,
            };
            var json =
                JsonConvert.SerializeObject(
                    boxed,
                    formatting,
                    new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() }
                );

            return this.Content(json, "application/json");
        }

        protected override void Dispose(Boolean disposing)
        {
            this.entities?.Dispose();
            base.Dispose(disposing);
        }

        private List<TableColumn> GetTableColumns(String tableName)
        {
            return this.entities.Explorer_GetTableColumns(tableName)
                       .Select(x => new TableColumn
                       {
                           ColumnName = x.ColumnName,
                           ColumnType = x.ColumnType,
                           IsParent = x.IsParent == true,
                           IsChild = x.IsChild == true,
                           OrdinalPosition = x.OrdinalPosition,
                       })
                       .OrderBy(x => x.ColumnName)
                       .ToList();
        }
    }
}