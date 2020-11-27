using Microsoft.EntityFrameworkCore.Migrations;

namespace web_api.Migrations
{
    public partial class MyMigration11 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Utilisateurs",
                columns: new[] { "Id", "Email", "Name", "Password", "RemenberToken", "Status" },
                values: new object[] { 1, "admin@pont-hkb.com", "Administrateur", "hH/qH+78aR/TKtgWQtvnBO8faQ0zzkxNzsiB+aL2sUA=", null, "A" });

            migrationBuilder.InsertData(
                table: "Utilisateurs",
                columns: new[] { "Id", "Email", "Name", "Password", "RemenberToken", "Status" },
                values: new object[] { 2, "commercial@pont-hkb.com", "Commercial", "hH/qH+78aR/TKtgWQtvnBO8faQ0zzkxNzsiB+aL2sUA=", null, "A" });

            migrationBuilder.InsertData(
                table: "Utilisateurs",
                columns: new[] { "Id", "Email", "Name", "Password", "RemenberToken", "Status" },
                values: new object[] { 3, "viabilite@pont-hkb.com", "Viablite", "hH/qH+78aR/TKtgWQtvnBO8faQ0zzkxNzsiB+aL2sUA=", null, "A" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Utilisateurs",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Utilisateurs",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Utilisateurs",
                keyColumn: "Id",
                keyValue: 3);
        }
    }
}
