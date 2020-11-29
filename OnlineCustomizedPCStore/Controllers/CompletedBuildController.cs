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
	public class CompletedBuildController : ControllerBase
	{
		[HttpGet("[action]")]
		public IEnumerable<CompletedBuildModel> ListOfCompletedBuild()
		{
			CompletedBuildModel completedBuild = new CompletedBuildModel();
			List<CompletedBuildModel> completedBuilds = completedBuild.GetCompletedBuilds().ToList();
			foreach (var item in completedBuilds)
			{
				yield return item;
			}
		}
	}
}
