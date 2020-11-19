using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using web_api.Models;
using web_api.Models.Dto.Commercial;
using web_api.Models.ViewModel;
using web_api.Validator.Commercial.Ticket;

namespace web_api.Services
{
    public class TicketsService : ServiceBase
    {
        public TicketsService(NovarelContext context) : base(context) { }

        public TicketObjetViewModel GetTicketWithDetails(string Reference)
        {
            var objets = _context.ObjetTickets.Where( ot => ot.Ticket.Reference == Reference).Select(s => s.Objet).ToList();
            var ticket = _context.Tickets.Where(t => t.Reference == Reference).FirstOrDefault();
            return new TicketObjetViewModel { Ticket = ticket, Objets = objets };
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

            var modeOuverture = await _context.ModeOuvertures.FindAsync(rawInput.openMode);
            ticket.ModeOuverture = modeOuverture;

            ticket.ObjetTickets = new List<ObjetTicket>();

            foreach (int ObjetId in rawInput.subjects)
            {
                ticket.ObjetTickets.Add(new ObjetTicket() { ObjetId = ObjetId });
            }

            await _context.Tickets.AddAsync(ticket);
            await _context.SaveChangesAsync();

            return ticket;
        }

    }
}
