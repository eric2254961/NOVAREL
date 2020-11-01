using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using web_api.Validator.Commercial.Ticket;
using web_api.Views.Notifications;

namespace web_api.Controllers.Commercial
{
    [Route("api/commercial/[controller]/[action]")]
    [ApiController]
    public class ValidatorController : ControllerBase
    {
        [HttpPost]
        public ActionResult<Object> NewTicket([FromBody] TicketValidator input)
        {
            var context = new { Type = Notification.Error, Message = "Echec de validation du formulaire" };
            if (ModelState.IsValid)
            {
                context = new { Type = Notification.Success, Message = "Validation OK" };
            }

            return context;
        }
    }
}
