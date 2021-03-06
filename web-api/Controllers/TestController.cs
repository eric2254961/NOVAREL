﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using web_api.Models.Auth;
using web_api.Models.Dto.Organisation;
using web_api.Services.Wstoll;

namespace web_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        [HttpGet]
        [Route("GetUserData")]
        [Authorize(Policy = Service.COMMERCIAL)]
        public IActionResult GetUserData()
        {
            return Ok("This is a response from User method");
        }

        [HttpGet]
        [Route("GetAdminData")]
        [Authorize(Policy = Service.INFORMATIQUE)]
        public IActionResult GetAdminData()
        {
            return Ok("This is a response from Admin method");
        }

        [HttpGet("jwt")]
        public async Task<IActionResult> TestJwt()
        {
            var api = new WstollApi();
            var result = await api.GetCustomerByNameAsync("ake ake");
            return Ok(result);
        }
    }
}
