using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace UFO_Webapplikasjon.Model
{
    public class Sightings
    {
        public int Id { get; set; } 
        public string City { get; set; }
        public string Country { get; set; }
        public string Duration { get; set; }
        public string Dateposted { get; set; }
        public string Datetime { get; set; }
        public string Comments { get; set; }
    }

    public class SightingContext : DbContext
    {
        public SightingContext (DbContextOptions<SightingContext> options)
                    : base(options)
            {
                Database.EnsureCreated();
        }

        public DbSet<Sightings> Sightings { get; set; }

    }
}
