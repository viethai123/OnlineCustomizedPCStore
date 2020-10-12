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
		public int UserId { get; set; }

		public int AddUserOption(string ProcessorSku, string MainboarSku, int UserId)
		{
			string query = "insert into UserCart(ProcessorSku, MainboarSku, UserId)"
						   + "values (@ProcessorSku,@MainboarSku, @UserId)";
			List<SqlParameter> parameters = new List<SqlParameter>
			{
				new SqlParameter("@ProcessorSku", ProcessorSku),
				new SqlParameter("@MainboarSku", MainboarSku),
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

		public int UpdateUserOption(string ProcessorSku, string MainboarSku, int UserId)
		{
			string query = "update UserCart set ProcessorSku = @ProcessorSku,"
				+ " MainboarSku = @MainboarSku"
				+ " where UserId= @UserId";
			List<SqlParameter> parameters = new List<SqlParameter>
			{
				new SqlParameter("@ProcessorSku", ProcessorSku),
				new SqlParameter("@MainboarSku", MainboarSku),
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
	}
}
