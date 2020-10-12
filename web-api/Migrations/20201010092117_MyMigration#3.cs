using Microsoft.EntityFrameworkCore.Migrations;

namespace web_api.Migrations
{
    public partial class MyMigration3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Localisations");

            migrationBuilder.AddColumn<int>(
                name: "ZoneId",
                table: "Emplacements",
                nullable: false,
                defaultValue: 0);

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

            migrationBuilder.InsertData(
                table: "Zones",
                columns: new[] { "Id", "Libelle" },
                values: new object[,]
                {
                    { 1, "Section courante Nord" },
                    { 2, "Section courante Sud" },
                    { 3, "Viaduc (Pont)" },
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
                name: "IX_Emplacements_ZoneId",
                table: "Emplacements",
                column: "ZoneId");

            migrationBuilder.AddForeignKey(
                name: "FK_Emplacements_Zones_ZoneId",
                table: "Emplacements",
                column: "ZoneId",
                principalTable: "Zones",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Emplacements_Zones_ZoneId",
                table: "Emplacements");

            migrationBuilder.DropTable(
                name: "Zones");

            migrationBuilder.DropIndex(
                name: "IX_Emplacements_ZoneId",
                table: "Emplacements");

            migrationBuilder.DeleteData(
                table: "Emplacements",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Emplacements",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Emplacements",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Emplacements",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Emplacements",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Emplacements",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Emplacements",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DropColumn(
                name: "ZoneId",
                table: "Emplacements");

            migrationBuilder.CreateTable(
                name: "Localisations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Libelle = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Localisations", x => x.Id);
                });
        }
    }
}
