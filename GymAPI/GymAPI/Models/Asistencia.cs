using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GymAPI.Models
{
    public enum Vino { 
      Si = 2,
      No = 1
    
    }
    public class Asistencia
    {
        [Key]
        [Column(Order = 0)]
        public DateTime fecha { get; set; }
        [Key]
        [Column(Order = 1)]
        public int idPersona { get; set; }
        [Required]
        public Vino vino { get; set; }
    }
}
