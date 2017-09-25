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
    using Koopakiller;
    using Koopakiller.Apps.Finances.Authentication;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Authentication.JwtBearer;
    using Microsoft.AspNetCore.Cors;

    [Area("Api")]
    [EnableCors("ApiCORSPolicy")]
    public class FinancesController : Controller
    {
        FinancesDbContext _context;
        ITokenGenerator _authService;
        IClaimsIdentityService _claimsIdentityService;

        public FinancesController(FinancesDbContext context, ITokenGenerator authService, IClaimsIdentityService claimsIdentityService)
        {
            this._context = context;
            this._authService = authService;
            this._claimsIdentityService = claimsIdentityService;
        }


        [Authorize(ActiveAuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult GetUsers()
        {
            try
            {
                var result = this._context.GetUsers();
                return this.Json(DataContainer.Create(result));
            }
            catch (Exception ex)
            {
                DebugHelper.WriteException(ex);
                return this.StatusCode(500);
            }
        }

        [Authorize(ActiveAuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult GetUserGroups(int? userId)
        {
            try
            {
                var result = this._context.GetUserGroups(userId).ToList();
                return this.Json(DataContainer.Create(result));
            }
            catch (Exception ex)
            {
                DebugHelper.WriteException(ex);
                return this.StatusCode(500);
            }
        }

        [Authorize(ActiveAuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult GetPersons()
        {
            try
            {
                var result = this._context.GetPersons();
                return this.Json(DataContainer.Create(result));
            }
            catch (Exception ex)
            {
                DebugHelper.WriteException(ex);
                return this.StatusCode(500);
            }
        }

        [Authorize(ActiveAuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult GetCurrencyAccountsForUser(int userId)
        {
            try
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
            catch (Exception ex)
            {
                DebugHelper.WriteException(ex);
                return this.StatusCode(500);
            }
        }

        [Authorize(ActiveAuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpPost]
        public IActionResult AddTransactions([FromBody]DataContainer<FinanceTransaction[]> data)
        {
            try
            {
                var result = this._context.AddTransactions(data.Data);
                return this.Json(DataContainer.Create(result));
            }
            catch (Exception ex)
            {
                DebugHelper.WriteException(ex);
                return this.StatusCode(500);
            }
        }

        [Authorize(ActiveAuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult GetTransactions(int currencyAccountId, int skipCount, int takeCount)
        {
            try
            {
                var result = this._context.GetTransactions(currencyAccountId, skipCount, takeCount, SortOrder.Desc);
                return this.Json(DataContainer.Create(result));
            }
            catch (Exception ex)
            {
                DebugHelper.WriteException(ex);
                return this.StatusCode(500);
            }
        }

        [Authorize(ActiveAuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult GetTransactionOverviewForUserAtTimeStamp(int userId, DateTime timeStamp)
        {
            try
            {
                var result = this._context.GetTransactionOverviewForUserAtTimeStamp(userId, timeStamp);
                return this.Json(DataContainer.Create(result));
            }
            catch (Exception ex)
            {
                DebugHelper.WriteException(ex);
                return this.StatusCode(500);
            }
        }

        [Authorize(ActiveAuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult AddPerson([FromBody] DataContainer<FinancePerson> data)
        {
            try
            {
                var result = this._context.AddPerson(data.Data.Name, data.Data.UserGroupId);
                return this.Json(DataContainer.Create(result));
            }
            catch (Exception ex)
            {
                DebugHelper.WriteException(ex);
                return this.StatusCode(500);
            }
        }

        [Authorize(ActiveAuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult GetUsersFromUserGroup(int userGroupId)
        {
            try
            {
                var result = this._context.GetUsersFromUserGroup(userGroupId);
                return this.Json(DataContainer.Create(result));
            }
            catch (Exception ex)
            {
                DebugHelper.WriteException(ex);
                return this.StatusCode(500);
            }
        }

        [AllowAnonymous]
        public IActionResult GetToken([FromBody]DataContainer<ApplicationUser> data)
        {
            try
            {
                var identity = this._claimsIdentityService.GetIdentity(data.Data.UserName, data.Data.Password);
                if (identity == null)
                {
                    return this.BadRequest();
                }

                var token = this._authService.GenerateToken(data.Data.UserName);
                return this.Json(DataContainer.Create(token));
            }
            catch (Exception ex)
            {
                DebugHelper.WriteException(ex);
                return this.StatusCode(500);
            }
        }
    }
}
