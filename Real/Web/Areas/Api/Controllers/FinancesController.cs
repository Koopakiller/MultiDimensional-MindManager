namespace Koopakiller.Apps.Picosmos.Real.Areas.Api.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Koopakiller.Apps.Picosmos.Real.Areas.Api.ViewModels;
    using Koopakiller.Apps.Picosmos.Real.Model;

    [Area("Api")]
    public class FinancesController : Controller
    {
        FinancesDbContext _context;

        public FinancesController(FinancesDbContext context)
        {
            this._context = context;
        }

        public IActionResult GetUsers()
        {
            return this.Json(this._context.GetUsers());
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
            return this.Ok();
        }
    }
}
