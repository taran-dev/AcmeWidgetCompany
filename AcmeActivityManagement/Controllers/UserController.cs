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
        public IActionResult CreateUser(User user)
        {
            return Ok(user);
        }

    }
}
