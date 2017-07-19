CREATE FUNCTION [dbo].[GetCurrencyAccountHistoryDataPoints]
(	
	@accountId INT
)
RETURNS @result TABLE
(
	[TimeStamp] DATETIME,
	[Value] DECIMAL(18,2)
)
AS
BEGIN
	INSERT INTO @result ([TimeStamp], [Value])
	SELECT ts.[Timestamp]
		 , [dbo].[GetValueForDate](ts.[Timestamp], @accountId)
	FROM (SELECT DISTINCT t.[Timestamp]
		  FROM Transactions t	  
		  WHERE t.CurrencyAccountId = @accountId
		  UNION	  
		  SElECT DISTINCT fv.[Timestamp]
		  FROM FixedValues fv
		  WHERE fv.CurrencyAccountId = @accountId) ts

	RETURN
END
GO