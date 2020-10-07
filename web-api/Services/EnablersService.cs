using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using web_api.Models;
using web_api.Models.Dto;
using web_api.Models.Dto.Commercial;

namespace web_api.Services
{
    public class EnablersService : ServiceBase
    {
        public EnablersService(NovarelContext context): base(context)
        {
        }

        public List<ModeOuverture> getAllModeOuvertureTicket()
        {
            return this._context.ModeOuvertures.ToList();
        }
        public List<Objet> getAllSubjectsTicket()
        {
            return this._context.Objets.ToList();
        }
    }
}