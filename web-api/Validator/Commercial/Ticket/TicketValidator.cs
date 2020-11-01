using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using web_api.Validator.Attribute;

namespace web_api.Validator.Commercial.Ticket
{
    public class TicketValidator : ValidatorBase
    {
        [Required (ErrorMessage = "Veuillez saisir la description du ticket")]
        public string description { get; set; }
        public int emplacement { get; set; }

        public string immatriculation { get; set; }
        public string marque { get; set; }
        public string modele { get; set; }
        public int openMode { get; set; }
        [Sens (ErrorMessage = "Le sens est compris entre 1 et 2")]
        public int sens { get; set; }
        [Required (ErrorMessage = "Veuillez sélectionner au moins un objet du ticket")]
        public int[] subjects { get; set; }
        [Required(ErrorMessage = "Choisir le type de ticket")]
        public string typeticket { get; set; }
        public int zone { get; set; }
    }
}
