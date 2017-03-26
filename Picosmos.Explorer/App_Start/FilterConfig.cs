using System.Web.Mvc;

namespace Koopakiller.Apps.Picosmos.Explorer
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
