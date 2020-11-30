using Microsoft.ApplicationBlocks.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineCustomizedPCStore.Model
{
	public class CompletedBuildModel
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string Avatar { get; set; }
		public string ImageProduct { get; set; }
		public string Title { get; set; }
		public string ProcessorSku { get; set; }
		public string MainboarSku { get; set; }
		public string RAMSku { get; set; }
		public string HDDSku { get; set; }
		public string SSDSku { get; set; }
		public string VGASku { get; set; }
		public string SourceSku { get; set; }
		public string CaseSku { get; set; }
		public string RadiatorsSku { get; set; }
		public string ScreenSku { get; set; }
		public string KeyboardSku { get; set; }
		public string MouseSku { get; set; }
		public string HeadphoneSku { get; set; }
		public string SpeakersSku { get; set; }
		public int Rate { get; set; }
		public int Type { get; set; }

		public List<CompletedBuildModel> GetCompletedBuilds()
		{
			string query = "select * from CompletedBuild where Id BETWEEN 1 AND 7";
			List<CompletedBuildModel> completedBuilds = new List<CompletedBuildModel>();

			try
			{
				SqlDataReader reader = SqlHelper.ExecuteReader(Startup.ConnectionString, CommandType.Text, query);
				if (reader.HasRows)
				{
					while (reader.Read())
					{
						CompletedBuildModel completedBuild = new CompletedBuildModel
						{
							Id = reader.GetInt32(0),
							Name = reader.GetString(1),
							Avatar = reader.GetString(2),
							ImageProduct = reader.GetString(3),
							Title = reader.GetString(4),
							ProcessorSku = reader.GetString(5),
							MainboarSku = reader.GetString(6),
							RAMSku = reader.GetString(7),
							HDDSku = reader.GetString(8),
							SSDSku = reader.GetString(9),
							VGASku = reader.GetString(10),
							SourceSku = reader.GetString(11),
							CaseSku = reader.GetString(12),
							RadiatorsSku = reader.GetString(13),
							ScreenSku = reader.GetString(14),
							KeyboardSku = reader.GetString(15),
							MouseSku = reader.GetString(16),
							HeadphoneSku = reader.GetString(17),
							SpeakersSku = reader.GetString(18),

							Rate = reader.GetInt32(19),
							Type = reader.GetInt32(20)
						};
						completedBuilds.Add(completedBuild);
					}
				}
				else
				{
					Console.WriteLine("No rows found.");
				}
				reader.Close();
			}
			catch (Exception ex)
			{
				Console.WriteLine(ex.Message);
			}
			return completedBuilds;
		}
	}



}
