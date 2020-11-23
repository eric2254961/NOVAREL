using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using web_api.Services.Wstoll;
using web_api.Services.Wstoll.Response;

namespace web_api.Services
{
    public class ClientGeaService
    {
        public async Task<GetSubscriptionHistoryResponse> GetSubscriptionHistory(string IdAbonnement)
        {
            var api = new WstollApi();
            var jsonString = await api.GetSubscriptionHistoryAsync(IdAbonnement);
            var response = JsonSerializer.Deserialize<GetSubscriptionHistoryResponse>(jsonString);
            return response;
        }


        public async Task<GetClientsByNameResponse> SearchClientByName(string name)
        {
            var api = new WstollApi();
            var jsonString = await api.GetCustomerByNameAsync(name);
            var response = JsonSerializer.Deserialize<GetClientsByNameResponse>(jsonString);
            return response;            
        }

        public async Task<GetSubscriptionsAndTagsResponse> GetSubscriptionAndTagCustomerAsync(string IdCustomer)
        {
            var api = new WstollApi();
            var jsonString = await api.GetSubscriptionAndTagsAsync(IdCustomer);
            var response = JsonSerializer.Deserialize<GetSubscriptionsAndTagsResponse>(jsonString);
            return response;            
        }

        public async Task<GetCustomerDetailsResponse> GetCustomerByIdentityAsync(string IdCustomer)
        {
            var api = new WstollApi();
            var jsonString = await api.GetCustomerByIdentityAsync(IdCustomer);
            var response = JsonSerializer.Deserialize<GetCustomerDetailsResponse>(jsonString);
            return response;            
        }
    }
}
