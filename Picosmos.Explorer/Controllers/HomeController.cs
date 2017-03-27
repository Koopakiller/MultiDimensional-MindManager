using System;
using System.Data;
using System.Linq;
using System.Web.Mvc;
using Koopakiller.Apps.Picosmos.Explorer.Models;
using System.Collections.Generic;
using System.Data.Common;
using System.Data.SqlClient;
using System.Diagnostics;

namespace Koopakiller.Apps.Picosmos.Explorer.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var idm = new InitialDataModel();

            using (var entities = new Entities())
            {
                idm.TableColumns = entities.Explorer_GetTablesAndColumns()
                    .Select(x => Tuple.Create(
                        x.TableName,
                        x.ColumnName,
                        x.TableName + " | " + x.ColumnName))
                    .ToList();

                return this.View(idm);
            }
        }

        public JsonResult GetInitialTable(String table, String column, Int32 value)
        {
            using (var entities = new Entities())
            {
                var res = GetTableResultModel(entities, table, new[]
                {
                    new Explorer_GetLinkedCells_Result()
                    {
                        TargetTableName = table,
                        TargetTableColumn = column,
                        ColumnValue = value,
                    }
                });
                return this.Json(res, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult GetAssociatedData(String table2, String column2, Int32 value2)
        {
            var result = new TablesResultModel { Tables = new List<TableResultModel>() };
            using (var entities = new Entities())
            {
                foreach (var entry in entities.Explorer_GetLinkedCells(table2, column2, value2)
                    .GroupBy(x => x.TargetTableName)
                    .ToList())
                {
                    var table = entry.Key;
                    var res = GetTableResultModel(entities, table, entry);
                    result.Tables.Add(res);
                }
            }

            return this.Json(result, JsonRequestBehavior.AllowGet);
        }

        private static TableResultModel GetTableResultModel(Entities entities, String table, IEnumerable<Explorer_GetLinkedCells_Result> entry)
        {
            var res = new TableResultModel { Name = table };
            var cols = entities.Explorer_GetTableColumns(table).ToList();
            res.Columns = GetTableColumns(cols);

            res.Rows = new List<TableRow>();

            foreach (var itm in entry)
            {
                var column = itm.TargetTableColumn;
                var value = itm.ColumnValue;

                res.Rows.AddRange(ExecuteGetAssociatedDataSets(entities, table, cols, column, value));
            }
            return res;
        }

        private static IEnumerable<TableRow> ExecuteGetAssociatedDataSets(Entities entities, String table, List<Explorer_GetTableColumns_Result> cols, String column, Int32? value)
        {
            var resultList = new List<TableRow>();
            var conn = entities.Database.Connection;
            var initialState = conn.State;
            try
            {
                if (initialState != ConnectionState.Open)
                {
                    conn.Open(); // open connection if not already open 
                }
                using (var cmd = CreateGetAssociatedDataSetsCommand(conn, table, column, value))
                {
                    using (var reader = cmd.ExecuteReader())
                    {
                        for (var i = 1; reader.Read(); ++i)
                        {
                            var item = GetTableRowFromReader(cols, reader, i);
                            resultList.Add(item);
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
                throw;
            }
            finally
            {
                if (initialState != ConnectionState.Open)
                {
                    conn.Close(); // only close connection if not initially open
                }
            }

            return resultList;
        }

        static DbCommand CreateGetAssociatedDataSetsCommand(DbConnection conn, String table, String column, Int32? value)
        {
            var cmd = conn.CreateCommand();
            cmd.CommandText = "[dbo].[Explorer_GetAssociatedDataSets]";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@tableName", table));
            cmd.Parameters.Add(new SqlParameter("@columnName", column));
            cmd.Parameters.Add(new SqlParameter("@id", value));
            return cmd;
        }

        private static TableRow GetTableRowFromReader(List<Explorer_GetTableColumns_Result> cols, DbDataReader reader, Int32 i)
        {
            var item = new TableRow
            {
                RowNumber = i,
                Cells = new List<TableCell>(),
            };
            foreach (var col in cols)
            {
                item.Cells.Add(new TableCell()
                {
                    OrdinalPosition = col.OrdinalPosition,
                    Content = reader.GetValue(reader.GetOrdinal(col.ColumnName)),
                });
            }

            return item;
        }

        private static List<TableColumn> GetTableColumns(IEnumerable<Explorer_GetTableColumns_Result> cols)
        {
            return cols.Select(x => new TableColumn
            {
                ColumnName = x.ColumnName,
                ColumnType = x.ColumnType,
                IsParent = x.IsParent == true,
                IsChild = x.IsChild == true,
                OrdinalPosition = x.OrdinalPosition,
            }).ToList();
        }
    }
}