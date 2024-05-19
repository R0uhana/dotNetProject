using Microsoft.EntityFrameworkCore;

namespace BlueHorizon
{
    public class BlueHorizon : DbContext
    {
        public BlueHorizonDB(DbContextOptions<BlueHorizonDB> options)
            : base(options)
        {
        }

        public DbSet<Package> Packages { get; set; }
        public DbSet<Booking> Bookings { get; set; }
        public DbSet<Contact> Contacts { get; set; }
    }
}
