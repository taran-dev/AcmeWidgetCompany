using AcmeActivityManagement.EntityFramework;
using AcmeActivityManagement.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AcmeActivityManagement.Controllers
{
    public class ActivityController : ControllerBase
    {
        private readonly AcmeDbContext acmeDbContext;

        public ActivityController(AcmeDbContext acmeDbContext)
        {
            this.acmeDbContext = acmeDbContext;
        }

        [HttpGet("/api/activities")]
        public async Task<IEnumerable<Activity>> GetActivities()
        {
            var activities = await this.acmeDbContext.Activities.ToListAsync();
            return activities;
        }
    }
}
