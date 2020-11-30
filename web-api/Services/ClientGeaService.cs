using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using web_api.Services.Wstoll;
using web_api.Services.Wstoll.Entities;
using web_api.Services.Wstoll.Response;

namespace web_api.Services
{
    public class ClientGeaService
    {
        public const string CLIENT_ANONYME = "000000000000";


        public static GetCustomerDetailsResponse GetAnonymeAccountDetails()
        {
            return new GetCustomerDetailsResponse()
            {
                ACTION = "",
                DHMS = DateTime.Now.ToString("dd/MM/yyyy hh:mm:ss"),
                PAYLOAD = new Customer() { IDENTITY = CLIENT_ANONYME, NAME = "Client Anonyme", ADDR_L1 = "Non défini", COUNTRY="Côte d'Ivoire", TOWN= "Abidjan", TYPE = "2", SUBSCRIPTIONS = new Subscription[] { } }
            };
        }

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
            if(IdCustomer != CLIENT_ANONYME)
            {
                var api = new WstollApi();
                var jsonString = await api.GetSubscriptionAndTagsAsync(IdCustomer);
                var response = JsonSerializer.Deserialize<GetSubscriptionsAndTagsResponse>(jsonString);
                return response;
            }
            else
            {
                return new GetSubscriptionsAndTagsResponse() { PAYLOAD = new Subscription[]{ } };
            }
                       
        }

        public async Task<GetCustomerDetailsResponse> GetCustomerByIdentityAsync(string IdCustomer)
        {
            if (IdCustomer != CLIENT_ANONYME)
            {
                var api = new WstollApi();
                var jsonString = await api.GetCustomerByIdentityAsync(IdCustomer);
                var response = JsonSerializer.Deserialize<GetCustomerDetailsResponse>(jsonString);
                return response;
            }
            else
            {
                return GetAnonymeAccountDetails();
            }
                       
        }
    }
}
