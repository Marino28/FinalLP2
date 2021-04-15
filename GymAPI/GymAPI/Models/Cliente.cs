using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GymAPI.Models
{
    
    public class Cliente
    {
        [Key]
        public int idCliente { get; set; }
        [Required]
        [StringLength(100, MinimumLength = 10)]
        public string nombre { get; set; }
        public Genero genero { get; set; }
        [Required]
        public string email { get; set; }
        [Required]
        public string password { get; set; }
        
    }
}
