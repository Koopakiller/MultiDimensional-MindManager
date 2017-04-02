using System;
using System.Web.Mvc;
using Koopakiller.Apps.Picosmos.Explorer.Models;

namespace Koopakiller.Apps.Picosmos.Explorer.Controllers
{
    public class AdminController : Controller
    {
        private readonly Entities entities = new Entities();

        public ActionResult Index() => this.View();

        public ActionResult Update_Explorer_CircularReferences()
        {

            return this.Index();
        }
        
        protected override void Dispose(Boolean disposing)
        {
            this.entities?.Dispose();
            base.Dispose(disposing);
        }
    }
}