using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Text.Encodings.Web;
using System.Text.Json;
using System.Threading.Tasks;
using System.Web;

namespace web_api.Services.Wstoll
{
    public class WstollApi
    {
        private HttpClient browser = new HttpClient();
        private WstollTokenBuilder builder = new WstollTokenBuilder();

        public WstollApi()
        {
            browser.BaseAddress = new Uri("https://api.pont-hkb.com");
            
            /* LIEN DE TEST API DANS LE RESEAU SOCOPRIM
            browser.BaseAddress = new Uri("http://api.socoprim.ci");
            */

            browser.DefaultRequestHeaders.Accept.Clear();
            browser.DefaultRequestHeaders.Accept.Add(
                new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json")    
            );
            browser.DefaultRequestHeaders.Add("User-Agent", "HKB Novarel 2.0");
        }

        private string GetToken(string action)
        {
            return builder.GetTokenForAction(action);
        }


        public async Task<string> GetCustomerByName(string name)
        {
            browser.DefaultRequestHeaders.Add("Authorization","Bearer " + GetToken(WstollAction.GET_CUSTOMER_BY_NAME));
            HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Get, "/api/wstoll/customers?name=" + HttpUtility.UrlEncode(name));
            request.Content = new StringContent(string.Empty, Encoding.UTF8, "application/json");

            HttpResponseMessage result = await browser.SendAsync(request).ConfigureAwait(false);

            return await result.Content.ReadAsStringAsync().ConfigureAwait(false);      
        }

        public async Task<string> GetSubscriptionAndTags(string IdCustomer)
        {
            browser.DefaultRequestHeaders.Add("Authorization","Bearer " + GetToken(WstollAction.GET_SUBSCRIPTIONS_TAGS));
            HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Get, string.Format("/api/wstoll/customers/{0}/subscriptions/tags",IdCustomer));
            request.Content = new StringContent(string.Empty, Encoding.UTF8, "application/json");

            HttpResponseMessage result = await browser.SendAsync(request).ConfigureAwait(false);

            return await result.Content.ReadAsStringAsync().ConfigureAwait(false);      
        }

        public async Task<string> GetCustomerByIdentity(string IdCustomer)
        {
            browser.DefaultRequestHeaders.Add("Authorization","Bearer " + GetToken(WstollAction.GET_CUSTOMER_BY_IDENTITY));
            HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Get, string.Format("/api/wstoll/customers/{0}",IdCustomer));
            request.Content = new StringContent(string.Empty, Encoding.UTF8, "application/json");

            HttpResponseMessage result = await browser.SendAsync(request).ConfigureAwait(false);

            return await result.Content.ReadAsStringAsync().ConfigureAwait(false);      
        }
    }
}
