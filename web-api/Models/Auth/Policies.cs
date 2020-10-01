using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace web_api.Models.Auth
{
    public class Policies
    {
        public const string Admin = "Admin";
        public const string User = "User";
        public const string Commercial = "Commercial";
        public static AuthorizationPolicy AdminPolicy()
        {
            return RolePolicyFactory(Admin);
        }
        public static AuthorizationPolicy CommercialPolicy()
        {
            return RolePolicyFactory(Commercial);
        }
        public static AuthorizationPolicy UserPolicy()
        {
            return RolePolicyFactory(User);
        }

        public static AuthorizationPolicy RolePolicyFactory(String service)
        {
            return new AuthorizationPolicyBuilder().RequireAuthenticatedUser().RequireRole(service).Build();
        }
    }
}
