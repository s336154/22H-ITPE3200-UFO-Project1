
using UFO_Webapplikasjon.Model;

namespace UFO_Webapplikasjon.DAL
{
    public interface InSightingRepository
    {
        Task<bool> Create(Sighting innSighting);
        Task<List<Sighting>> ReadAll();
        Task<bool> Delete(int id);
        Task<Sighting> Read(int id);
        Task<bool> Update(Sighting endreSighting);
    }
}
