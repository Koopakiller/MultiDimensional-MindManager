CREATE FUNCTION [dbo].[GetCurrencyAccountHistoryDataPoints]()
RETURNS @result TABLE
(
	[TimeStampDate] DATE,
	[Value] DECIMAL(18,2),
	[CurrencyName] NVARCHAR(MAX),
	[AccountName] NVARCHAR(MAX),
	[UserName] NVARCHAR(MAX)
)
AS
BEGIN
	INSERT INTO @result
	SELECT tbl.*
	FROM Users u
	CROSS JOIN (SELECT * FROM Currencies) c
	CROSS APPLY [dbo].[GetCurrencyAccountHistoryDataPointsForUserAndCurrency](u.Id, c.Id) tbl

	RETURN
END
GO