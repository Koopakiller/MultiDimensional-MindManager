using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;
using Koopakiller.Apps.Picosmos.Explorer.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Koopakiller.Apps.Picosmos.Explorer.Controllers
{
    public class DataController : Controller
    {
        public ActionResult GetTablesAndColumns()
        {
            using (var entities = new Entities())
            {
                var data = entities.Explorer_GetTablesAndColumns()
                    .GroupBy(x => x.TableName)
                    .Select(x => new { TableName = x.Key, Columns = x.Select(y => new { TableName = x.Key, ColumnName = y.ColumnName }) });

                return this.Json(data);
            }
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
    }
}