using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace web_api.Validator.Commercial.Ticket
{
    public class TicketValidator
    {
        public string description { get; set; }
        public int emplacement { get; set; }
        public string immatriculation { get; set; }
        public string marque { get; set; }
        public string modele { get; set; }
        public int openMode { get; set; }
        public int sens { get; set; }
        //subject5: true
        public string typeticket { get; set; }
        public int zone { get; set; }
    }
}
