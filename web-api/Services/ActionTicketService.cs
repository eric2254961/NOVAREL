using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using web_api.Models;
using web_api.Models.Dto.Commercial;
using web_api.Validator.Commercial.Ticket;

namespace web_api.Services
{
    public class ActionTicketService : ServiceBase
    {
        public ActionTicketService(NovarelContext context) : base(context) { }

        public async Task<ActionTicket> AddNewAction(ActionTicketValidator data)
        {
            var ticket = _context.Tickets.Where(t => t.Reference == data.reference).FirstOrDefault();
            if(ticket.Id != 0)
            {
                var action = new ActionTicket();
                action.Commentaire = data.commentaire;
                action.DateAction = DateTime.Now;
                action.Ticket = ticket;
                await _context.ActionTickets.AddAsync(action);
                _context.SaveChanges();
                return action;
            }
            return null;
        }
    }
}
