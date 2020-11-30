using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using web_api.Exceptions;
using web_api.Models;
using web_api.Models.Auth;
using web_api.Models.Dto;
using web_api.Models.Dto.Organisation;

//Je me suis inspiré de ça avec les JWT
//https://medium.com/@vaibhavrb999/jwt-authentication-authorization-in-net-core-3-1-e762a7abe00a

namespace web_api.Controllers
{
    [Route("auth/[controller]/[action]")]
    [Controller]
    public class LoginController : Controller
    {
        private readonly IConfiguration _config;
        private readonly NovarelContext _context;

        public LoginController(IConfiguration config, NovarelContext context)
        {
            _config = config;
            _context = context;
        }

        [AllowAnonymous]
        [HttpGet]
        public IActionResult Index()
        {
            GetEmailCookies();
            return View();
        }

        [HttpPost]
        [Route("api/auth/token")]
        public JsonResult RefreshToken([FromBody] Object item)
        {
            var authenticate = new Authenticate(this._context);
            var user = new Utilisateur();

            return Json(new RefreshToken { token = GenerateToken(authenticate, authenticate.AuthenticateUser(user)) });
        }

        private void AddEmailToCookies(string value)
        {
            var options = new CookieOptions { Expires = DateTime.Now.AddYears(1), Secure = true };
            Response.Cookies.Append("Email", value, options);
        }

        private void GetEmailCookies()
        {
            var result = Request.Cookies["Email"];
            if (result != null)
            {
                ViewData["Email"] = result;
            }
            else
            {
                ViewData["Email"] = String.Empty;
            }
        }

        [AllowAnonymous]
        [HttpPost, ValidateAntiForgeryToken]
        public IActionResult Index(string Email, string Password )
        {
            AddEmailToCookies(Email);

            Utilisateur credential = new Utilisateur();
            credential.Email = Email;
            credential.Password = Password;
            Authenticate authenticate = new Authenticate(this._context);

            IActionResult response = Unauthorized();
            Utilisateur user;

            try
            {
                user = authenticate.AuthenticateUser(credential);
            }
            catch (NovarelSecurityException e)
            {
                GetEmailCookies();
                ViewData["error"] = e.Message;
                return View();
            }
            

            if (user != null)
            {
                var tokenString = GenerateToken(authenticate, user);
                user.Password = string.Empty;

                response = Redirect($"{_config["webFront:successUrl"]}token={tokenString}&user={JsonConvert.SerializeObject(user)}");
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
