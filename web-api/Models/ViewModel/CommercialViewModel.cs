using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using web_api.Models.Dto.Commercial;
using web_api.Models.Dto.Shared;
using web_api.Services.Wstoll.Response;

namespace web_api.Models.ViewModel
{
    public class TicketTraitementViewModel
    {
        public Ticket Ticket { get; set; }
        public List<Objet> Objets { get; set; }
        public GetCustomerDetailsResponse Client {get; set;}
    }

    public class TicketObjetViewModel
    {
        public Ticket Ticket { get; set; }
        public List<Objet> Objets { get; set; }
    }
}
