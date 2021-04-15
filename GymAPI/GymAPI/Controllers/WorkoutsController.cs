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
    public class WorkoutsController : ControllerBase
    {
        private readonly AppContexts _context;

        public WorkoutsController(AppContexts context)
        {
            _context = context;
        }

        // GET: api/Workouts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Workout>>> Getworkouts()
        {
            return await _context.workouts.ToListAsync();
        }

        // GET: api/Workouts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Workout>> GetWorkout(int id)
        {
            var workout = await _context.workouts.FindAsync(id);

            if (workout == null)
            {
                return NotFound();
            }

            return workout;
        }

        // PUT: api/Workouts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWorkout(int id, Workout workout)
        {
            if (id != workout.idWorkout)
            {
                return BadRequest();
            }

            _context.Entry(workout).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WorkoutExists(id))
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

        // POST: api/Workouts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Workout>> PostWorkout(Workout workout)
        {
            _context.workouts.Add(workout);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWorkout", new { id = workout.idWorkout }, workout);
        }

        // DELETE: api/Workouts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWorkout(int id)
        {
            var workout = await _context.workouts.FindAsync(id);
            if (workout == null)
            {
                return NotFound();
            }

            _context.workouts.Remove(workout);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool WorkoutExists(int id)
        {
            return _context.workouts.Any(e => e.idWorkout == id);
        }
    }
}
