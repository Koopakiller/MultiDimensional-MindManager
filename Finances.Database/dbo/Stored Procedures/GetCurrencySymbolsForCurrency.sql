CREATE PROCEDURE [dbo].[GetCurrencySymbolsForCurrency]
(
    @currencyId INT
)
AS
BEGIN
    SELECT cs.Id AS Id
         , cs.Symbol AS Symbol
    FROM CurrencySymbols cs
    WHERE cs.CurrencyId = @currencyId
END
