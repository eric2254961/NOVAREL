using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Policy;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Net.Http.Headers;
using Newtonsoft.Json;
using web_api.Models;
using web_api.Models.Auth;
using web_api.Models.Dto.Commercial;
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
        public async Task<ContentResult> GetDataForNewTicket()
        {
            EnablersService enablerService = new EnablersService(this._context);

            var context = new {
                OpenModes = await enablerService.getAllModeOuvertureTicket(),
                Subjects = await enablerService.getAllSubjectsTicket(),
                Localisations = new
                {
                    Zones = await this._context.Zones.ToListAsync(),
                    Emplacements = await this._context.Emplacements.ToListAsync(),
                }
            };

            return Content(JsonConvert.SerializeObject(context), MediaTypeHeaderValue.Parse("application/json"));
        }
    }
}
