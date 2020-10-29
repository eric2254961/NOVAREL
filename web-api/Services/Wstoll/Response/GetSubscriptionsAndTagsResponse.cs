using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using web_api.Services.Wstoll.Entities;

namespace web_api.Services.Wstoll.Response
{
    public class GetSubscriptionsAndTagsResponse : WstollResponse
    {
        public Subscription[] PAYLOAD { get; set; }
    }
}
