CREATE PROCEDURE [dbo].[AddTransaction]
(
	@personId [int],
	@value [decimal](18, 2),
	@timeStampDate DATE,
	@timeStampTime TIME NULL,
	@currencyAccountId [int],
	@note NVARCHAR(MAX)
)
AS
BEGIN
	INSERT INTO Transactions (PersonId, [Value], [TimeStampDate], [TimeStampTime], CurrencyAccountId, Note)
	VALUES (@personId, @value, @timeStampDate, @timeStampTime, @currencyAccountId, @note)

	SELECT * 
	FROM Transactions t
	WHERE t.Id = SCOPE_IDENTITY()
END
