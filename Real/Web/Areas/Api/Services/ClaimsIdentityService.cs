using System.Security.Claims;

namespace Koopakiller.Apps.Finances.Authentication
{

    public interface IClaimsIdentityService
    {
        ClaimsIdentity GetIdentity(string username, string password);
    }


    public class ClaimsIdentityService : IClaimsIdentityService
    {
        public ClaimsIdentityService(string userName, string password)
        {
            this._userName = userName;
            this._password = password;
        }

        private string _userName;
        private string _password;

        public ClaimsIdentity GetIdentity(string username, string password)
        {
            if (username == this._userName && password == this._password)
            {
                return new ClaimsIdentity(new System.Security.Principal.GenericIdentity(username, "Token"), new Claim[] { });
            }

            return null;
        }
    }
}