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
        
        [AllowAnonymous]
        [HttpPost]
        [Route("/test")]
        public IActionResult Auth()
        {
            Utilisateur credential = new Utilisateur();
            string secret = _config["Jwt:SecretKey"];
            Authenticate authenticate = new Authenticate(secret);

            IActionResult response = Unauthorized();
            Utilisateur user = authenticate.AuthenticateUser(credential);

            if (user != null)
            {
                string issuer = _config["Jwt:Issuer"];
                string audience = _config["Jwt:Audience"];
                var tokenString = authenticate.GenerateJWTToken(user, issuer, audience);

                response = Redirect(_config["webFront:successUrl"] + "token=" + tokenString + "&user=" + JsonConvert.SerializeObject(user));
            }

            return response;
        }

    }


}
