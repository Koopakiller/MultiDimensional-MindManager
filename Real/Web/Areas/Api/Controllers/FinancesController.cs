namespace Koopakiller.Apps.Picosmos.Real.Areas.Api.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Koopakiller.Apps.Picosmos.Real.Areas.Api.ViewModels;
    using Koopakiller.Apps.Picosmos.Real.Model;
    using System.Linq;

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
            return this.Json(new { Data = this._context.GetUsers() } );
        }

        public IActionResult GetPersons()
        {
            return this.Json(new { Data = this._context.GetPersons() } );
        }

        public IActionResult GetCurrencyAccountsForUser(int userId)
        {
            return this.Json(
                new 
                { 
                    Data = this._context.GetCurrencyAccountsForUser(userId).ToList().Select(ca => 
                           new {
                               ca.AccountId, 
                               ca.AccountName, 
                               ca.CurrencyAccountId, 
                               ca.CurrencyId,
                               CurrencyNames = this._context.GetCurrencySymbolsForCurrency(ca.CurrencyId), 
                           }),
                });
        }

        [HttpPost]
        public IActionResult AddEntry(FinanceEntry data)
        {
            return this.Ok();
        }
    }
}
