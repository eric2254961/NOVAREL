using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.ConstrainedExecution;
using System.Threading.Tasks;

namespace web_api.Services.Wstoll
{
    public struct WstollAction
    {
        public const String GET_CUSTOMER_BY_NAME = "GCN";
        public const String GET_CUSTOMER_BY_IDENTITY = "GCI";
        public const String GET_INITIALIZED_CUSTOMER = "GIC";
        public const String GET_SUBSCRIPTIONS_LIST = "GSL";
        public const String GET_SUBSCRIPTIONS_TAGS = "GST";
        public const String GET_SUBSCRIPTIONS_HISTORY = "GSH";
        public const String GET_SUBSCRIPTIONS_DETAILS = "GSD";
        public const String GET_TAGS_LIST = "GTL";
        public const String GET_TAGS_DETAILS = "GTD"; 
    }
}
