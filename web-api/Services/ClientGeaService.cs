﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace web_api.Services
{
    public class ClientGeaService
    {
        public static String GetFakeGeaClient()
        {
            return @"[
    {
      ""IDENTITY"": ""000000041015"",
      ""STATUS"": ""1"",
      ""TYPE"": ""2"",
      ""NAME"": ""KOFFI BERENGER WILFRIED"",
      ""FNAME"": "" "",
      ""CNAME"": "" "",
      ""ADDR_L1"": ""ABIDJAN"",
      ""ADDR_L2"": "" "",
      ""ADDR_L3"": "" "",
      ""POSTCODE"": ""ABIDJAN"",
      ""TOWN"": ""ABIDJAN"",
      ""COUNTRY"": "" "",
      ""ID_CARD_TYPE"": ""1"",
      ""ID_CARD_NUMBER"": ""C 0088 6269 54"",
      ""PHONE_1"": ""47631443"",
      ""PHONE_2"": "" "",
      ""FAX"": "" "",
      ""EMAIL"": ""glamolondon@gmail.com"",
      ""COMMENT"": ""FAI"",
      ""LAST_MODIF"": ""20160401165559""
    },{
      ""IDENTITY"": ""000000034560"",
      ""STATUS"": ""1"",
      ""TYPE"": ""2"",
      ""NAME"": ""DIGBEU ERIC"",
      ""FNAME"": "" "",
      ""CNAME"": "" "",
      ""ADDR_L1"": ""ABIDJAN"",
      ""ADDR_L2"": "" "",
      ""ADDR_L3"": "" "",
      ""POSTCODE"": ""ABIDJAN"",
      ""TOWN"": ""ABIDJAN"",
      ""COUNTRY"": "" "",
      ""ID_CARD_TYPE"": ""1"",
      ""ID_CARD_NUMBER"": ""C 65 2325 5632562"",
      ""PHONE_1"": ""01020304"",
      ""PHONE_2"": "" "",
      ""FAX"": "" "",
      ""EMAIL"": """",
      ""COMMENT"": ""FAI"",
      ""LAST_MODIF"": ""20160401165559""
    },{
      ""IDENTITY"": ""000000012345"",
      ""STATUS"": ""1"",
      ""TYPE"": ""1"",
      ""NAME"": ""SOLIBRA"",
      ""FNAME"": "" "",
      ""CNAME"": "" "",
      ""ADDR_L1"": ""ABIDJAN"",
      ""ADDR_L2"": "" "",
      ""ADDR_L3"": "" "",
      ""POSTCODE"": ""ABIDJAN"",
      ""TOWN"": ""ABIDJAN"",
      ""COUNTRY"": "" "",
      ""ID_CARD_TYPE"": ""1"",
      ""ID_CARD_NUMBER"": ""CCC 8997787987"",
      ""PHONE_1"": ""22 09 34 21"",
      ""PHONE_2"": "" "",
      ""FAX"": "" "",
      ""EMAIL"": ""info@solibra.ci"",
      ""COMMENT"": ""FAI"",
      ""LAST_MODIF"": ""20160401165559""
    }
  ]";
        }
    }
}
