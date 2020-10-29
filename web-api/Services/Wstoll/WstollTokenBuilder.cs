using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace web_api.Services.Wstoll
{
    public class WstollTokenBuilder
    {
        private Wstoll wstoll;
        private UnicodeEncoding encoding;
        public WstollTokenBuilder()
        {
            this.encoding = new UnicodeEncoding();
            this.wstoll = new Wstoll();
        }

        private String GetKey()
        {
            return this.wstoll.PrivateKey.Replace("-----BEGIN RSA PRIVATE KEY-----", "").Replace("-----END RSA PRIVATE KEY-----", "").Replace("\n", "");
        }

        public String GetTokenForAction(String action)
        {
            using RSA rsa = RSA.Create();
            rsa.ImportRSAPrivateKey(
                Convert.FromBase64String(string.Join(null,this.GetKey())), 
                out _);
            

            var credentials = new SigningCredentials(
                key: new RsaSecurityKey(rsa), 
                algorithm: SecurityAlgorithms.RsaSha256);

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Iss, this.wstoll.Issuer),
                new Claim(JwtRegisteredClaimNames.Aud, this.wstoll.Audiance),
                new Claim(JwtRegisteredClaimNames.Jti, this.wstoll.GrantToken),
                new Claim(JwtRegisteredClaimNames.Sub, action),
            };

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddMinutes(15),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
