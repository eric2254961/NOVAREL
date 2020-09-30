using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using web_api.Models.Auth;
using web_api.Models.Dto;

//Je me suis inspiré de ça avec les JWT
//https://medium.com/@vaibhavrb999/jwt-authentication-authorization-in-net-core-3-1-e762a7abe00a

namespace web_api.Controllers
{
    [Controller]    
    public class LoginController : Controller
    {
        private readonly IConfiguration _config;

        public LoginController(IConfiguration config)
        {
            _config = config;
        }

        [AllowAnonymous]
        [HttpGet]
        [Route("/login")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [Route("api/auth/token")]
        public JsonResult RefreshToken([FromBody] Object item)
        {
            var authenticate = new Authenticate();
            var user = new Utilisateur();

            return Json(new RefreshToken{ token = GenerateToken(authenticate, authenticate.AuthenticateUser(user)) });
        }
        
        [AllowAnonymous]
        [HttpPost]
        [Route("/test")]
        public IActionResult Auth()
        {
            Utilisateur credential = new Utilisateur();
            Authenticate authenticate = new Authenticate();

            IActionResult response = Unauthorized();
            Utilisateur user = authenticate.AuthenticateUser(credential);

            if (user != null)
            {
                var tokenString = GenerateToken(authenticate, user);

                response = Redirect(_config["webFront:successUrl"] + "token=" + tokenString + "&user=" + JsonConvert.SerializeObject(user));
            }

            return response;
        }

        private String GenerateToken(Authenticate authenticate, Utilisateur utilisateur)
        {
            string issuer = _config["Jwt:Issuer"];
            string audience = _config["Jwt:Audience"];
            return authenticate.GenerateJWTToken(utilisateur, issuer, audience);
        }

    }
}

class RefreshToken
{
    public String token { get; set; }
}
