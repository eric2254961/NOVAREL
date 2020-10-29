using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using web_api.Models.Dto.Commercial;

namespace web_api.Models.Dto.Shared
{
    public class PieceJointe
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Titre  { get; set; }
        [Required]
        public DateTime DatePiece  { get; set; }
        public ActionTicket  ActionTicket  { get; set; }
        public Ticket Ticket  { get; set; }

    }
}
