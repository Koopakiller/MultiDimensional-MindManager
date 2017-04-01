using System.Web.Mvc;

namespace Koopakiller.Apps.Picosmos.Explorer.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index() => this.View();
    }
}