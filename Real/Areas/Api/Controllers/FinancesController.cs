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

        public IActionResult GetDataForNewEntry()
        {
            var data = new 
            {
                Users = new dynamic[]
                {
                    new { Id = 0, Name = "Schmul Goldberg" },
                    new { Id = 1, Name = "Tom Lambert" },
                },
                Persons = new dynamic[]
                {
                    new { Id = 1, Name = "Edeka" },
                    new { Id = 2, Name = "Rewe" },
                    new { Id = 3, Name = "Aldi" },
                    new { Id = 4, Name = "Lidl" },
                    new { Id = 4, Name = "Netto" },
                    new { Id = 4, Name = "Hundenetto" },
                },
                Currencies = new dynamic[]
                {
                    new { Id = 1, Names = new string[] { "Euro", "€" } },
                    new { Id = 1, Names = new string[] { "US Dollar", "$" } },
                },
            };
            return this.Json(data);
        }
    }
}
