using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using OnlineCustomizedPCStore.Model;

namespace OnlineCustomizedPCStore.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class UserCartController : ControllerBase
	{
		[HttpGet("[action]")]
		public int CheckUserChooseOrNot(int UserId)
		{
			UserCartModel userCart = new UserCartModel();
			return userCart.CheckUserChooseOrNot(UserId);
		}

		[HttpGet("[action]")]
		public int CheckProductIsExist(int UserId, string SKU)
		{
			UserCartModel userCart = new UserCartModel();
			return userCart.CheckProductIsExist(UserId, SKU);
		}
	}
}
