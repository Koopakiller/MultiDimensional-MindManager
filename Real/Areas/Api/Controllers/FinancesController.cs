using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Real.Areas.Api.ViewModels;

namespace Real.Areas.Api.Controllers
{
    [Area("Api")]
    public class FinancesController : Controller
    {
        public IActionResult Index()
        {
            return Json(new { test = "Test", Number = 12.34 });
        }

        public IActionResult Add(FinanceEntry data)
        {
            return this.Ok();
        }
    }
}
