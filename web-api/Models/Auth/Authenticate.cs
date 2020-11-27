using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using web_api.Exceptions;
using web_api.Models.Dto;
using web_api.Models.Dto.Organisation;

namespace web_api.Models.Auth
{
    public class Authenticate
    {
        string secretKey;
        NovarelContext _context;

        public Authenticate(NovarelContext context)
        {
            this.secretKey = Startup.Configuration["Jwt:SecretKey"];
            this._context = context;
        }

        public Utilisateur AuthenticateUser(Utilisateur loginCredentials)
        {
            Utilisateur user = _context.Utilisateurs.Where(u => u.Email == loginCredentials.Email)
                                                    .Include(u => u.Service)
                                                    .FirstOrDefault();

            if (user != null)
            {
                if(user.Password == HashPassword(loginCredentials.Password))
                {
                    return user;
                }
                throw new NovarelSecurityException("Mot de passe incorrect");
            }
            throw new NovarelSecurityException("Login incorrect");
        }

        public static string HashPassword(string password)
        {
            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: password,
                salt: Encoding.UTF8.GetBytes(Startup.Configuration["Jwt:SecretKey"]),
                prf: KeyDerivationPrf.HMACSHA256,
                iterationCount: 10000,
                numBytesRequested: 256 / 8)
            );
            return hashed;
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