CREATE PROCEDURE [dbo].[GetAccountStatisticsSummaryForCurrencyAccount]
	@currencyAccountId int
AS
BEGIN
	SELECT p.Id, p.Name, (SELECT SUM(t.Value) FROM Transactions t WHERE t.PersonId = p.Id) AS [ContributedValue]
	FROM CurrencyAccounts ca 
	INNER JOIN Accounts a ON a.Id = ca.AccountId
	INNER JOIN UserGroups ug ON ug.Id = a.UserGroupId
	INNER JOIN UserGroupUsers ugu ON ugu.UserGroupId = ug.Id
	INNER JOIN Persons p ON ugu.UserPersonId = p.Id
	WHERE ca.Id = @currencyAccountId 
END
