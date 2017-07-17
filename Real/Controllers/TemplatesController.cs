namespace Koopakiller.Apps.Picosmos.Real.Controllers
{
    using System;
    using Microsoft.AspNetCore.Mvc;

    public class TemplatesController : Controller
    {
        public IActionResult Default(String actionName)
        {
            return View(actionName);
        }
    }
}
