using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using web_api.Models.Dto;

namespace web_api.Models
{
    public class NovarelContext: DbContext
    {
        public NovarelContext(DbContextOptions<NovarelContext> options)
            : base(options)
        {   
        }

        public DbSet<Utilisateur> Utilisateurs { get; set; }
        
    }
}

//------------------------------------------------------------------*
//                CREER DES MIGRATIONS DE LA BDD                    *
//------------------------------------------------------------------*
//https://www.entityframeworktutorial.net/efcore/cli-commands-for-ef-core-migration.aspx
//Adding Migration :
//PM> dotnet ef migrations add MyFirstMigration

//Creating or Updating the Database :
//PM> dotnet ef database update

//Removing a Migration :
//PM> dotnet ef migrations remove

//Generating a SQL Script : 
//PM> dotnet ef migrations script