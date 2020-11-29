using Microsoft.ApplicationBlocks.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace OnlineCustomizedPCStore.Model
{
	public class UserCartModel
	{
		public int Id { get; set; }
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
		public int UserId { get; set; }

		public int AddUserOption(string ProcessorSku, string MainboarSku, string RAMSku, string HDDSku, string SSDSku, string VGASku, string SourceSku, string CaseSku, string RadiatorsSku, string ScreenSku, string KeyboardSku, string MouseSku, string HeadphoneSku, string SpeakersSku, int UserId)
		{
			string query = "insert into UserCart(ProcessorSku, MainboarSku, RAMSku, HDDSku,SSDSku,VGASku,SourceSku,CaseSku,RadiatorsSku,ScreenSku,KeyboardSku,KeyboardSku,MouseSku,HeadphoneSku,SpeakersSku,UserId)"
						   + "values (@ProcessorSku,@MainboarSku,@RAMSku,@HDDSku,@SSDSku,@VGASku,@SourceSku,@CaseSku,@RadiatorsSku,@ScreenSku,@KeyboardSku,@KeyboardSku,@MouseSku,@HeadphoneSku,@SpeakersSku,@UserId)";
			List<SqlParameter> parameters = new List<SqlParameter>
			{
				new SqlParameter("@ProcessorSku", ProcessorSku),
				new SqlParameter("@MainboarSku", MainboarSku),
				new SqlParameter("@RAMSku", RAMSku),
				new SqlParameter("@HDDSku", HDDSku),
				new SqlParameter("@SSDSku", SSDSku),
				new SqlParameter("@VGASku", VGASku),
				new SqlParameter("@SourceSku", SourceSku),
				new SqlParameter("@CaseSku", CaseSku),
				new SqlParameter("@RadiatorsSku", RadiatorsSku),
				new SqlParameter("@ScreenSku", ScreenSku),
				new SqlParameter("@KeyboardSku", KeyboardSku),
				new SqlParameter("@MouseSku", MouseSku),
				new SqlParameter("@HeadphoneSku", HeadphoneSku),
				new SqlParameter("@SpeakersSku", SpeakersSku),
				new SqlParameter("@UserId", UserId),
			};
			int rowsAffected = 0;
			try
			{
				rowsAffected = SqlHelper.ExecuteNonQuery(Startup.ConnectionString,
				   CommandType.Text, query, parameters.ToArray());
				if (rowsAffected == -1)
				{
					Console.WriteLine("Error occurs!");
				}
			}
			catch (Exception ex)
			{
				Console.WriteLine(ex.Message);
			}
			return rowsAffected;
		}

		public int UpdateUserOption(string ProcessorSku, string MainboarSku, string RAMSku, string HDDSku, string SSDSku, string VGASku, string SourceSku,
			string CaseSku, string RadiatorsSku, string ScreenSku, string KeyboardSku, string MouseSku, string HeadphoneSku, string SpeakersSku, int UserId)
		{
			string query = "update UserCart set ProcessorSku = @ProcessorSku,"
				+ " MainboarSku = @MainboarSku,"
				+ " RAMSku = @RAMSku,"
				+ " HDDSku = @HDDSku,"
				+ " SSDSku = @SSDSku,"
				+ " VGASku = @VGASku,"
				+ " SourceSku = @SourceSku,"
				+ " CaseSku = @CaseSku,"
				+ " RadiatorsSku = @RadiatorsSku,"
				+ " ScreenSku = @ScreenSku,"
				+ " KeyboardSku = @KeyboardSku,"
				+ " MouseSku = @MouseSku,"
				+ " HeadphoneSku = @HeadphoneSku,"
				+ " SpeakersSku = @SpeakersSku"
				+ " where UserId= @UserId";
			List<SqlParameter> parameters = new List<SqlParameter>
			{
				new SqlParameter("@ProcessorSku", ProcessorSku),
				new SqlParameter("@MainboarSku", MainboarSku),
				new SqlParameter("@RAMSku", RAMSku),
				new SqlParameter("@HDDSku", HDDSku),
				new SqlParameter("@SSDSku", SSDSku),
				new SqlParameter("@VGASku", VGASku),
				new SqlParameter("@SourceSku", SourceSku),
				new SqlParameter("@CaseSku", CaseSku),
				new SqlParameter("@RadiatorsSku", RadiatorsSku),
				new SqlParameter("@ScreenSku", ScreenSku),
				new SqlParameter("@KeyboardSku", KeyboardSku),
				new SqlParameter("@MouseSku", MouseSku),
				new SqlParameter("@HeadphoneSku", HeadphoneSku),
				new SqlParameter("@SpeakersSku", SpeakersSku),
				new SqlParameter("@UserId", UserId)
			};
			int rowsAffected = 0;
			try
			{
				rowsAffected = SqlHelper.ExecuteNonQuery(Startup.ConnectionString,
				   CommandType.Text, query, parameters.ToArray());
				if (rowsAffected == -1)
				{
					Console.WriteLine("Error occurs!");
				}
			}
			catch (Exception ex)
			{
				Console.WriteLine(ex.Message);
			}
			return rowsAffected;
		}

		public int CheckUserChooseOrNot(int UserId)
		{
			string query = "select UserId from UserCart"
						   + " where UserId = @UserId";
			List<SqlParameter> parameters = new List<SqlParameter>
			{
				new SqlParameter("@UserId", UserId),
			};
			int rowsAffected = 0;
			try
			{
				SqlDataReader reader = SqlHelper.ExecuteReader(Startup.ConnectionString, CommandType.Text, query, parameters.ToArray());
				if (reader.HasRows)
				{
					while (reader.Read())
					{
						rowsAffected = reader.GetInt32(0);
					}
				}
				else
				{
					rowsAffected = -1;
				}
				reader.Close();
			}
			catch (Exception ex)
			{
				Console.WriteLine(ex.Message);
			}
			return rowsAffected;
		}

		public int CheckProductIsExist(int UserId, string SKU)
		{
			string query = @"select Type from
							(
							select SKU from Quantity where SKU = @SKU and UserId = @UserId
							) as a join ComputerComponent as cc on cc.SKU = a.SKU and cc.SKU = @SKU";
			List<SqlParameter> parameters = new List<SqlParameter>
			{
				new SqlParameter("@ProcessorSku", SKU),
				new SqlParameter("@UserId", UserId)
			};
			int rowsAffected = 0;
			try
			{
				SqlDataReader reader = SqlHelper.ExecuteReader(Startup.ConnectionString, CommandType.Text, query, parameters.ToArray());
				if (reader.HasRows)
				{
					while (reader.Read())
					{
						rowsAffected = reader.GetInt32(0);
					}
				}
				else
				{
					rowsAffected = -1;
				}
				reader.Close();
			}
			catch (Exception ex)
			{
				Console.WriteLine(ex.Message);
			}
			return rowsAffected;
		}
	}
}
