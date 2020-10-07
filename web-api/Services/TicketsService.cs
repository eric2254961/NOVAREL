using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using web_api.Models;

namespace web_api.Services
{
    public class TicketsService : ServiceBase
    {
        public TicketsService(NovarelContext context) : base(context) { }

    }
}
