using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Net.Http.Headers;
using Newtonsoft.Json;
using web_api.Models;
using web_api.Models.Auth;
using web_api.Services;

namespace web_api.Controllers.Commercial
{
    [Route("api/commercial/[controller]/[action]")]
    [ApiController]
    public class TicketsController : ControllerBase
    {
        private readonly NovarelContext _context;

        public TicketsController(NovarelContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Authorize(Policy = Policies.Commercial)]
        public ContentResult GetDataForNewTicket()
        {
            EnablersService enablers = new EnablersService(this._context);

            Dictionary<String, Object> data = new Dictionary<string, Object>();

            EnablersService enablerService = new EnablersService(this._context);

            data.Add("openMode", enablerService.getAllModeOuvertureTicket());
            data.Add("subject", enablerService.getAllSubjectsTicket());

            return Content(JsonConvert.SerializeObject(data), MediaTypeHeaderValue.Parse("application/json"));
        }
    }
}
