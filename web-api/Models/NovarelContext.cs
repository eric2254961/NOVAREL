﻿using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Protocols;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using web_api.Models.Dto;
using web_api.Models.Dto.Commercial;
using web_api.Models.Dto.Organisation;
using web_api.Models.Dto.Pont;

namespace web_api.Models
{
    public class NovarelContext: DbContext
    {
        public NovarelContext(DbContextOptions<NovarelContext> options)
            : base(options)
        { }

        /*
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(Startup.Configuration.GetConnectionString("NOVAREL_DB"))
        } 
       */

        public DbSet<Utilisateur> Utilisateurs { get; set; }
        public DbSet<Service> Services { get; set; }
        public DbSet<Zone> Zones { get; set; }
        public DbSet<Emplacement> Emplacements { get; set; }
        public DbSet<ModeOuverture> ModeOuvertures { get; set; }
        public DbSet<Objet> Objets { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Objet>().HasData(
             new Objet { Id = 1, Libelle = "Problèmes liés à la classification", Module = TypeObjet.Commercial },
             new Objet { Id = 2, Libelle = "Etat du réseau", Module = TypeObjet.Commercial },
             new Objet { Id = 3, Libelle = "Sécurité", Module = TypeObjet.Commercial },
             new Objet { Id = 4, Libelle = "Problèmes liés au dépannage", Module = TypeObjet.Commercial },
             new Objet { Id = 5, Libelle = "Problèmes liés au badges", Module = TypeObjet.Commercial },
             new Objet { Id = 6, Libelle = "Problèmes liés au personnel", Module = TypeObjet.Commercial },
             new Objet { Id = 7, Libelle = "Problèmes liés aux opérateurs mobile", Module = TypeObjet.Commercial },
             new Objet { Id = 8, Libelle = "Autres objets", Module = TypeObjet.Commercial }
            );
            modelBuilder.Entity<Service>().HasData(
             new Service { Id = 1, Libelle = "Commercial" },
             new Service { Id = 2, Libelle = "Viabilite" },
             new Service { Id = 3, Libelle = "Informatique" },
             new Service { Id = 4, Libelle = "Direction" }
            );
            modelBuilder.Entity<ModeOuverture>().HasData(
             new ModeOuverture { Id = 1, Libelle = "Email" },
             new ModeOuverture { Id = 2, Libelle = "Téléphone" },
             new ModeOuverture { Id = 3, Libelle = "Présentiel" },
             new ModeOuverture { Id = 4, Libelle = "Autres" }
            );
            modelBuilder.Entity<Zone>().HasData(
             new Zone { Id = 1, Libelle = "Section courante Nord" },
             new Zone { Id = 2, Libelle = "Section courante Sud" },
             new Zone { Id = 3, Libelle = "Viaduc (Pont)" },
             new Zone { Id = 4, Libelle = "Aire de péage" }
            );
            modelBuilder.Entity<Emplacement>().HasData(
             new { Id = 1, Libelle = "OA6 Bis", ZoneId = 2 },
             new { Id = 2, Libelle = "C 0", ZoneId = 3 },
             new { Id = 3, Libelle = "OA 2", ZoneId = 1 },
             new { Id = 4, Libelle = "NT01", ZoneId = 4 },
             new { Id = 5, Libelle = "NT02", ZoneId = 4 },
             new { Id = 6, Libelle = "NX03", ZoneId = 4 },
             new { Id = 7, Libelle = "SM09", ZoneId = 4 }
            );
        }
    }
}

//------------------------------------------------------------------*
//                CREER DES MIGRATIONS DE LA BDD                    *
//------------------------------------------------------------------*
//https://www.entityframeworktutorial.net/efcore/cli-commands-for-ef-core-migration.aspx
//Adding Migration :
//PM> dotnet ef migrations add MyMigration#1

//Creating or Updating the Database :
//PM> dotnet ef database update

//Removing a Migration :
//PM> dotnet ef migrations remove

//Generating a SQL Script : 
//PM> dotnet ef migrations script