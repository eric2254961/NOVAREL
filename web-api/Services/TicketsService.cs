using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using web_api.Models;
using web_api.Models.Dto.Commercial;
using web_api.Models.Dto.Organisation;
using web_api.Models.ViewModel;
using web_api.Validator.Commercial.Ticket;

namespace web_api.Services
{
    public class TicketsService : ServiceBase
    {
        public TicketsService(NovarelContext context) : base(context) { }

        public async Task<TicketObjetViewModel> GetTicketWithDetails(string Reference)
        {
            var objets = await _context.ObjetTickets.Where( ot => ot.Ticket.Reference == Reference).Select(s => s.Objet).ToListAsync();
            var ticket = await _context.Tickets.Where(t => t.Reference == Reference)
                                         .Include(t => t.Emplacement)
                                         .ThenInclude(e => e.Zone)
                                         .Include(t => t.ModeOuverture)
                                         .FirstOrDefaultAsync();
            var actionService = new ActionTicketService(_context);
            var actions = await actionService.GetActionsFromTicketAsync(Reference);
            ticket.Actions = actions;

            return new TicketObjetViewModel { Ticket = ticket, Objets = objets };
        }

        public async Task<List<Ticket>> ListTicketsByCustomer(string IdClient)
        {
            return await _context.Tickets.Where(t => t.ClientId == IdClient)
                .OrderByDescending(t => t.DateOuverture)
                .Select(t => new Ticket{ 
                    Reference = t.Reference, 
                    IsCloture = t.IsCloture,
                    DateOuverture = t.DateOuverture,
                    ObjetTickets = t.ObjetTickets
                                    .Where( ot => ot.Ticket.Reference == t.Reference)
                                    .Select(ob => new ObjetTicket {
                                        Objet = ob.Objet
                                    })
                                    .ToList()
                }).ToListAsync();
        }

        public async Task<List<Ticket>> ListTicketsAsync(int page = 1)
        {
            return await _context.Tickets.OrderByDescending(t => t.DateOuverture)
                .Include( t => t.Emplacement)
                .ThenInclude(e => e.Zone)
                .Select(t => new Ticket
                {
                    Reference = t.Reference,
                    IsCloture = t.IsCloture,
                    DateOuverture = t.DateOuverture,
                    ModeOuverture = t.ModeOuverture,
                    DateCloture = t.DateCloture,
                    ClientId = t.ClientId,
                    Emplacement = t.Emplacement,
                    Utilisateur = new Utilisateur() { Email = t.Utilisateur.Email, Name = t.Utilisateur.Name, Id = t.Utilisateur.Id },
                }).ToListAsync();
        }

        public async Task<Ticket> AddNewticket(TicketValidator rawInput)
        {
            var ticket = new Ticket();
            ticket.ClientId = rawInput.clientGeaId;
            ticket.DateOuverture = DateTime.Now;
            ticket.Description = rawInput.description;
            ticket.Immatriculation = rawInput.immatriculation;
            ticket.Modele = rawInput.modele;
            ticket.Marque = rawInput.marque;

            var emplacement = await _context.Emplacements.FindAsync(rawInput.emplacement);
            ticket.Emplacement = emplacement;

            var dateFaits = DateTime.ParseExact(rawInput.datetime, "dd/MM/yyyy HH:mm", System.Globalization.CultureInfo.InvariantCulture);
            ticket.DateFait = dateFaits;
            ticket.IsCloture = false;
            ticket.Reference = String.Format("TKT{0:yyyyMMddHHmmssfff}", ticket.DateOuverture);

            var modeOuverture = await _context.ModeOuvertures.FindAsync(int.Parse(rawInput.openMode));
            ticket.ModeOuverture = modeOuverture;

            ticket.ObjetTickets = new List<ObjetTicket>();
            foreach (int ObjetId in rawInput.subjects)
            {
                ticket.ObjetTickets.Add(new ObjetTicket() { ObjetId = ObjetId });
            }

            var utilisateur = await _context.Utilisateurs.FindAsync(rawInput.UtilisateurId);
            ticket.Utilisateur = utilisateur;

            await _context.Tickets.AddAsync(ticket);
            await _context.SaveChangesAsync();

            return ticket;
        }

    }
}
