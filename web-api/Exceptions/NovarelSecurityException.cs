using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace web_api.Exceptions
{
    public class NovarelSecurityException : Exception
    {
        public NovarelSecurityException() : base() { }
        public NovarelSecurityException(string message) : base(message) { }
        public NovarelSecurityException(string message, System.Exception inner) : base(message, inner) { }

        // A constructor is needed for serialization when an
        // exception propagates from a remoting server to the client.
        protected NovarelSecurityException(System.Runtime.Serialization.SerializationInfo info,
            System.Runtime.Serialization.StreamingContext context) : base(info, context) { }
    }
}
