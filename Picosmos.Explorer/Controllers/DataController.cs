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

            var result = abc.GroupBy(x => x.TableName).Select(this.GetTableResultModel).ToList();
            return this.Json(result);
        }

        private TableResultModel GetTableResultModel(IGrouping<String, Explorer_GetReferencedTableColumnValues_sql_Result> tcv)
        {
            var cols = this.GetTableColumns(tcv.Key);
            return new TableResultModel
            {
                Name = tcv.Key,
                Columns = cols,
                Rows = tcv.SelectMany(itm => this.entities.Explorer_GetDataFromTableColumnValue(tcv.Key, itm.ColumnName, itm.ColumnValue)
                        .GroupBy(x => x.EntityId)
                        .Select(x => new TableRow()
                        {
                            RowNumber = x.Key ?? throw new NotSupportedException(),
                            Cells = x.Select(y => new TableCell()
                            {
                                ColumnName = y.ColumnName,
                                Content = y.ColumnValue,
                            })
                                     .OrderBy(y => y.ColumnName)
                                     .ToList(),
                        }))
                    .ToList()
            };
        }

        protected ActionResult Json<T>(T data, Formatting formatting = Formatting.None)
        {
            var boxed = new { Data = data };
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