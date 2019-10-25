using AcmeActivityManagement.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AcmeActivityManagement.EntityFramework
{
    public class AcmeDbContext : DbContext
    {
        public AcmeDbContext(DbContextOptions<AcmeDbContext> options) : base(options)
        {

        }

        public DbSet<Activity> Activities { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
