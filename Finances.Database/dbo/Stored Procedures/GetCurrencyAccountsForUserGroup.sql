CREATE PROCEDURE [dbo].[GetCurrencyAccountsForUserGroup]
(
    @userGroupId INT
)
AS
BEGIN
    SELECT a.Id AS [AccountId]
         , a.[Name] AS [AccountName]
         , ca.Id AS [CurrencyAccountId]
         , ca.CurrencyId AS CurrencyId
    FROM Accounts a
    INNER JOIN CurrencyAccounts ca ON ca.AccountId = a.Id
    WHERE a.UserGroupId = @userGroupId
END
