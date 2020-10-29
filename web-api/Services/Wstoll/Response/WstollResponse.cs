using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace web_api.Services.Wstoll.Response
{
    public abstract class WstollResponse
    {
        public string PARTNER_ID { get; set; }
        public string ACTION { get; set; }
        public string DHMS { get; set; }
    }
}
