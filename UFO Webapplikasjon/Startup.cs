using UFO_Webapplikasjon.DAL;
using UFO_Webapplikasjon.Model;
using Microsoft.EntityFrameworkCore;

namespace UFO_Webapplikasjon
{
    public class Startup
    {

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddDbContext<SightingContext>(options =>
                            options.UseSqlite("Data Source=Sighting.db"));



            services.AddScoped<InSightingRepository, SightingRepository>();


        }
    
       
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                DBInit.Initialize(app); 
          
            }

            app.UseRouting();

            app.UseStaticFiles(); 

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
