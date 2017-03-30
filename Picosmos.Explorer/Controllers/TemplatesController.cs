using System.Web.Mvc;

namespace Koopakiller.Apps.Picosmos.Explorer.Controllers
{
    public class TemplatesController : Controller
    {
        // GET: Templates
        public ActionResult DataTable()
        {
            return this.View();
        }
    }
}