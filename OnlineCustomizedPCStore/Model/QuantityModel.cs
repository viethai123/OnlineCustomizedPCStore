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
	}
}
