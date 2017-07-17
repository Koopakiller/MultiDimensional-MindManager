namespace Koopakiller.Apps.Picosmos.Real.Areas.Api.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Koopakiller.Apps.Picosmos.Real.Areas.Api.ViewModels;

    [Area("Api")]
    public class FinancesController : Controller
    {
        public IActionResult Index()
        {
            return Json(new { test = "Test", Number = 12.34 });
        }

        public IActionResult GetUsers()
        {
            var data = new
            {
                Data = new dynamic[]
                {
                    new { Id = 0, Name = "Schmul Goldberg" },
                    new { Id = 1, Name = "Tom Lambert" },
                },
            };
            return this.Json(data);
        }

        public IActionResult GetPersons()
        {
            var data = new
            {
                Data = new dynamic[]
                {
                    new { Id = 1, Name = "Edeka" },
                    new { Id = 2, Name = "Rewe" },
                    new { Id = 3, Name = "Aldi" },
                    new { Id = 4, Name = "Lidl" },
                    new { Id = 4, Name = "Netto" },
                    new { Id = 4, Name = "Hundenetto" },
                },
            };
            return this.Json(data);
        }

        public IActionResult GetCurrencies()
        {
            var data = new
            {
                Data = new dynamic[]
                {
                    new { Id = 1, Names = new string[] { "Euro", "€" } },
                    new { Id = 1, Names = new string[] { "US Dollar", "$" } },
                },
            };
            return this.Json(data);
        }

        [HttpPost]
        public IActionResult AddEntry(FinanceEntry data)
        {
            Debug.WriteLine(data.Value);
            return this.Ok();
        }
    }
}
