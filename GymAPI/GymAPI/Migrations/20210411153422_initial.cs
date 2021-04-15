using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GymAPI.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "admins",
                columns: table => new
                {
                    idAdmin = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nombre = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_admins", x => x.idAdmin);
                });

            migrationBuilder.CreateTable(
                name: "asistencias",
                columns: table => new
                {
                    fecha = table.Column<DateTime>(type: "datetime2", nullable: false),
                    idPersona = table.Column<int>(type: "int", nullable: false),
                    vino = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_asistencias", x => new { x.fecha, x.idPersona });
                });

            migrationBuilder.CreateTable(
                name: "clientes",
                columns: table => new
                {
                    idCliente = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nombre = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    genero = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_clientes", x => x.idCliente);
                });

            migrationBuilder.CreateTable(
                name: "equipos",
                columns: table => new
                {
                    idEquipo = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    tipo = table.Column<int>(type: "int", nullable: false),
                    descripcion = table.Column<string>(type: "nvarchar(250)", maxLength: 250, nullable: true),
                    direccionImagen = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_equipos", x => x.idEquipo);
                });

            migrationBuilder.CreateTable(
                name: "workouts",
                columns: table => new
                {
                    idWorkout = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    titulo = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    descripcion = table.Column<string>(type: "nvarchar(250)", maxLength: 250, nullable: true),
                    nivel = table.Column<int>(type: "int", nullable: false),
                    genero = table.Column<int>(type: "int", nullable: false),
                    categoria = table.Column<int>(type: "int", nullable: false),
                    diasSemana = table.Column<int>(type: "int", nullable: false),
                    autor = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    direccionPDF = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_workouts", x => x.idWorkout);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "admins");

            migrationBuilder.DropTable(
                name: "asistencias");

            migrationBuilder.DropTable(
                name: "clientes");

            migrationBuilder.DropTable(
                name: "equipos");

            migrationBuilder.DropTable(
                name: "workouts");
        }
    }
}
