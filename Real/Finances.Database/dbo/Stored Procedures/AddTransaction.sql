CREATE PROCEDURE [dbo].[AddTransaction]
(
	@personId [int],
	@value [decimal](18, 2),
	@timeStamp [datetime],
	@currencyAccountId [int],
	@note NVARCHAR(MAX)
)
AS
BEGIN
	INSERT INTO Transactions (PersonId, [Value], [TimeStamp], CurrencyAccountId, Note)
	VALUES (@personId, @value, @timestamp, @currencyAccountId, @note)

	SELECT * 
	FROM Transactions t
	WHERE t.Id = SCOPE_IDENTITY()
END
