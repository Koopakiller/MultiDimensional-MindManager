namespace Koopakiller.Apps.Picosmos.Real.Areas.Api.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Koopakiller.Apps.Picosmos.Real.Areas.Api.ViewModels;
    using Koopakiller.Apps.Picosmos.Real.Model;
    using System.Linq;
    using Koopakiller.Apps.Picosmos.Real.Common;
    using System.Collections.Generic;
    using System;
    using System.Diagnostics;

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
            return this.Json(DataContainer.Create(this._context.GetUsers()));
        }

        public IActionResult GetPersons()
        {
            return this.Json(DataContainer.Create(this._context.GetPersons()));
        }

        public IActionResult GetCurrencyAccountsForUser(int userId)
        {
            return this.Json(DataContainer.Create(
                this._context.GetCurrencyAccountsForUser(userId).ToList().Select(ca =>
                    new
                    {
                        ca.AccountId,
                        ca.AccountName,
                        ca.CurrencyAccountId,
                        ca.CurrencyId,
                        CurrencyNames = this._context.GetCurrencySymbolsForCurrency(ca.CurrencyId),
                    })
                ));
        }

        [HttpPost]
        public IActionResult AddTransactions([FromBody]DataContainer<FinanceTransaction[]> data)
        {
            var result = this._context.AddTransactions(data.Data);
            return this.Json(DataContainer.Create(result));
        }

        public IActionResult GetTransactions(int currencyAccountId, int skipCount, int takeCount)
        {
            return this.Json(DataContainer.Create(this._context.GetTransactions(currencyAccountId, skipCount, takeCount, SortOrder.Desc)));
        }

        public IActionResult GetTransactionOverviewForUserAtTimeStamp(int userId, DateTime timeStamp)
        {
            return this.Json(DataContainer.Create(this._context.GetTransactionOverviewForUserAtTimeStamp(userId, timeStamp)));
        }

        public IActionResult AddPerson([FromBody] DataContainer<FinancePerson> data)
        {
            var result = this._context.AddPerson(data.Data.Name, data.Data.UserId);
            return this.Json(DataContainer.Create(result));
        }
    }
}
