using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GymAPI.Models
{
    public class Admin
    {
        [Key]
        public int idAdmin { get; set; }
        [Required]
        [StringLength(100, MinimumLength = 10)]
        public string nombre { get; set; }
    }
}
