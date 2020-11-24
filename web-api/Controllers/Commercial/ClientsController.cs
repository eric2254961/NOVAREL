using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Net.Http.Headers;
using Newtonsoft.Json;
using web_api.Models;
using web_api.Models.Auth;
using web_api.Models.ViewModel;
using web_api.Services;

namespace web_api.Controllers.Commercial
{
    [Route("api/commercial/[controller]/[action]")]
    [ApiController]
    public class ClientsController : ControllerBase
    {
        private readonly NovarelContext _context;

        public ClientsController(NovarelContext context)
        {
            _context = context;
        }

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
        public async Task<ContentResult> ClientGeaDetails(string IdClient)
        {
            var clientService = new ClientGeaService();
            var ticketService = new TicketsService(this._context);
            var subscriptions = await clientService.GetSubscriptionAndTagCustomerAsync(IdClient);
            var customer      = await clientService.GetCustomerByIdentityAsync(IdClient);

            customer.PAYLOAD.SUBSCRIPTIONS = subscriptions.PAYLOAD;
            string json = JsonConvert.SerializeObject(customer.PAYLOAD);

            return Content(json, MediaTypeHeaderValue.Parse("application/json"));
        }

        [HttpGet("{IdClient}")]
        [Authorize(Policy = Policies.Commercial)]
        public async Task<ContentResult> ClientGeaDetailsWithTickets(string IdClient)
        {
            var clientService = new ClientGeaService();
            var ticketService = new TicketsService(this._context);
            var subscriptions = await clientService.GetSubscriptionAndTagCustomerAsync(IdClient);
            var customer = await clientService.GetCustomerByIdentityAsync(IdClient);
            var tickets = await ticketService.ListTicketsByCustomer(IdClient);

            customer.PAYLOAD.SUBSCRIPTIONS = subscriptions.PAYLOAD;
            string json = JsonConvert.SerializeObject(new { Details = customer.PAYLOAD, Tickets = tickets });

            return Content(json, MediaTypeHeaderValue.Parse("application/json"));
        }

        [HttpGet("{IdAbonnement}")]
        [Authorize(Policy = Policies.Commercial)]
        public async Task<ContentResult> ClientGeaHistorique(string IdAbonnement)
        {
            var clientService = new ClientGeaService();
            var historiques = await clientService.GetSubscriptionHistory(IdAbonnement);

            string json = JsonConvert.SerializeObject(historiques.PAYLOAD);
            return Content(json, MediaTypeHeaderValue.Parse("application/json"));
        }
    }
}
