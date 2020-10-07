using Microsoft.EntityFrameworkCore.Migrations;

namespace web_api.Migrations
{
    public partial class MyMigration2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
                table: "Services",
                columns: new[] { "Id", "Libelle" },
                values: new object[,]
                {
                    { 1, "Commercial" },
                    { 2, "Viabilite" },
                    { 3, "Informatique" },
                    { 4, "Direction" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "ModeOuvertures",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "ModeOuvertures",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "ModeOuvertures",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "ModeOuvertures",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Services",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Services",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Services",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Services",
                keyColumn: "Id",
                keyValue: 4);
        }
    }
}
