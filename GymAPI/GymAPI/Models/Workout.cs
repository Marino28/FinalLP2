using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GymAPI.Models
{
    public enum Nivel { 
     Novato = 1,
     Intermedio = 2,
     Dificil = 3
    }
    public enum Genero { 
        Mujer = 1,
        Hombre = 2
    
    }

    public enum Categoria {
        FullBody = 1,
        Hiit = 2,
        Resistencia = 3,
        Hipertrofia = 4,
        BroSplit = 5    
    }
    public class Workout
    {
        [Key]
        public int idWorkout { get; set; }
        [StringLength(50, MinimumLength = 10)]
        public string titulo { get; set; }
        [Required]
        [StringLength(250, MinimumLength = 10)]
        public string descripcion { get; set; }
        public Nivel nivel { get; set; }
        public Genero genero { get; set; }
        public Categoria categoria { get; set; }
        [Required]
        public int diasSemana { get; set; }
        [Required]
        [StringLength(100, MinimumLength = 10)]
        public string autor { get; set; }
        [StringLength(300)]
        #nullable enable
        public string? direccionPDF { get; set; }
    }
}
