using AcmeActivityManagement.Controllers.Resources;
using AcmeActivityManagement.EntityFramework;
using AcmeActivityManagement.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AcmeActivityManagement.Controllers
{
    [Route("/api/users")]
    public class UserController : ControllerBase
    {
        private readonly AcmeDbContext acmeDbContext;
        private readonly IMapper mapper;

        public UserController(AcmeDbContext acmeDbContext, IMapper mapper)
        {
            this.acmeDbContext = acmeDbContext;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<IEnumerable<UserResource>> GetAllUsers()
        {
            var users = await this.acmeDbContext.Users.ToListAsync();
            var output = mapper.Map<List<User>, List<UserResource>>(users);

            return output;
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] UserResource userResource)
        {
            var user = this.mapper.Map<UserResource, User>(userResource);
            user.CreatedOn = DateTime.Now;
            user.ModifiedOn = DateTime.Now;
            user.IsDeleted = false;

            //Get Activity from input ActivityId
            var activity = await this.acmeDbContext.Activities.FindAsync(userResource.ActivityId);
            user.Activity = activity;

            this.acmeDbContext.Add(user);
            await this.acmeDbContext.SaveChangesAsync();

            var result = this.mapper.Map<User, UserResource>(user);
            return Ok(result);

        }

    }
}
