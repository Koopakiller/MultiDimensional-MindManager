namespace Koopakiller.Apps.Picosmos.Real
{
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.Logging;

    public class Program
    {
        // public static void Main(string[] args)
        // {
        //     var config = new ConfigurationBuilder()
        //         .SetBasePath(Directory.GetCurrentDirectory())
        //         .AddJsonFile("hosting.json", optional: true, reloadOnChange: true)
        //         .Build();

        //     var host = new WebHostBuilder()
        //         .UseConfiguration(config)
        //         .UseKestrel()
        //         .UseContentRoot(Directory.GetCurrentDirectory())
        //         .UseSetting("detailedErrors", "true")
        //         .CaptureStartupErrors(true)
        //         .UseIISIntegration()
        //         .UseStartup<Startup>()
        //         .Build();

        //     host.Run();
        // }

        public static void Main(string[] args)
        {
            BuildWebHost(args).Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .Build();
    }
}
