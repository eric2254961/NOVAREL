using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace web_api.Models.Dto.Organisation
{
    public class Utilisateur
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        public string RemenberToken { get; set; }
        public string Status { get; set; }
        [Required]
        public Service Service { get; set; }
    }
}
