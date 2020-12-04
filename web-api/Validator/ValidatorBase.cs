using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace web_api.Validator
{
    //S'inpirer de cette page pour les validations de données du front
    //https://www.c-sharpcorner.com/article/custom-model-validation-in-asp-net-core-3-1/
    //https://alexdunn.org/2018/05/22/add-model-validation-to-your-asp-net-core-web-api/
    public class ValidatorBase
    {
        [Required(ErrorMessage = "Le code utilisateur est requis")]
        public int UtilisateurId { get; set; }
    }
}
