namespace Koopakiller.Apps.Picosmos.Real.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Diagnostics;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;

    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Error()
        {
            return Content(Activity.Current?.Id?.ToString() ?? HttpContext.TraceIdentifier.ToString());
        }
    }
}
