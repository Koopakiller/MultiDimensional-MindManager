namespace Koopakiller.Apps.Picosmos.Real.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Diagnostics;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;

    [Route("")]
    public class HomeController : Controller
    {
        [Route("")]
        public IActionResult Index()
        {
            return View();
        }

        [Route("Error")]
        public IActionResult Error()
        {
            return Content(Activity.Current?.Id?.ToString() ?? HttpContext.TraceIdentifier.ToString());
        }

        [Route("{client}/{*tail}")]
        [Produces("text/html")]
        public IActionResult ClientApp(string client, string tail)
        {
            try
            {
                return new ContentResult()
                {
                    Content = System.IO.File.ReadAllText($"./wwwroot/{client}/index.html"),
                    ContentType = "text/html"
                };
            }
            catch
            {
                return RedirectToAction("/Error");
            }
        }
    }
}
