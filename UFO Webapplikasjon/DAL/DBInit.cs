namespace UFO_Webapplikasjon.Model
{
    public static class DBInit
    {
        public static void Initialize(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<SightingContext>();

                // må slette og opprette databasen hver gang når den skal initieres (seed`es)
                context.Database.EnsureDeleted();
                context.Database.EnsureCreated();

                var sight1 = new Sightings { City = "Oslo", Country = "Norway", Duration = "2 hours", Dateposted = "03/12/2022", Datetime = "02/12/2022", Comments = "Just testing this application" };
                var sight2 = new Sightings { City = "Kobenhagen", Country = "Denmark", Duration = "3 min", Dateposted = "11/11/2011", Datetime = "14/02/2007", Comments = "Nothing really happened" };

                context.Sightings.Add(sight1);
                context.Sightings.Add(sight2);

                context.SaveChanges();
            }
        }
    }    
}
