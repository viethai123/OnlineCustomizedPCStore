using System;
using System.Collections.Generic;
using Microsoft.ApplicationBlocks.Data;
using System.Data;
using System.Data.SqlClient;

namespace OnlineCustomizedPCStore.Model
{
	public class UserAccountModel
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string Password { get; set; }
		public string Email { get; set; }

        public int AddUserAccount(string Name, string Password, string Email)
        {
            string query = "insert into UserAccount(Name, Password, Email)"
                           + " values (@Name, @Password, @Email)";
            List<SqlParameter> parameters = new List<SqlParameter>
            {
                new SqlParameter("@Name", Name),
                new SqlParameter("@Password", Password),
                new SqlParameter("@Email", Email)
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
                string Message = ex.Message;
            }
            return rowsAffected;
        }

        public List<UserAccountModel> CheckAccountLogin(string Name, string Password)
        {
            string query = "select Id, Name, PassWord, Email from UserAccount"
                         + " Where Name = @Name and Password = @Password";

            List<UserAccountModel> userAccounts = new List<UserAccountModel>();

            List<SqlParameter> parameters = new List<SqlParameter>
            {
                new SqlParameter("@Name", Name),
                new SqlParameter("@Password", Password)
            };

            try
            {
                SqlDataReader reader = SqlHelper.ExecuteReader(Startup.ConnectionString, CommandType.Text, query, parameters.ToArray());

                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        UserAccountModel useraccount = new UserAccountModel
                        {
                            Id = reader.GetInt32(0),
                            Name = reader.GetString(1),
                            Password = reader.GetString(2),
                            Email = reader.GetString(3),
                        };
                        userAccounts.Add(useraccount);
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
            return userAccounts;
        }
    }


}
