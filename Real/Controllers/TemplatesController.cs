using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Real.Controllers
{
    public class TemplatesController : Controller
    {
        public IActionResult App()
        {
            return View();
        }
    }
}
