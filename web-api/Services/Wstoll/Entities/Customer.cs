using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace web_api.Services.Wstoll.Entities
{
    public class Customer
    {
        public string IDENTITY { get; set; }
        public string STATUS { get; set; }
        public string TYPE { get; set; }
        public string NAME { get; set; }
        public string FNAME { get; set; }
        public string CNAME { get; set; }
        public string ADDR_L1 { get; set; }
        public string ADDR_L2 { get; set; }
        public string ADDR_L3 { get; set; }
        public string POSTCOD { get; set; }
        public string TOWN { get; set; }
        public string COUNTRY { get; set; }
        public string ID_CARD_TYPE { get; set; }
        public string ID_CARD_NUMBER { get; set; }
        public string PHONE_1 { get; set; }
        public string PHONE_2 { get; set; }
        public string FAX { get; set; }
        public string EMAIL { get; set; }
        public string COMMENT { get; set; }
        public string LAST_MODIF { get; set; }

        public Subscription[] SUBSCRIPTIONS { get; set; }
    }
}
