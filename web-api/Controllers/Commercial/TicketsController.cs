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
using web_api.Models.Dto.Organisation;
using web_api.Models.ViewModel;
using web_api.Services;
using web_api.Validator.Commercial.Ticket;
using web_api.Views.Notifications;

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

        [HttpGet("{IdClient}")]
        [Authorize(Policy = Service.COMMERCIAL)]
        public async Task<ContentResult> GetDataForNewTicket(string IdClient)
        {
            EnablersService enablerService = new EnablersService(this._context);
            var clientService = new ClientGeaService();
            var subscriptions = await clientService.GetSubscriptionAndTagCustomerAsync(IdClient);
            var customer      = await clientService.GetCustomerByIdentityAsync(IdClient);
            customer.PAYLOAD.SUBSCRIPTIONS = subscriptions.PAYLOAD;

            var context = new {
                OpenModes = await enablerService.getAllModeOuvertureTicketAsync(),
                Subjects  = await enablerService.getAllSubjectsTicketAsync(),
                Client    = customer.PAYLOAD,
                Localisations = new
                {
                    Zones        = await this._context.Zones.ToListAsync(),
                    Emplacements = await this._context.Emplacements.ToListAsync(),
                }
            };

            return Content(JsonConvert.SerializeObject(context), MediaTypeHeaderValue.Parse("application/json"));
        }

        [HttpPost]
        [Authorize(Policy = Service.COMMERCIAL)]
        public async Task<StatusCodeResult> AddNewAction([FromBody] ActionTicketValidator input)
        {
            if (ModelState.IsValid)
            {
                var actionService = new ActionTicketService(this._context);
                var action = await actionService.AddNewAction(input);
                return Ok();
            }
            else
            {
                return BadRequest();
            }
            
        }

        [HttpPost]
        [Authorize(Policy = Service.COMMERCIAL)]
        public async Task<ContentResult> AddNewTicket([FromBody] TicketValidator input)
        {
            var viewModel = new TicketAddViewModel();

            if (ModelState.IsValid)
            {
                var service = new TicketsService(_context);
                var ticket = await service.AddNewticket(input);
                viewModel.Type = (int) Notification.Success;
                viewModel.Message = string.Format("Ticket {0} créé avec succès.", ticket.Reference);
                viewModel.Reference = ticket.Reference;
            }
            else
            {
                viewModel.Type = (int)Notification.Error;
                viewModel.Message = "Erreur de validation";
                viewModel.Reference = string.Empty;
            }

            return Content(JsonConvert.SerializeObject(viewModel), MediaTypeHeaderValue.Parse("application/json"));
        }

        [HttpGet("{Reference}")]
        [Authorize(Policy = Service.COMMERCIAL)]
        public async Task<ContentResult> GetTicketDetails(string Reference)
        {
            var service = new TicketsService(_context);
            var ticketObjets  = await service.GetTicketWithDetails(Reference);

            var clientService = new ClientGeaService();
            var subscriptions = await clientService.GetSubscriptionAndTagCustomerAsync(ticketObjets.Ticket.ClientId);
            var customer = await clientService.GetCustomerByIdentityAsync(ticketObjets.Ticket.ClientId);
            customer.PAYLOAD.SUBSCRIPTIONS = subscriptions.PAYLOAD;

            var context = new TicketTraitementViewModel { Ticket = ticketObjets.Ticket, Objets = ticketObjets.Objets, Client = customer.PAYLOAD };

            return Content(JsonConvert.SerializeObject(context), MediaTypeHeaderValue.Parse("application/json"));
        }

        [HttpGet("{Reference}")]
        [Authorize(Policy = Service.COMMERCIAL)]
        public async Task<ContentResult> GetTicketActionListe(string Reference)
        {
            var service = new ActionTicketService(this._context);
            var context = await service.GetActionsFromTicketAsync(Reference);
            return Content(JsonConvert.SerializeObject(context), MediaTypeHeaderValue.Parse("application/json"));
        }

        [Authorize(Policy = Service.COMMERCIAL)]
        public async Task<ContentResult> GetTicketListe(string page)
        {
            var service = new TicketsService(this._context);
            var context = await service.ListTicketsAsync();
            return Content(JsonConvert.SerializeObject(context), MediaTypeHeaderValue.Parse("application/json"));
        }
    }
}
