CREATE FUNCTION [dbo].[GetCurrencyAccountHistoryDataPointsForUserAndCurrency]
(
	@userId INT,
	@currencyId INT
)
RETURNS @result TABLE
(
	[TimeStampDate] DATE,
	[Value] DECIMAL(18,2),
	CurrencyName NVARCHAR(MAX),
	AccountName NVARCHAR(MAX),
	UserName NVARCHAR(MAX)
)
AS
BEGIN
	;WITH
	CA_CTE AS
	(
		SELECT ca.*
		FROM CurrencyAccounts ca
		INNER JOIN Currencies c ON c.Id = ca.CurrencyId
		INNER JOIN Accounts a ON a.Id = ca.AccountId
		WHERE c.Id = @currencyId 
		  AND a.UserId = @userId
	),
	TS_CTE AS
	(
		SELECT t.[TimeStampDate], t.CurrencyAccountId
		FROM Transactions t	
		INNER JOIN CA_CTE cte ON cte.Id = t.CurrencyAccountId   
		UNION	  
		SElECT fv.[TimeStampDate], fv.CurrencyAccountId
		FROM FixedValues fv
		INNER JOIN CA_CTE cte ON cte.Id = fv.CurrencyAccountId
	),
	TS_CTE_DISTINCT AS
	(
		SELECT DISTINCT *
		FROM TS_CTE
	)
	INSERT INTO @result
	SELECT ts.[TimeStampDate]
		 , [dbo].[GetValueForDate](ts.[TimeStampDate], ca.Id)
		 , (SELECT TOP 1 cs.Symbol FROM CurrencySymbols cs WHERE cs.CurrencyId = ca.CurrencyId) AS CurrencyName
		 , a.[Name] AS AccountName
		 , up.[Name] AS UserName
	FROM TS_CTE_DISTINCT ts
	CROSS JOIN (SELECT * FROM CA_CTE) ca 
	INNER JOIN Accounts a ON a.Id = ca.AccountId
	INNER JOIN Users u ON u.Id = a.UserId
	INNER JOIN Persons up ON up.Id = u.PersonId

	RETURN
END
GO