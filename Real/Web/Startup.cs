namespace Koopakiller.Apps.Picosmos.Real
{
    using System;
    using System.IO;
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.Http;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.FileProviders;
    using Microsoft.Extensions.Logging;
    using Koopakiller.Apps.Picosmos.Real.Model;
    using Microsoft.EntityFrameworkCore;

    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile("appsettings.database.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework servcices.
            services.AddMvc();
            
            services.AddDbContext<FinancesDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("FinancesDbContext")));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFilesFromFolder("node_modules");
            app.UseStaticFilesFromFolder("App");
            app.UseStaticFilesFromFolder("Styles");
            app.UseStaticFilesFromFolder("Images");
            app.UseStaticFilesFromFolder("Templates");
            app.UseStaticFilesFromFolder("");

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "areaRoute",
                    template: "{area:exists}/{controller=Home}/{action=Index}");
                routes.MapRoute(
                    name: "AngularHomeApp",
                    template: "Home/{*route}",
                    defaults: new { controller = "Home", action = "Index" });
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }

    static class Extensions
    {
        public static void UseStaticFilesFromFolder(this IApplicationBuilder app, String relativeDirectory)
        {
            relativeDirectory = relativeDirectory.TrimStart('/');
            app.UseStaticFiles(new StaticFileOptions()
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), relativeDirectory)),
                RequestPath = new PathString(relativeDirectory == "" ? "" : "/" + relativeDirectory)
            });
        }
    }
}
