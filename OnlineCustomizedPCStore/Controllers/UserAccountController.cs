using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineCustomizedPCStore.Model;

namespace OnlineCustomizedPCStore.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class UserAccountController : ControllerBase
	{
        [HttpPost("[action]")]
        public int AddUserAccount(string Name, string Password, string Email)
        {
            UserAccountModel userAccount = new UserAccountModel();
            int rowsAffected = userAccount.AddUserAccount(Name, Password, Email);
            return rowsAffected;
        }

        [HttpGet("[action]")]
        public IEnumerable<UserAccountModel> CheckAccountLogin(string Name, string Password)
        {
            UserAccountModel userAccount = new UserAccountModel();
            List<UserAccountModel> userAccounts = userAccount.CheckAccountLogin(Name, Password).ToList();
            if (userAccounts.Count == 0)
            {
                yield return null;
            }
            else
            {
                foreach (var item in userAccounts)
                    yield return item;
            }
        }

        [HttpPost("[action]")]
        public IEnumerable<UserAccountModel> CheckUserName(string Name)
        {
            UserAccountModel userAccount = new UserAccountModel();
            List<UserAccountModel> userAccounts = userAccount.ListUserName(Name);
            return userAccounts;

        }
    }
}
