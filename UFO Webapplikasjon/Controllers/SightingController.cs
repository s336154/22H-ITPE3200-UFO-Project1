using UFO_Webapplikasjon.DAL;
using UFO_Webapplikasjon.Model;
using Microsoft.AspNetCore.Mvc;

namespace UFO_Webapplikasjon.Controllers
{
    [Route("[controller]/[action]")]
    public class SightingController : ControllerBase
    {
        private readonly InSightingRepository _db;

        public SightingController(InSightingRepository db)
        {
            _db = db;
        }

        public async Task<bool> Create(Sighting innSighting)
        {
            return await _db.Create(innSighting);
        }

        public async Task<List<Sighting>> ReadAll()
        {
            return await _db.ReadAll();
        }

        public async Task<bool> Delete(int id)
        {
            return await _db.Delete(id);
        }

        public async Task<Sighting> Read(int id)
        {
            return await _db.Read(id);
        }

        public async Task<bool> Update(Sighting endreSighting)
        {
            return await _db.Update(endreSighting);
        }
    }
}
