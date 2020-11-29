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

		[HttpPost("[action]")]
		public int AddCompletedBuildOption(string ProcessorSku, string MainboarSku, string RAMSku, string HDDSku, string SSDSku, string VGASku,
			string SourceSku, string CaseSku, string RadiatorsSku, string ScreenSku, string KeyboardSku, string MouseSku, string HeadphoneSku,
			string SpeakersSku, int Quantity, int UserId)
		{
			QuantityModel quantity = new QuantityModel();
			int rowAffected = quantity.AddCompletedBuildOption(ProcessorSku, MainboarSku, RAMSku, HDDSku, SSDSku, VGASku,
			SourceSku, CaseSku, RadiatorsSku, ScreenSku, KeyboardSku, MouseSku, HeadphoneSku,
			SpeakersSku, Quantity, UserId);
			return rowAffected;
		}

		[HttpPut("[action]")]
		public int UpdateUserOptionQuantity(string SKU, int Quantity, int UserId)
		{
			QuantityModel quantity = new QuantityModel();
			int rowAffected = quantity.UpdateUserOptionQuantity(SKU, Quantity, UserId);
			return rowAffected;
		}

		[HttpDelete("[action]")]
		public int DeleteProductQuantity(int UserId)
		{
			QuantityModel quantity = new QuantityModel();
			int rowAffected = quantity.DeleteProductQuantity(UserId);
			return rowAffected;
		}
	}
}
