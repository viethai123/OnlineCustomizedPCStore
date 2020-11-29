using Microsoft.ApplicationBlocks.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineCustomizedPCStore.Model
{
	public class QuantityModel
	{
		public int Id { get; set; }
		public int Quantity { get; set; }
		public string SKU { get; set; }
		public int UserId { get; set; }

		public int AddUserOptionQuantity(string SKU, int Quantity, int UserId)
		{
			string query = "insert into Quantity(Quantity, SKU, UserId)"
						   + "values (@Quantity,@SKU, @UserId)";
			List<SqlParameter> parameters = new List<SqlParameter>
			{
				new SqlParameter("@Quantity", Quantity),
				new SqlParameter("@SKU", SKU),
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

		public int AddCompletedBuildOption(string ProcessorSku, string MainboarSku, string RAMSku, string HDDSku, string SSDSku, string VGASku,
			string SourceSku, string CaseSku, string RadiatorsSku, string ScreenSku, string KeyboardSku, string MouseSku, string HeadphoneSku,
			string SpeakersSku, int Quantity, int UserId)
		{
			string query = "insert into Quantity(Quantity, SKU, UserId)"
						    + "values (@Quantity,@ProcessorSku, @UserId),"
							+ "(@Quantity,@MainboarSku, @UserId),"
							+ "(@Quantity,@RAMSku, @UserId),"
							+ "(@Quantity,@HDDSku, @UserId),"
							+ "(@Quantity,@SSDSku, @UserId),"
							+ "(@Quantity,@VGASku, @UserId),"
							+ "(@Quantity,@SourceSku, @UserId),"
							+ "(@Quantity,@CaseSku, @UserId),"
							+ "(@Quantity,@RadiatorsSku, @UserId),"
							+ "(@Quantity,@ScreenSku, @UserId),"
							+ "(@Quantity,@KeyboardSku, @UserId),"
							+ "(@Quantity,@MouseSku, @UserId),"
							+ "(@Quantity,@HeadphoneSku, @UserId),"
							+ "(@Quantity,@SpeakersSku, @UserId)";
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

				new SqlParameter("@Quantity", Quantity),
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

		public int UpdateUserOptionQuantity(string SKU, int Quantity, int UserId)
		{
			string query = "update Quantity"
				+ " set Quantity = @Quantity, SKU = @SKU where SKU = @SKU and UserId = @UserId";
			List<SqlParameter> parameters = new List<SqlParameter>
			{
				new SqlParameter("@Quantity", Quantity),
				new SqlParameter("@SKU", SKU),
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

		public int DeleteProductQuantity(int UserId)
		{
			string query = "DELETE FROM Quantity WHERE UserId = @UserId";
			List<SqlParameter> parameters = new List<SqlParameter>
			{
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
	}
}
