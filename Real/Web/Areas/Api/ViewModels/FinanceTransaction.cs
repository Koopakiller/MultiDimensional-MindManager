namespace Koopakiller.Apps.Picosmos.Real.Areas.Api.ViewModels
{
    using System;

    public class FinanceTransaction
    {
        public int Id { get; set; }

        public string Note { get; set; }

        public decimal Value { get; set; }

        public int PersonId { get; set; }

        public int UserId { get; set; }

        public int CurrencyAccountId { get; set; }

        public DateTime TimeStamp { get; set; }

        public KeyValuePair[] RawData { get; set; }
    }

    public class KeyValuePair
    {
        public string Key { get; set; }
        public string Value { get; set; }
    }
}