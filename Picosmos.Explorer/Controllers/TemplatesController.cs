using System.Web.Mvc;

namespace Koopakiller.Apps.Picosmos.Explorer.Controllers
{
    public class TemplatesController : Controller
    {
        public ActionResult App() => this.View();

        public ActionResult DataTable() => this.View();

        public ActionResult InitialSelector() => this.View();
    }
}