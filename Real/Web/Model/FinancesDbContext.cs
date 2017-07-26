using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace Koopakiller.Apps.Picosmos.Real.Model
{
    public class FinancesDbContext : DbContext
    {
        public FinancesDbContext(DbContextOptions<FinancesDbContext> options) : base(options) { }

        private DbSet<User> Users { get; set; }

        public IEnumerable<User> GetUsers()
        {
            return this.Users.FromSql("EXEC GetUsers");
        }
    }

    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
