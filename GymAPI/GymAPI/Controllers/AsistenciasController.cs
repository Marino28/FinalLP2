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
    public class AsistenciasController : ControllerBase
    {
        private readonly AppContexts _context;

        public AsistenciasController(AppContexts context)
        {
            _context = context;
        }

        // GET: api/Asistencias
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Asistencia>>> Getasistencias()
        {
            return await _context.asistencias.ToListAsync();
        }

        // GET: api/Asistencias/5
        [HttpGet("{id}&{idPersona}")]
        public async Task<ActionResult<Asistencia>> GetAsistencia(DateTime id, int idPersona)
        {
            var asistencia = await _context.asistencias.FindAsync(id,idPersona);

            if (asistencia == null)
            {
                return NotFound();
            }

            return asistencia;
        }

        // PUT: api/Asistencias/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}&{idPersona}")]
        public async Task<IActionResult> PutAsistencia(DateTime id, int idPersona, Asistencia asistencia)
        {
            if (id != asistencia.fecha)
            {
                return BadRequest();
            }

            _context.Entry(asistencia).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AsistenciaExists(id))
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

        // POST: api/Asistencias
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Asistencia>> PostAsistencia(Asistencia asistencia)
        {
            _context.asistencias.Add(asistencia);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (AsistenciaExists(asistencia.fecha))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetAsistencia", new { id = asistencia.fecha, idPersona = asistencia.idPersona }, asistencia);
        }

        // DELETE: api/Asistencias/5
        [HttpDelete("{id}&{idPersona}")]
        public async Task<IActionResult> DeleteAsistencia(DateTime id, int idPersona)
        {
            var asistencia = await _context.asistencias.FindAsync(id, idPersona);
            if (asistencia == null)
            {
                return NotFound();
            }

            _context.asistencias.Remove(asistencia);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AsistenciaExists(DateTime id)
        {
            return _context.asistencias.Any(e => e.fecha == id);
        }
    }
}
