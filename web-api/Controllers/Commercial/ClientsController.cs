using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Net.Http.Headers;
using web_api.Models.Auth;
using web_api.Services;

namespace web_api.Controllers.Commercial
{
    [Route("api/commercial/[controller]/[action]")]
    [ApiController]
    public class ClientsController : ControllerBase
    {
        [HttpGet]
        [Authorize(Policy = Policies.Commercial)]
        public ContentResult SearchGeaClient([FromQuery]String subject)
        {
            return Content(ClientGeaService.GetFakeGeaClient(), MediaTypeHeaderValue.Parse("application/json"));
        }

        [HttpGet("{IdClient}")]
        [Authorize(Policy = Policies.Commercial)]
        public ContentResult ClientGeaDetails(String IdClient)
        {
            return Content(ClientGeaService.GetFakeGeaClientDetails(IdClient), MediaTypeHeaderValue.Parse("application/json"));
        }
    }
}
