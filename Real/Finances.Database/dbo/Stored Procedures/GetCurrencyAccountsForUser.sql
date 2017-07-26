CREATE PROCEDURE [dbo].[GetCurrencyAccountsForUser]
(
	@userId INT
)
AS
BEGIN
	SELECT a.Id AS [AccountId]
		 , a.[Name] AS [AccountName]
		 , ca.Id AS [CurrencyAccountId]
		 , (SELECT TOP 1 cs.Symbol FROM CurrencySymbols cs WHERE cs.CurrencyId = ca.CurrencyId) AS CurrencyName
	FROM Accounts a
	INNER JOIN CurrencyAccounts ca ON ca.AccountId = a.Id
	WHERE a.UserId = @userId
END
