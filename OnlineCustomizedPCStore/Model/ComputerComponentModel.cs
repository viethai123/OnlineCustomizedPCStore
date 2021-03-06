﻿using Microsoft.ApplicationBlocks.Data;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace OnlineCustomizedPCStore.Model
{
	public class ComputerComponentModel
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string URL { get; set; }
		public string SKU { get; set; }
		public string Price { get; set; }
		public int Type { get; set; }
		public int Quantity { get; set; }
		public int UserId { get; set; }

		public List<ComputerComponentModel> GetComputerComponents()
		{
			string query = "select Id, Name, URL, SKU, Price, Type from ComputerComponent";
			List<ComputerComponentModel> computerComponents = new List<ComputerComponentModel>();

			try
			{
				SqlDataReader reader = SqlHelper.ExecuteReader(Startup.ConnectionString, CommandType.Text, query);
				if (reader.HasRows)
				{
					while (reader.Read())
					{
						ComputerComponentModel computerComponent = new ComputerComponentModel
						{
							Id = reader.GetInt32(0),
							Name = reader.GetString(1),
							URL = reader.GetString(2),
							SKU = reader.GetString(3),
							Price = reader.GetString(4),
							Type = reader.GetInt32(5),
						};
						computerComponents.Add(computerComponent);
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
			return computerComponents;
		}

		public List<ComputerComponentModel> GetUserOptions(int UserId)
		{
			string query = @"select cc.Id, Name, URL, cc.SKU, Price, Type, q.Quantity, q.UserId 
							from ComputerComponent as cc 
							join UserCart uc on uc.ProcessorSku = cc.SKU or uc.MainboarSku = cc.SKU 
							join Quantity as q on q.SKU = cc.SKU 
							where q.UserId = @UserId and uc.UserId = @UserId";

			List<SqlParameter> parameters = new List<SqlParameter>
			{
				new SqlParameter("@UserId", UserId)
			};

			List<ComputerComponentModel> computerComponents = new List<ComputerComponentModel>();

			try
			{
				SqlDataReader reader = SqlHelper.ExecuteReader(Startup.ConnectionString, CommandType.Text, query, parameters.ToArray());
				if (reader.HasRows)
				{
					while (reader.Read())
					{
						ComputerComponentModel computerComponent = new ComputerComponentModel
						{
							Id = reader.GetInt32(0),
							Name = reader.GetString(1),
							URL = reader.GetString(2),
							SKU = reader.GetString(3),
							Price = reader.GetString(4),
							Type = reader.GetInt32(5),
							Quantity = reader.GetInt32(6),
							UserId = reader.GetInt32(7)
						};
						computerComponents.Add(computerComponent);
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
			return computerComponents;
		}
	}
}
