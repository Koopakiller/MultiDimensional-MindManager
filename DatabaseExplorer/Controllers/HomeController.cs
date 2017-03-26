using System;
using System.Linq;
using System.Web.Mvc;
using DatabaseExplorer.Models;

namespace DatabaseExplorer.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var idm = new InitialDataModel();

            using (var entities = new Entities())
            {
                idm.TableColumns = entities.DbExplorer_GetTablesAndColumns()
                    .Select(x => Tuple.Create(
                        x.TableName,
                        x.ColumnName,
                        x.TableName + " | " + x.ColumnName))
                    .ToList();

                return this.View(idm);
            }
        }

        public JsonResult GetAssociated(String table, String column, Int32 value)
        {
            using (var entities = new Entities())
            {
                return this.Json(entities.DbExplorer_GetAssociatedDataSets(table, column, value).Select(x => new
                {
                    Table = x.TargetTableName,
                    Column = x.TargetTableColumn,
                    Value = x.ColumnValue,
                }).ToList(), JsonRequestBehavior.AllowGet);
            }
        }
    }
}