using AcmeActivityManagement.Controllers.Resources;
using AcmeActivityManagement.EntityFramework;
using AcmeActivityManagement.Models;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AcmeActivityManagement.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            //Mapping API Resource to Domain Model
            CreateMap<Activity, ActivityResource>();
            CreateMap<User, UserResource>();

            //Mapping Domain Model to API Resource
            CreateMap<UserResource, User>();
            //    .ForMember(u => u.Activity, opt => opt.MapFrom(ur => new AcmeDbContext().Activities.Find(ur.ActivityId)));
        }
    }
}
