﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

namespace Koopakiller.Apps.Picosmos.Real.Model
{
    public class FinancesDbContext : DbContext
    {
        public FinancesDbContext(DbContextOptions<FinancesDbContext> options) : base(options) { }

        private DbSet<User> Users { get; set; }
        private DbSet<Person> Persons { get; set; }
        private DbSet<CurrencyAccount> CurrencyAccounts { get; set; }
        private DbSet<Transaction> Transactions { get; set; }
        private DbSet<CurrencySymbol> CurrencySymbols { get; set; }

        public IEnumerable<User> GetUsers()
        {
            return this.Users.FromSql("EXEC GetUsers");
        }

        public IEnumerable<Person> GetPersons()
        {
            return this.Persons.FromSql("EXEC GetPersons");
        }

        public IEnumerable<CurrencyAccount> GetCurrencyAccountsForUser(int userId)
        {
            return this.CurrencyAccounts.FromSql("EXEC GetCurrencyAccountsForUser {0}", userId);
        }

        public IEnumerable<Transaction> AddTransaction(int personId, decimal value, DateTime timeStamp, int currencyAccountId, string note)
        {
            return this.Transactions.FromSql("EXEC AddTransaction {0}, {1}, {2}, {3}, {4}", personId, value, timeStamp, currencyAccountId, note);
        }

        public void AddTransaction(int transactionId, string key, string value)
        {
            this.Database.ExecuteSqlCommand("EXEC AddRawDataEntry {0}, {1}, {2}", transactionId, key, value);
        }

        public void GetCurrencySymbolsForCurrency(int currencyId)
        {
            this.Database.ExecuteSqlCommand("EXEC GetCurrencySymbolsForCurrency {0}", currencyId);
        }
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
    }

    public class CurrencyAccount
    {
        public int AccountId { get; set; }
        public string AccountName { get; set; }
        public int CurrencyAccountId { get; set; }
        public string CurrencyName { get; set; }
    }

    public class Transaction
    {
        public int Id { get; set; }
        public int PersonId { get; set; }
        public decimal Value { get; set; }
        public DateTime TimeStamp { get; set; }
        public int CurrencyAccountId { get; set; }
        public string Note { get; set; }
        public int RawDataId { get; set; }
    }

    public class CurrencySymbol
    {
        public int Id { get; set; }
        public string Symbol { get; set; }
    }
}
