CREATE FUNCTION [dbo].[GetValueForDate]
(
	@timeStampDate DATE,
	@currencyAccountId INT
)
RETURNS DECIMAL(18,2)
AS
BEGIN
	DECLARE @fixTimeStamp DATETIME;
	DECLARE @fixValue DECIMAL(18,2);

	SELECT TOP 1 @fixValue = fv.[Value]
	           , @fixTimeStamp = fv.[TimestampDate] 
	FROM FixedValues fv 
	WHERE fv.[TimestampDate] <= @timeStampDate 
	  AND fv.CurrencyAccountId = @currencyAccountId
	ORDER BY fv.[TimeStampDate] DESC, fv.[TimeStampTime] DESC
	
	SET @fixValue = ISNULL(@fixValue, 0)

	RETURN @fixValue + ISNULL((SELECT SUM(t.[Value])
							  FROM Transactions t 
							  WHERE t.[TimestampDate] <= @timeStampDate 
							    AND (t.[TimestampDate] > @fixTimeStamp OR @fixTimeStamp IS NULL)
								AND t.CurrencyAccountId = @currencyAccountId
							  ), 0)
END
GO

