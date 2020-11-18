using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using web_api.Models.Dto.Pont;
using web_api.Models.Dto.Shared;

namespace web_api.Models.Dto.Commercial
{
    public class Ticket
    {
        
        
        [Key]
        public int Id { get; set; }
        [Required]
        [MaxLength(20)]
        public String Reference { get; set; }
        [Required]
        [MaxLength(12)]
        public String ClientId { get; set; }
        [Required]
        public ModeOuverture ModeOuverture { get; set; }
        [Required]
        public Emplacement Emplacement { get; set; }
        [Required]
        public DateTime DateFait { get; set; }
        [Required]
        public bool IsCloture { get; set; }
        public DateTime? DateCloture { get; set; }
        [Required]
        public DateTime DateOuverture { get; set; }
        [Required]
        public string Description { get; set; }
        public string Immatriculation { get; set; }
        public string Marque { get; set; }
        public string Modele { get; set; }
        public ICollection<PieceJointe> PieceJointes { get; set; }
      
        public virtual ICollection<ObjetTicket> ObjetTickets { get; set; }

        public ICollection<ActionTicket> Actions { get; set; }

    }
}
