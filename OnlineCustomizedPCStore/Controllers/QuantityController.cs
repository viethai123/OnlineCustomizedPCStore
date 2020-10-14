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
	public class QuantityController : ControllerBase
	{
		[HttpPost("[action]")]
		public int AddUserOptionQuantity(string SKU, int Quantity, int UserId)
		{
			QuantityModel quantity = new QuantityModel();
			int rowAffected = quantity.AddUserOptionQuantity(SKU, Quantity, UserId);
			return rowAffected;
		}

		[HttpPut("[action]")]
		public int UpdateUserOptionQuantity(string SKU, int Quantity, int UserId)
		{
			QuantityModel quantity = new QuantityModel();
			int rowAffected = quantity.UpdateUserOptionQuantity(SKU, Quantity, UserId);
			return rowAffected;
		}
	}
}
