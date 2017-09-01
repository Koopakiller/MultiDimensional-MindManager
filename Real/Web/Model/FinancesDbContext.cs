using Microsoft.EntityFrameworkCore;
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
            return this.Persons.FromSql("EXEC GetPersons NULL");
        }

        public IEnumerable<CurrencyAccount> GetCurrencyAccountsForUser(int userId)
        {
            return this.CurrencyAccounts.FromSql("EXEC GetCurrencyAccountsForUser {0}", userId);
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

        public IEnumerable<Transaction> GetTransactions(int currencyAccountId, int skipCount, int takeCount, SortOrder sortOrder)
        {
            return this.Transactions.FromSql("EXEC GetTransactions {0}, {1}, {2}, {3}",
                                             currencyAccountId, skipCount, takeCount, sortOrder == SortOrder.Asc ? "ASC" : "DESC");
        }

        public IEnumerable<TransactionOverview> GetTransactionOverviewForUserAtTimeStamp(int userId, DateTime timeStampDate)
        {
            return this.TransactionOverviews.FromSql("EXEC GetTransactionOverviewForUserAtTimeStamp {0}, {1}", userId, timeStampDate);
        }

        public Person AddPerson(string name, int userId)
        {
            return this.Persons.FromSql("EXEC AddPerson {0}, {1}", name, userId).SingleOrDefault();
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
