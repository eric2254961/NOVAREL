using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace web_api.Models.Dto.Organisation
{
    public class Service
    {
        public const string VIABILITE = "Viabilite";
        public const string COMMERCIAL = "Commercial";
        public const string INFORMATIQUE = "Informatique";
        public const string DIRECTION = "Direction";

        [Key]
        public int Id { get; set; }
        [Required]
        public String Libelle { get; set; }
    }
}
