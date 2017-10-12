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

    [EnableCors("ApiCORSPolicy")]
    [Route("api/Auth")]
    public class AuthController : Controller
    {
        ITokenGenerator _authService;
        IClaimsIdentityService _claimsIdentityService;

        public AuthController(ITokenGenerator authService, IClaimsIdentityService claimsIdentityService)
        {
            this._authService = authService;
            this._claimsIdentityService = claimsIdentityService;
        }

        [HttpPost("GetToken")]
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
