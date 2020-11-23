using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace web_api.Services.Wstoll.Entities
{
    public class Historique
    {
        public string SITE { get; set; }
        public string LANE { get; set; }
        public string PLAZA { get; set; }
        public string DHMS { get; set; }
        public string OPERATION { get; set; }
        public string SUBS_ID { get; set; }
        public int AMOUNT { get; set; }
        public int BALANCE { get; set; }
        public int BALANCE_BEFORE { get; set; }
        public string MEDIA { get; set; }
    }
}
