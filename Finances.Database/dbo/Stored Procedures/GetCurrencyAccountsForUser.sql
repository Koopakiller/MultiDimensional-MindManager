CREATE PROCEDURE [dbo].[GetCurrencyAccountsForUser]
(
    @userId INT
)
AS
BEGIN
    SELECT a.Id AS [AccountId]
         , a.[Name] AS [AccountName]
         , ca.Id AS [CurrencyAccountId]
         , ca.CurrencyId AS CurrencyId
    FROM Accounts a
    INNER JOIN CurrencyAccounts ca ON ca.AccountId = a.Id
	INNER JOIN UserGroupUsers ugu ON ugu.UserGroupId = a.UserGroupId
    WHERE ugu.UserId = @userId
END
