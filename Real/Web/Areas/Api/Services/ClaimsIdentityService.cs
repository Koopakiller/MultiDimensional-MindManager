using System.Security.Claims;

namespace Koopakiller.Apps.Finances.Authentication
{

    public interface IClaimsIdentityService
    {
        ClaimsIdentity GetIdentity(string username, string password);
    }


    public class ClaimsIdentityService : IClaimsIdentityService
    {
        public ClaimsIdentity GetIdentity(string username, string password)
        {
            // DON'T do this in production, obviously!
            if (username == "TEST" && password == "TEST123")
            {
                return new ClaimsIdentity(new System.Security.Principal.GenericIdentity(username, "Token"), new Claim[] { });
            }

            // Credentials are invalid, or account doesn't exist
            return null;
        }
    }
}