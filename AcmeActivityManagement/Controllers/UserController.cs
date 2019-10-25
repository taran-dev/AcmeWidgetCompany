using AcmeActivityManagement.Controllers.Resources;
using AcmeActivityManagement.EntityFramework;
using AcmeActivityManagement.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AcmeActivityManagement.Controllers
{
    public class UserController : ControllerBase
    {
        private readonly AcmeDbContext acmeDbContext;
        private readonly IMapper mapper;

        public UserController(AcmeDbContext acmeDbContext, IMapper mapper)
        {
            this.acmeDbContext = acmeDbContext;
            this.mapper = mapper;
        }

        [HttpPost("/api/users")]
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
