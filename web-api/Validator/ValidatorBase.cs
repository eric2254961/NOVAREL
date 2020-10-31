using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace web_api.Validator
{
    public class ValidatorBase
    {
        [Required]
        public int UtilisateurId { get; set; }
    }
}
