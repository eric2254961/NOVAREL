using Microsoft.EntityFrameworkCore;
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
                action.Utilisateur = _context.Utilisateurs.Find(data.UtilisateurId);
                await _context.ActionTickets.AddAsync(action);
                _context.SaveChanges();
                return action;
            }
            return null;
        }

        public async Task<List<ActionTicket>> GetActionsFromTicketAsync(string reference)
        {
            return await _context.ActionTickets.Where(a => a.Ticket.Reference == reference)
                .OrderByDescending(a => a.DateAction)
                .Select(a => new ActionTicket
                {
                    Commentaire = a.Commentaire,
                    DateAction = a.DateAction,
                    Id = a.Id,
                    Utilisateur = a.Utilisateur
                })
                .ToListAsync();
        }
    }
}
