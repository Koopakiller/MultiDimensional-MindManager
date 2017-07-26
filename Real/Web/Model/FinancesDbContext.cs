using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace Koopakiller.Apps.Picosmos.Real.Model
{
    public class FinancesDbContext : DbContext
    {
        public FinancesDbContext(DbContextOptions<FinancesDbContext> options) : base(options) { }

        private DbSet<User> Users { get; set; }
        private DbSet<Person> Persons { get; set; }

        public IEnumerable<User> GetUsers()
        {
            return this.Users.FromSql("EXEC GetUsers");
        }

        public IEnumerable<Person> GetPersons()
        {
            return this.Persons.FromSql("EXEC GetPersons");
        }
    }

    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Person
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
