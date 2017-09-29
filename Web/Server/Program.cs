namespace Koopakiller.Apps.Picosmos.Real
{
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Linq;
    using System.Reflection;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.Logging;

    public class Program
    {
        public static void Main(string[] args)
        {
            var config = new ConfigurationBuilder()
                            .SetBasePath(Directory.GetCurrentDirectory())
                            .AddJsonFile("appsettings.secrets.debug.json", optional: true)
                            .AddCommandLine(args)
                            .Build();

            WebHost.CreateDefaultBuilder(args)
                   .UseSetting(WebHostDefaults.ApplicationKey, typeof(Startup).GetTypeInfo().Assembly.FullName)
                   .UseConfiguration(config)
                   .UseStartup<Startup>()
                   .Build()
                   .Run();
        }
    }
}
