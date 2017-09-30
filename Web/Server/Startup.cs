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
    using Microsoft.AspNetCore.Authorization;

    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            this.Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("ApiCORSPolicy", builder =>
                {
                    builder.AllowAnyOrigin()
                           .AllowAnyHeader()
                           .AllowAnyMethod();
                });
            });

            var tokenSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Configuration["Finances:Token:SecretKey"]));

            services.AddTransient<IClaimsIdentityService>((x) => new ClaimsIdentityService(Configuration["Finances:Admin:UserName"], Configuration["Finances:Admin:Password"]));

            services.AddTransient<ITokenGenerator>((x) => new Finances.Authentication.FinancesAuthenticationService(
                new Finances.Authentication.FinancesAuthenticationService.ServiceOptions
                {
                    Audience = Configuration["Finances:Token:Audience"],
                    Issuer = Configuration["Finances:Token:Issuer"],
                    SigningCredentials = new SigningCredentials(tokenSigningKey, SecurityAlgorithms.HmacSha256),
                }
            ));

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                    .AddJwtBearer(options =>
            {
                options.RequireHttpsMetadata = false;
                options.SaveToken = true;
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidIssuer = Configuration["Finances:Token:Issuer"],
                    ValidAudience = Configuration["Finances:Token:Audience"],
                    IssuerSigningKey = tokenSigningKey,
                    ValidateIssuerSigningKey = true,
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ClockSkew = TimeSpan.Zero
                };
            });

            services.AddDbContext<FinancesDbContext>(options =>
            {
                var connectionString = Configuration.GetConnectionString("FinancesDbContext");
                options.UseSqlServer(connectionString);
            });

            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Error");
            }

            app.UseStaticFiles();

            app.UseCors("ApiCORSPolicy");

            app.UseAuthentication();

            app.UseMvc();
        }
    }
}
