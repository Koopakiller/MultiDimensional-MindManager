namespace Koopakiller.Apps.Picosmos.Real.Areas.Api.ViewModels
{
    using System;

    public class FinanceEntry
    {
        public string Name { get; set; }

        public decimal Value { get; set; }

        public int PersonId { get; set; }

        public int UserId { get; set; }

        public int CurrencyId { get; set; }

        public DateTime TimeStamp { get; set; }

        public dynamic Coordinates { get; set; }
    }
}