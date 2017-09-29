namespace Koopakiller.Apps.Picosmos.Real.Controller
{
    using Microsoft.AspNetCore.Mvc;
    using System.Text.Encodings.Web;
    using System.Runtime.CompilerServices;
    using System;

    public class OfficeQR2WebController : Controller
    {
        protected IActionResult MyView([CallerMemberName] String name = null)
        {
            return base.View($@"~/Views/OfficeQR/v2/Web/{name}.cshtml");
        }

        public IActionResult Index()
        {
            return null; //TODO: Reditrect to store or show a ad-page
        }

        public IActionResult Support()
        {
            return this.MyView();
        }
    }
}