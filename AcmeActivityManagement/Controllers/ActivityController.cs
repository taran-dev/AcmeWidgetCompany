using AcmeActivityManagement.Controllers.Resources;
using AcmeActivityManagement.EntityFramework;
using AcmeActivityManagement.Models;
using AutoMapper;
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
        private readonly IMapper mapper;

        public ActivityController(AcmeDbContext acmeDbContext, IMapper mapper)
        {
            this.acmeDbContext = acmeDbContext;
            this.mapper = mapper;
        }

        [HttpGet("/api/activities")]
        public async Task<IEnumerable<ActivityResource>> GetActivities()
        {
            var activities = await this.acmeDbContext.Activities.ToListAsync();
            var output = mapper.Map<List<Activity>, List<ActivityResource>>(activities);
            
            return output;
        }
    }
}
