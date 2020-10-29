using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace web_api.Services.Wstoll.Entities
{
    public class Media
    {
        public string IDENTITY { get; set; }
        public string SUBS_ID { get; set; }
        public string TAG_ID { get; set; }
        public string STATUS { get; set; }
        public string TAG_TYPE { get; set; }
        public int CAUTION { get; set; }
        public string LM_DHMS { get; set; }
    }
}
