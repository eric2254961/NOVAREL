using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace web_api.Validator.Attribute
{
    public class SensAttribute : ValidationAttribute
    {
        public override bool IsValid(object value)
        {
            var sens = Convert.ToInt32(value);

            if (sens == 1 || sens == 2)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
