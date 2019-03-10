using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.Identity.EntityFramework;

namespace Site.Models
{
    public class ApplicationUser : IdentityUser
    {
        //public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public ApplicationUser()
        {
        }
    }
}