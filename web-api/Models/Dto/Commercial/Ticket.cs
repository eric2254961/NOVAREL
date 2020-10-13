using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace web_api.Models.Dto.Commercial
{
    public class Ticket
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [MaxLength(12)]
        public String Reference { get; set; }
        [Required]
        [MaxLength(12)]
        public String ClientId { get; set; }
        [Required]
        public ModeOuverture ModeOuverture { get; set; }

        public List<Objet> Objets { get; set; }

        public DateTime DateFait { get; set; }
    }
}
