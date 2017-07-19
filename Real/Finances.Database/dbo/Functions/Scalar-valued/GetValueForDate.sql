CREATE FUNCTION [dbo].[GetValueForDate]
(
	@timeStamp DATETIME,
	@currencyAccountId INT
)
RETURNS DECIMAL(18,2)
AS
BEGIN
	DECLARE @fixTimeStamp DATETIME;
	DECLARE @fixValue DECIMAL(18,2);

	SELECT TOP 1 @fixValue = fv.[Value]
	           , @fixTimeStamp = fv.[Timestamp] 
	FROM FixedValues fv 
	WHERE fv.[Timestamp] <= @timeStamp 
	  AND fv.CurrencyAccountId = @currencyAccountId
	ORDER BY fv.[Timestamp] DESC
	
	SET @fixValue = ISNULL(@fixValue, 0)

	RETURN @fixValue + ISNULL((SELECT SUM(t.[Value])
							  FROM Transactions t 
							  WHERE t.[Timestamp] <= @timeStamp 
							    AND (t.[Timestamp] > @fixTimeStamp OR @fixTimeStamp IS NULL)
								AND t.CurrencyAccountId = @currencyAccountId
							  ), 0)
END
GO

