using Microsoft.EntityFrameworkCore.Migrations;

namespace web_api.Migrations
{
    public partial class MyMigration1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "module",
                table: "Objets",
                newName: "Module");

            migrationBuilder.InsertData(
                table: "Objets",
                columns: new[] { "Id", "Libelle", "Module" },
                values: new object[,]
                {
                    { 1, "Problèmes liés à la classification", "COMM" },
                    { 2, "Etat du réseau", "COMM" },
                    { 3, "Sécurité", "COMM" },
                    { 4, "Problèmes liés au dépannage", "COMM" },
                    { 5, "Problèmes liés au badges", "COMM" },
                    { 6, "Problèmes liés au personnel", "COMM" },
                    { 7, "Problèmes liés aux opérateurs mobile", "COMM" },
                    { 8, "Autres objets", "COMM" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Objets",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Objets",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Objets",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Objets",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Objets",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Objets",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Objets",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Objets",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.RenameColumn(
                name: "Module",
                table: "Objets",
                newName: "module");
        }
    }
}
