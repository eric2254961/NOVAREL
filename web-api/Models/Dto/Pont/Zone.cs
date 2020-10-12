using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace web_api.Models.Dto.Pont
{
    public class Zone
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public String Libelle { get; set; }
    }
}
