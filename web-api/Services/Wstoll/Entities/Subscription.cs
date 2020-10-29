using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace web_api.Services.Wstoll.Entities
{
    public class Subscription
    {
        public string PRODUCT { get; set; }
        public string IDENTITY { get; set; }
        public string SUBS_ID { get; set; }
        public string STATUS { get; set; }
        public int SOLDE { get; set; }
        public string LM_DHMS { get; set; }
        public string LR_DHMS { get; set; }
        public string LAST_TRX { get; set; }
        public Media[] TAGS { get; set; }
    }
}
