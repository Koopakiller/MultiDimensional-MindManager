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
            var result = this._context.GetUsers();
            return this.Json(DataContainer.Create(result));
        }

        public IActionResult GetUserGroups(int? userId)
        {
            var result = this._context.GetUserGroups(userId);
            return this.Json(DataContainer.Create(result));
        }

        public IActionResult GetPersons()
        {
            var result = this._context.GetPersons();
            return this.Json(DataContainer.Create(result));
        }

        public IActionResult GetCurrencyAccountsForUser(int userId)
        {
            var result = this._context.GetCurrencyAccountsForUser(userId).ToList().Select(ca =>
                new
                {
                    ca.AccountId,
                    ca.AccountName,
                    ca.CurrencyAccountId,
                    ca.CurrencyId,
                    CurrencyNames = this._context.GetCurrencySymbolsForCurrency(ca.CurrencyId),
                });
            return this.Json(DataContainer.Create(result));
        }

        [HttpPost]
        public IActionResult AddTransactions([FromBody]DataContainer<FinanceTransaction[]> data)
        {
            var result = this._context.AddTransactions(data.Data);
            return this.Json(DataContainer.Create(result));
        }

        public IActionResult GetTransactions(int currencyAccountId, int skipCount, int takeCount)
        {
            var result = this._context.GetTransactions(currencyAccountId, skipCount, takeCount, SortOrder.Desc);
            return this.Json(DataContainer.Create(result));
        }

        public IActionResult GetTransactionOverviewForUserAtTimeStamp(int userId, DateTime timeStamp)
        {
            var result = this._context.GetTransactionOverviewForUserAtTimeStamp(userId, timeStamp);
            return this.Json(DataContainer.Create(result));
        }

        public IActionResult AddPerson([FromBody] DataContainer<FinancePerson> data)
        {
            var result = this._context.AddPerson(data.Data.Name, data.Data.UserGroupId);
            return this.Json(DataContainer.Create(result));
        }
    }
}
