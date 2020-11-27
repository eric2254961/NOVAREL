using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace web_api.Validator.Commercial.Ticket
{
    public class ActionTicketValidator: ValidatorBase
    {
        [Required(ErrorMessage = "Veuillez saisir un commentaire SVP")]
        public string commentaire { get; set; }
        [Required(ErrorMessage = "Reference manquante")]
        public string reference { get; set; }
    }
}
