using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using web_api.Models.Dto;

namespace web_api.Models.Auth
{
    public class Authenticate
    {
        //NovarelContext _context;
        Utilisateur demo = new Utilisateur
        {
            Email = "demon@pont-hkb.com",
            Id = 1,
            Name = "Demo Auth NOVAREL",
            Password = "azerty",
            Status = "100",
            RemenberToken = "jhdsgdhhghfjgdfdfjhfgfhfgf",
            Service = new Service { Id = 1, Libelle = "Commercial" }
        };

        String secretKey;

        public Authenticate()
        {
            this.secretKey = Startup.Configuration["Jwt:SecretKey"];
            //_context = new NovarelContext();
        }

        public Utilisateur AuthenticateUser(Utilisateur loginCredentials)
        {
            //Utilisateur user = _context.Utilisateurs
            //    .SingleOrDefault(x => x.Email == loginCredentials.Email && x.Password == loginCredentials.Password);
            return demo;
        }

        public string GenerateJWTToken(Utilisateur userInfo, String issuer, String audience)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(this.secretKey));
            
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, userInfo.Name),
                new Claim("fullName", userInfo.Name.ToString()),
                new Claim("role",userInfo.Service.Libelle),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            };

            var token = new JwtSecurityToken(
                issuer: issuer,
                audience: audience,
                claims: claims,
                expires: DateTime.Now.AddHours(4),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}