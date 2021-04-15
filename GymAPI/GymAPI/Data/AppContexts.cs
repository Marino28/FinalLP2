using GymAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GymAPI.Data
{
    public class AppContexts : DbContext
    {
        public AppContexts(DbContextOptions<AppContexts> options) : base(options)
        {
        }
        public DbSet<Cliente> clientes{get;set;}
        public DbSet<Asistencia> asistencias { get; set; }
        public DbSet<Admin> admins { get; set; }
        public DbSet<Equipo> equipos { get; set; }
        public DbSet<Workout> workouts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Asistencia>().HasKey(vf => new { vf.fecha, vf.idPersona });
            modelBuilder.Entity<Cliente>().HasKey(vf => new { vf.idCliente});
            modelBuilder.Entity<Admin>().HasKey(vf => new { vf.idAdmin });
            modelBuilder.Entity<Equipo>().HasKey(vf => new { vf.idEquipo });
            modelBuilder.Entity<Workout>().HasKey(vf => new { vf.idWorkout });
        }


    }
}
