using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;

namespace Koopakiller.Apps.Finances.Authentication
{
    public interface ITokenGenerator
    {
        string GenerateToken(string username);
    }

    public class FinancesAuthenticationService : ITokenGenerator
    {
        private readonly ServiceOptions _options;

        public FinancesAuthenticationService(ServiceOptions options)
        {
            this._options = options;
        }

        public string GenerateToken(string username)
        {
            var now = DateTime.UtcNow;
            var epochTicks = new TimeSpan(new DateTime(1970, 1, 1).Ticks);
            var unixTicks = new TimeSpan(now.Ticks) - epochTicks;
            var unixTime = unixTicks.TotalSeconds;

            // Specifically add the jti (random nonce), iat (issued timestamp), and sub (subject/user) claims.
            // You can add other claims here, if you want:
            var claims = new Claim[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, username),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Iat, unixTime.ToString(), ClaimValueTypes.Integer64)
            };

            // Create the JWT and write it to a string
            var jwt = new JwtSecurityToken(
                issuer: this._options.Issuer,
                audience: this._options.Audience,
                claims: claims,
                notBefore: now,
                expires: now.Add(_options.Expiration),
                signingCredentials: _options.SigningCredentials);
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            return encodedJwt;
        }

        public class ServiceOptions
        {
            public string Issuer { get; set; }

            public string Audience { get; set; }

            public TimeSpan Expiration { get; set; } = TimeSpan.FromMinutes(5);

            public SigningCredentials SigningCredentials { get; set; }
        }
    }
}