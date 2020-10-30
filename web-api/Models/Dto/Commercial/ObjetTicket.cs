using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using web_api.Models.Dto.Shared;

namespace web_api.Models.Dto.Commercial
{
    public class ObjetTicket
    {
        public int ObjetId { get; set; }
        public int TicketId { get; set; }
        public virtual Ticket Ticket { get; set; }
        public virtual Objet Objet { get; set; }
    }
}
