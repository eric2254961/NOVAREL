using Microsoft.EntityFrameworkCore.Migrations;

namespace web_api.Migrations
{
    public partial class MyMigration2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Immatriculation",
                table: "Tickets",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Marque",
                table: "Tickets",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Modele",
                table: "Tickets",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Immatriculation",
                table: "Tickets");

            migrationBuilder.DropColumn(
                name: "Marque",
                table: "Tickets");

            migrationBuilder.DropColumn(
                name: "Modele",
                table: "Tickets");
        }
    }
}
