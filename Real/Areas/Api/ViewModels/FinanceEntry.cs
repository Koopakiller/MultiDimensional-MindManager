namespace Real.Areas.Api.ViewModels
{
    using System;

    public class FinanceEntry
    {
        public string Name { get; set; }

        public decimal Value { get; set; }

        public string Person { get; set; }

        public int? ExistingPersonId { get; set; }

        public int UserId { get; set; }

        public int CurrencyId { get; set; }

        public DateTime TimeStamp { get; set; }
    }
}