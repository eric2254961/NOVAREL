using Microsoft.EntityFrameworkCore;
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

        public async Task<List<ModeOuverture>> getAllModeOuvertureTicket()
        {
            return await this._context.ModeOuvertures.ToListAsync();
        }
        public async Task<List<Objet>> getAllSubjectsTicket()
        {
            return await this._context.Objets.ToListAsync();
        }
    }
}