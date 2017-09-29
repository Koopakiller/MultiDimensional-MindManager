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
    using Microsoft.IdentityModel.Tokens;
    using System.Text;
    using Microsoft.Extensions.Options;
    using Koopakiller.Apps.Finances.Authentication;
    using Microsoft.AspNetCore.Authentication.JwtBearer;

    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            this.Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // services.AddCors(options =>
            // {
            //     options.AddPolicy("ApiCORSPolicy",
            //             builder =>
            //         {
            //             builder.AllowAnyOrigin()
            //                     .AllowAnyHeader()
            //                     .AllowAnyMethod();
            //         });
            // });

            // services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
            // {
            //     options.TokenValidationParameters = new TokenValidationParameters
            //     {
            //         // The signing key must match!
            //         ValidateIssuerSigningKey = false,// true,
            //         IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Configuration["Finances:Token:SecretKey"])),

            //         // Validate the JWT Issuer (iss) claim
            //         ValidateIssuer = false,//  true,
            //         ValidIssuer = Configuration["Finances:Token:Issuer"],

            //         // Validate the JWT Audience (aud) claim
            //         ValidateAudience = false,// true,
            //         ValidAudience = Configuration["Finances:Token:Audience"],

            //         // Validate the token expiry
            //         ValidateLifetime = false,// true,

            //         // If you want to allow a certain amount of clock drift, set that here:
            //         ClockSkew = TimeSpan.Zero
            //     };
            // });

            // Add framework servcices.
            services.AddMvc();

            // services.AddDbContext<FinancesDbContext>(options =>
            //     options.UseSqlServer(Configuration.GetConnectionString("FinancesDbContext")));

            // services.AddTransient<IClaimsIdentityService>((x) => new ClaimsIdentityService(Configuration["Finances:Admin:UserName"], Configuration["Finances:Admin:Password"]));

            // var signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Configuration["Finances:Token:SecretKey"]));
            // var options2 = new Finances.Authentication.FinancesAuthenticationService.ServiceOptions
            // {
            //     Audience = Configuration["Finances:Token:Audience"],
            //     Issuer = Configuration["Finances:Token:Issuer"],
            //     SigningCredentials = new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256),
            // };
            // services.AddTransient<ITokenGenerator>((x) => new Finances.Authentication.FinancesAuthenticationService(options2));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            //    app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            //app.UseCors("ApiCORSPolicy");

            app.UseMvc(routes =>
            {
                // routes.MapRoute(
                //     name: "areaRoute",
                //     template: "{area:exists}/{controller=Home}/{action=Index}");

                routes.MapRoute(
                    name: "defaultClientRoute",
                    template: "{controller=Home}/{action=Index}");
            });
        }
    }
}
