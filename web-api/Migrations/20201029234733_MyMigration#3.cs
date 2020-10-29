﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace web_api.Migrations
{
    public partial class MyMigration3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ModeOuvertures",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Libelle = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ModeOuvertures", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Objets",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Libelle = table.Column<string>(nullable: false),
                    Module = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Objets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Services",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Libelle = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Services", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Utilisateurs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: false),
                    Password = table.Column<string>(nullable: true),
                    RemenberToken = table.Column<string>(nullable: true),
                    Status = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Utilisateurs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Zones",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Libelle = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Zones", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Ticket",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Reference = table.Column<string>(maxLength: 12, nullable: false),
                    ClientId = table.Column<string>(maxLength: 12, nullable: false),
                    ModeOuvertureId = table.Column<int>(nullable: false),
                    DateFait = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ticket", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Ticket_ModeOuvertures_ModeOuvertureId",
                        column: x => x.ModeOuvertureId,
                        principalTable: "ModeOuvertures",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Emplacements",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Libelle = table.Column<string>(nullable: false),
                    ZoneId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Emplacements", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Emplacements_Zones_ZoneId",
                        column: x => x.ZoneId,
                        principalTable: "Zones",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ActionTickets",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DateAction = table.Column<DateTime>(nullable: false),
                    Commentaire = table.Column<string>(nullable: false),
                    TicketId = table.Column<int>(nullable: false),
                    UtilisateurId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ActionTickets", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ActionTickets_Ticket_TicketId",
                        column: x => x.TicketId,
                        principalTable: "Ticket",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ActionTickets_Utilisateurs_UtilisateurId",
                        column: x => x.UtilisateurId,
                        principalTable: "Utilisateurs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ObjetTicket",
                columns: table => new
                {
                    ObjetId = table.Column<int>(nullable: false),
                    TicketId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ObjetTicket", x => new { x.ObjetId, x.TicketId });
                    table.ForeignKey(
                        name: "FK_ObjetTicket_Objets_ObjetId",
                        column: x => x.ObjetId,
                        principalTable: "Objets",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ObjetTicket_Ticket_TicketId",
                        column: x => x.TicketId,
                        principalTable: "Ticket",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PieceJointes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Titre = table.Column<string>(nullable: false),
                    DatePiece = table.Column<DateTime>(nullable: false),
                    ActionTicketId = table.Column<int>(nullable: true),
                    TicketId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PieceJointes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PieceJointes_ActionTickets_ActionTicketId",
                        column: x => x.ActionTicketId,
                        principalTable: "ActionTickets",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_PieceJointes_Ticket_TicketId",
                        column: x => x.TicketId,
                        principalTable: "Ticket",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "ModeOuvertures",
                columns: new[] { "Id", "Libelle" },
                values: new object[,]
                {
                    { 1, "Email" },
                    { 2, "Téléphone" },
                    { 3, "Présentiel" },
                    { 4, "Autres" }
                });

            migrationBuilder.InsertData(
                table: "Objets",
                columns: new[] { "Id", "Libelle", "Module" },
                values: new object[,]
                {
                    { 8, "Autres objets", "COMM" },
                    { 7, "Problèmes liés aux opérateurs mobile", "COMM" },
                    { 5, "Problèmes liés au badges", "COMM" },
                    { 6, "Problèmes liés au personnel", "COMM" },
                    { 3, "Sécurité", "COMM" },
                    { 2, "Etat du réseau", "COMM" },
                    { 1, "Problèmes liés à la classification", "COMM" },
                    { 4, "Problèmes liés au dépannage", "COMM" }
                });

            migrationBuilder.InsertData(
                table: "Services",
                columns: new[] { "Id", "Libelle" },
                values: new object[,]
                {
                    { 1, "Commercial" },
                    { 2, "Viabilite" },
                    { 3, "Informatique" },
                    { 4, "Direction" }
                });

            migrationBuilder.InsertData(
                table: "Zones",
                columns: new[] { "Id", "Libelle" },
                values: new object[,]
                {
                    { 3, "Viaduc (Pont)" },
                    { 1, "Section courante Nord" },
                    { 2, "Section courante Sud" },
                    { 4, "Aire de péage" }
                });

            migrationBuilder.InsertData(
                table: "Emplacements",
                columns: new[] { "Id", "Libelle", "ZoneId" },
                values: new object[,]
                {
                    { 3, "OA 2", 1 },
                    { 1, "OA6 Bis", 2 },
                    { 2, "C 0", 3 },
                    { 4, "NT01", 4 },
                    { 5, "NT02", 4 },
                    { 6, "NX03", 4 },
                    { 7, "SM09", 4 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_ActionTickets_TicketId",
                table: "ActionTickets",
                column: "TicketId");

            migrationBuilder.CreateIndex(
                name: "IX_ActionTickets_UtilisateurId",
                table: "ActionTickets",
                column: "UtilisateurId");

            migrationBuilder.CreateIndex(
                name: "IX_Emplacements_ZoneId",
                table: "Emplacements",
                column: "ZoneId");

            migrationBuilder.CreateIndex(
                name: "IX_ObjetTicket_TicketId",
                table: "ObjetTicket",
                column: "TicketId");

            migrationBuilder.CreateIndex(
                name: "IX_PieceJointes_ActionTicketId",
                table: "PieceJointes",
                column: "ActionTicketId");

            migrationBuilder.CreateIndex(
                name: "IX_PieceJointes_TicketId",
                table: "PieceJointes",
                column: "TicketId");

            migrationBuilder.CreateIndex(
                name: "IX_Ticket_ModeOuvertureId",
                table: "Ticket",
                column: "ModeOuvertureId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Emplacements");

            migrationBuilder.DropTable(
                name: "ObjetTicket");

            migrationBuilder.DropTable(
                name: "PieceJointes");

            migrationBuilder.DropTable(
                name: "Services");

            migrationBuilder.DropTable(
                name: "Zones");

            migrationBuilder.DropTable(
                name: "Objets");

            migrationBuilder.DropTable(
                name: "ActionTickets");

            migrationBuilder.DropTable(
                name: "Ticket");

            migrationBuilder.DropTable(
                name: "Utilisateurs");

            migrationBuilder.DropTable(
                name: "ModeOuvertures");
        }
    }
}
