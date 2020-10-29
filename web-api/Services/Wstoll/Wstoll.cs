using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace web_api.Services.Wstoll
{
    public class Wstoll
    {

        public String PrivateKey { get; }
        public String Audiance { get; }
        public String Issuer { get; }
        public String GrantToken { get; }

        public Wstoll()
        {
            this.Issuer = "384008";
            this.Audiance = "384007";
            this.GrantToken = "$2y$10$OIdrVqlmtJGk1vqkH17q4ePB3fUpF8n.PYjqx5St42PPPVfTN0ivq";

            //-----BEGIN RSA PRIVATE KEY-----
            this.PrivateKey =
@"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";
            //-----END RSA PRIVATE KEY-----
        }
    }
}
