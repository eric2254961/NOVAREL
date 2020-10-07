using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace web_api.Models
{
    public struct TypeObjet
    {
        public const string Commercial = "COMM";
        public const string Viabilite = "VIAB";
    }

    public struct ClasseVehicule
    {
        public const int Classe1 = 1;
        public const int Classe2 = 2;
        public const int Classe3 = 3;
    }

    public struct Sens
    {
        public const int VersMarcory = 1;
        public const int VersCocody = 2;
    }
}
