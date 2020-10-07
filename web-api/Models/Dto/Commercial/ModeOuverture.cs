﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace web_api.Models.Dto.Commercial
{
    public class ModeOuverture
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public String Libelle { get; set; }
    }
}
