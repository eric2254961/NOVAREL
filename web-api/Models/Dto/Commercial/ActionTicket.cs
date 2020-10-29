using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using web_api.Models.Dto.Organisation;
using web_api.Models.Dto.Shared;

namespace web_api.Models.Dto.Commercial
{
    public class ActionTicket
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public DateTime DateAction { get; set; }
        [Required]
        public string Commentaire { get; set; }
        [Required]
        public Ticket Ticket { get; set; }
        [Required]
        public Utilisateur Utilisateur { get; set; }
        public ICollection<PieceJointe> PieceJointes { get; set; }

    }

}
