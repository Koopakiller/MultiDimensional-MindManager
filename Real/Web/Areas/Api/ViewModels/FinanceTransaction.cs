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

        public DateTime TimeStampDate { get; set; }

        public TimeSpan? TimeStampTime { get; set; }

        public KeyValuePair[] RawData { get; set; }
    }

    public class KeyValuePair
    {
        public string Key { get; set; }
        public string Value { get; set; }
    }

    public class FinancePerson
    {
        public string Name { get; set; }

        public int UserGroupId { get; set; }
    }

    public class ApplicationUser
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}