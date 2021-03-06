﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using Koopakiller.Apps.Picosmos.Real.Areas.Api.ViewModels;
using System.ComponentModel.DataAnnotations;

namespace Koopakiller.Apps.Picosmos.Real.Model
{
    public class FinancesDbContext : DbContext
    {
        public FinancesDbContext(DbContextOptions<FinancesDbContext> options) : base(options) { }

        private DbSet<User> Users { get; set; }
        private DbSet<Person> Persons { get; set; }
        private DbSet<CurrencyAccount> CurrencyAccounts { get; set; }
        private DbSet<Transaction> Transactions { get; set; }
        private DbSet<TransactionOverview> TransactionOverviews { get; set; }
        private DbSet<CurrencySymbol> CurrencySymbols { get; set; }
        private DbSet<UserGroup> UserGroups { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TransactionOverview>()
                .HasKey(x => new { x.AccountName, x.CurrencyAccountId });
        }

        public IEnumerable<User> GetUsers()
        {
            return this.Users.FromSql("EXEC GetUsers");
        }

        public IEnumerable<Person> GetPersons()
        {
            // NULL = @userId
            return this.Persons.FromSql("EXEC GetPersons");
        }

        public IEnumerable<Person> GetPersons(int? userGroupId)
        {
            if (userGroupId == null)
            {
                return this.GetPersons();
            }
            return this.Persons.FromSql("EXEC GetPersons {0}", userGroupId);
        }

        public IEnumerable<CurrencyAccount> GetCurrencyAccountsForUser(int userId)
        {
            return this.CurrencyAccounts.FromSql("EXEC GetCurrencyAccountsForUser {0}", userId);
        }

        public IEnumerable<CurrencyAccount> GetCurrencyAccountsForUserGroup(int userGroupId)
        {
            return this.CurrencyAccounts.FromSql("EXEC GetCurrencyAccountsForUserGroup {0}", userGroupId);
        }

        public Transaction AddTransaction(int personId, decimal value, DateTime timeStampDate, TimeSpan? timeStampTime, int currencyAccountId, string note)
        {
            return this.Transactions.FromSql("EXEC AddTransaction {0}, {1}, {2}, {3}, {4}, {5}",
                                             personId, value, timeStampDate, timeStampTime, currencyAccountId, note).SingleOrDefault();
        }

        public void AddRawDataEntry(int transactionId, string key, string value)
        {
            this.Database.ExecuteSqlCommand("EXEC AddRawDataEntry {0}, {1}, {2}", transactionId, key, value);
        }

        public IEnumerable<CurrencySymbol> GetCurrencySymbolsForCurrency(int currencyId)
        {
            return this.CurrencySymbols.FromSql("EXEC GetCurrencySymbolsForCurrency {0}", currencyId);
        }

        public IEnumerable<FinanceTransaction> AddTransactions(IEnumerable<FinanceTransaction> data)
        {
            foreach (var transaction in data)
            {
                var inserted = this.AddTransaction(transaction.PersonId, transaction.Value, transaction.TimeStampDate, transaction.TimeStampTime, transaction.CurrencyAccountId, transaction.Note);
                if (transaction.RawData != null)
                {
                    foreach (var rawData in transaction.RawData)
                    {
                        this.AddRawDataEntry(inserted.Id, rawData.Key, rawData.Value);
                    }
                }
                yield return new FinanceTransaction()
                {
                    Id = inserted.Id,
                    PersonId = inserted.PersonId,
                    Value = inserted.Value,
                    TimeStampDate = inserted.TimeStampDate,
                    TimeStampTime = inserted.TimeStampTime,
                    CurrencyAccountId = inserted.CurrencyAccountId,
                    Note = inserted.Note,
                    RawData = transaction.RawData,
                };
            }
        }

        internal IEnumerable<User> GetUsersFromUserGroup(int userGroupId)
        {
            return this.Users.FromSql("EXEC GetUsersFromUserGroup {0}", userGroupId);
        }

        public IEnumerable<Transaction> GetTransactions(int currencyAccountId, int skipCount, int takeCount, SortOrder sortOrder)
        {
            return this.Transactions.FromSql("EXEC GetTransactions {0}, {1}, {2}, {3}",
                                             currencyAccountId, skipCount, takeCount, sortOrder == SortOrder.Asc ? "ASC" : "DESC");
        }

        public IEnumerable<TransactionOverview> GetTransactionOverviewForUserAtTimeStamp(int userId, DateTime timeStampDate)
        {
            return this.TransactionOverviews.FromSql("EXEC GetTransactionOverviewForUserAtTimeStamp {0}, {1}", userId, timeStampDate);
        }

        public Person AddPerson(string name, int userGroupId)
        {
            return this.Persons.FromSql("EXEC AddPerson {0}, {1}", name, userGroupId).SingleOrDefault();
        }

        public User AddUser(string name, string email, string phone)
        {
            return this.Users.FromSql("EXEC AddUser {0}, {1}, {3}", name, email, phone).SingleOrDefault();
        }

        public UserGroup AddUserGroup(string name)
        {
            return this.UserGroups.FromSql("EXEC AddUserGroup {0}", name).SingleOrDefault();
        }

        public void AddUserToUserGroup(int userGroupId, int userId)
        {
            this.Database.ExecuteSqlCommand("EXEC AddUserToUserGroup {0}, {1}", userGroupId, userId);
        }

        public IEnumerable<UserGroup> GetUserGroups(int? userId)
        {
            if (userId == null)
            {
                return this.UserGroups.FromSql("EXEC GetUserGroups");
            }
            else
            {
                return this.UserGroups.FromSql("EXEC GetUserGroups {0}", userId);
            }
        }
    }

    public enum SortOrder
    {
        Asc,
        Desc
    }

    public class TransactionOverview
    {
        public string AccountName { get; set; }
        public int CurrencyId { get; set; }
        public int CurrencyAccountId { get; set; }
        public decimal Value { get; set; }
    }

    public class UserGroup
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Person
    {
        public int Id { get; set; }
        public string Name { get; set; }
        //public int? UserId { get; set; }
    }

    public class CurrencyAccount
    {
        public int AccountId { get; set; }
        public string AccountName { get; set; }
        public int CurrencyAccountId { get; set; }
        public int CurrencyId { get; set; }
    }

    public class Transaction
    {
        public int Id { get; set; }
        public int PersonId { get; set; }
        public decimal Value { get; set; }
        public DateTime TimeStampDate { get; set; }
        public TimeSpan? TimeStampTime { get; set; }
        public int CurrencyAccountId { get; set; }
        public string Note { get; set; }
        public int? RawDataId { get; set; }
    }

    public class CurrencySymbol
    {
        public int Id { get; set; }
        public string Symbol { get; set; }
    }
}
