using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using OnlineCustomizedPCStore.Model;

namespace OnlineCustomizedPCStore.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ComputerComponentController : ControllerBase
	{
		[HttpGet("[action]")]
		public IEnumerable<ComputerComponentModel> ListOfComputerComponent()
		{
			ComputerComponentModel computerComponent = new ComputerComponentModel();
			List<ComputerComponentModel> computerComponents = computerComponent.GetComputerComponents().ToList();
			foreach (var item in computerComponents)
			{
				yield return item;
			}
		}
		[HttpPost("[action]")]
		public int AddUserOption(string ProcessorSku, string MainboarSku, int UserId)
		{
			UserCartModel userCart = new UserCartModel();
			int rowAffected = userCart.AddUserOption(ProcessorSku, MainboarSku, UserId);
			return rowAffected;
		}

		[HttpPut("[action]")]
		public int UpdateUserOption(string ProcessorSku, string MainboarSku, int UserId)
		{
			UserCartModel userCart = new UserCartModel();
			int rowAffected = userCart.UpdateUserOption(ProcessorSku, MainboarSku, UserId);
			return rowAffected;
		}

		[HttpGet("[action]")]
		public IEnumerable<ComputerComponentModel> GetUserOptions(int UserId)
		{
			ComputerComponentModel computerComponent = new ComputerComponentModel();
			List<ComputerComponentModel> computerComponents = computerComponent.GetUserOptions(UserId).ToList();
			foreach (var item in computerComponents)
			{
				yield return item;
			}
		}
	}
}
