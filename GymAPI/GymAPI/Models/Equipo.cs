using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GymAPI.Models
{
    public enum Tipo
    {
        Biceps = 1,
        Triceps = 2,
        Espalda = 3,
        Pecho = 4,
        Hombros = 5,
        Cuello = 6,
        Pantorrillas = 7,
        Cuadriceps = 8,
        Isquiotibiales = 9,
        Tibialis = 10,
        Antebrazo = 11
    }
    public class Equipo
    {
        [Key]
        public int idEquipo { get; set; }
        [Required]
        public Tipo tipo { get; set; }
        [Required]
        [StringLength(250, MinimumLength = 5)]
        public string descripcion { get; set; }
        [StringLength(300)]
        #nullable enable
        public string? direccionImagen { get; set; }

    }
}
