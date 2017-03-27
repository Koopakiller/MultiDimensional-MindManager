using System;
using System.Data;
using System.Linq;
using System.Web.Mvc;
using Koopakiller.Apps.Picosmos.Explorer.Models;
using System.Collections.Generic;
using System.Data.SqlClient;

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

        public JsonResult GetAssociatedData(String table, String column, Int32 value)
        {
            var result = new TableResultModel();
            using (var entities = new Entities())
            {
                var cols = entities.Explorer_GetTableColumns(table).ToList();
                var sql = "[dbo].[Explorer_GetAssociatedDataSets]";

                var conn = entities.Database.Connection;
                var initialState = conn.State;
                try
                {
                    if (initialState != ConnectionState.Open)
                        conn.Open(); // open connection if not already open
                    using (var cmd = conn.CreateCommand())
                    {
                        cmd.CommandText = sql;
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Add(new SqlParameter("@tableName", table));
                        cmd.Parameters.Add(new SqlParameter("@columnName", column));
                        cmd.Parameters.Add(new SqlParameter("@id", value));

                        using (var reader = cmd.ExecuteReader())
                        {
                            result.Columns = cols.Select(x => new TableColumn
                            {
                                ColumnName = x.ColumnName,
                                ColumnType = x.ColumnType,
                                IsParent = x.IsParent == true,
                                IsChild = x.IsChild == true,
                                OrdinalPosition = x.OrdinalPosition,
                            })
                                .ToList();
                            result.Rows = new List<TableRow>();
                            var i = 1;
                            while (reader.Read())
                            {
                                var item = new TableRow
                                {
                                    RowNumber = i++,
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
                                result.Rows.Add(item);
                            }
                        }
                    }
                }
                catch (Exception ex)
                {
                    throw;
                }
                finally
                {
                    if (initialState != ConnectionState.Open)
                    {
                        conn.Close(); // only close connection if not initially open
                    }
                }
            }

            return this.Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}