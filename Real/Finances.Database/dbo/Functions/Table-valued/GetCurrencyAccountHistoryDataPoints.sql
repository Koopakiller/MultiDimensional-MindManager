CREATE FUNCTION [dbo].[GetCurrencyAccountHistoryDataPoints]()
RETURNS @result TABLE
(
	[TimeStamp] DATETIME,
	[Value] DECIMAL(18,2),
	CurrencyName NVARCHAR(MAX),
	AccountName NVARCHAR(MAX),
	UserName NVARCHAR(MAX)
)
AS
BEGIN
	INSERT INTO @result
	SELECT ts.[Timestamp]
		 , [dbo].[GetValueForDate](ts.[Timestamp], a.Id)
		 , (SELECT TOP 1 cs.Symbol FROM CurrencySymbols cs WHERE cs.CurrencyId = c.Id) AS CurrencyName
		 , a.[Name] AS AccountName
		 , up.[Name] AS UserName
	FROM (SELECT DISTINCT t.[Timestamp], t.CurrencyAccountId
		  FROM Transactions t	  
		  UNION	  
		  SElECT DISTINCT fv.[Timestamp], fv.CurrencyAccountId
		  FROM FixedValues fv) ts
	INNER JOIN CurrencyAccounts ca ON ca.Id = ts.CurrencyAccountId
	INNER JOIN Currencies c ON c.Id = ca.CurrencyId
	INNER JOIN Accounts a ON a.Id = ca.AccountId
	INNER JOIN Users u ON u.Id = a.UserId
	INNER JOIN Persons up ON up.Id = u.PersonId

	RETURN
END
GO