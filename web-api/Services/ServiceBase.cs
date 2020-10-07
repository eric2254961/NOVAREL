using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using web_api.Models;

namespace web_api.Services
{
    public class ServiceBase
    {
        protected NovarelContext _context;

        public ServiceBase(NovarelContext context)
        {
            this._context = context;
        }
    }
}
