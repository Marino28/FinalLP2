using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GymAPI.Data;
using GymAPI.Models;

namespace GymAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EquipoesController : ControllerBase
    {
        private readonly AppContexts _context;

        public EquipoesController(AppContexts context)
        {
            _context = context;
        }

        // GET: api/Equipoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Equipo>>> Getequipos()
        {
            return await _context.equipos.ToListAsync();
        }

        // GET: api/Equipoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Equipo>> GetEquipo(int id)
        {
            var equipo = await _context.equipos.FindAsync(id);

            if (equipo == null)
            {
                return NotFound();
            }

            return equipo;
        }

        // PUT: api/Equipoes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEquipo(int id, Equipo equipo)
        {
            if (id != equipo.idEquipo)
            {
                return BadRequest();
            }

            _context.Entry(equipo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EquipoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Equipoes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Equipo>> PostEquipo(Equipo equipo)
        {
            _context.equipos.Add(equipo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEquipo", new { id = equipo.idEquipo }, equipo);
        }

        // DELETE: api/Equipoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEquipo(int id)
        {
            var equipo = await _context.equipos.FindAsync(id);
            if (equipo == null)
            {
                return NotFound();
            }

            _context.equipos.Remove(equipo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EquipoExists(int id)
        {
            return _context.equipos.Any(e => e.idEquipo == id);
        }
    }
}
