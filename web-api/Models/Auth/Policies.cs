using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using web_api.Models.Dto.Organisation;

namespace web_api.Models.Auth
{
    public class Policies
    {
        public static AuthorizationPolicy AdminPolicy()
        {
            return RolePolicyFactory(Service.INFORMATIQUE);
        }
        public static AuthorizationPolicy DirectionPolicy()
        {
            return RolePolicyFactory(Service.INFORMATIQUE);
        }
        public static AuthorizationPolicy CommercialPolicy()
        {
            return RolePolicyFactory(Service.COMMERCIAL);
        }
        public static AuthorizationPolicy ViabilitePolicy()
        {
            return RolePolicyFactory(Service.VIABILITE);
        }

        public static AuthorizationPolicy RolePolicyFactory(String service)
        {
            return new AuthorizationPolicyBuilder().RequireAuthenticatedUser()
                .RequireAssertion(context =>
                    context.User.IsInRole(service) || context.User.IsInRole(Service.INFORMATIQUE)
                )
                .Build();
        }
    }
}
