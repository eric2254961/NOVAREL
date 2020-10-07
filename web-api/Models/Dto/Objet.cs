using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace web_api.Models.Dto
{
    public class Objet
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public String Libelle { get; set; }
        [Required]
        public String Module { get; set; }
    }
}
