﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Net.Http.Headers;
using Newtonsoft.Json;
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
        public async Task<ContentResult> SearchGeaClient([FromQuery]String subject)
        {
            var clientService = new ClientGeaService();
            var data = await clientService.SearchClientByName(subject);
            string json = JsonConvert.SerializeObject(data.PAYLOAD);
            return Content(json, MediaTypeHeaderValue.Parse("application/json"));
        }

        [HttpGet("{IdClient}")]
        [Authorize(Policy = Policies.Commercial)]
        public async Task<ContentResult> ClientGeaDetails(String IdClient)
        {
            var clientService = new ClientGeaService();
            var subscriptions = await clientService.GetSubscriptionAndTagCustomer(IdClient);
            var customer      = await clientService.GetCustomerByIdentity(IdClient);

            customer.PAYLOAD.SUBSCRIPTIONS = subscriptions.PAYLOAD;
            string json = JsonConvert.SerializeObject(customer.PAYLOAD);

            return Content(json, MediaTypeHeaderValue.Parse("application/json"));
        }
    }
}
