CREATE PROCEDURE [dbo].[GetTransactionOverviewForUserAtTimeStamp]
    @userId INT,
    @timeStampDate DATE
AS
BEGIN
    SELECT a.Name AS [AccountName]
         , ca.Id AS [CurrencyAccountId]
         , ca.CurrencyId AS [CurrencyId]
         , [dbo].[GetValueForDate](@timeStampDate, ca.Id) AS [Value]
    FROM CurrencyAccounts ca
    INNER JOIN Accounts a ON a.Id = ca.AccountId
    WHERE a.UserGroupId = @userId
END