CREATE PROCEDURE [dbo].[AddTransaction]
(
	@personId [int],
	@value [decimal](18, 2),
	@timeStampDate DATE,
	@timeStampTime TIME NULL = NULL,
	@currencyAccountId [int],
	@note NVARCHAR(MAX),
	@isDebt bit NOT NULL = 0
)
AS
BEGIN
	INSERT INTO Transactions (PersonId, [Value], [TimeStampDate], [TimeStampTime], CurrencyAccountId, Note)
	VALUES (@personId, @value, @timeStampDate, @timeStampTime, @currencyAccountId, @note)

	SELECT * 
	FROM Transactions t
	WHERE t.Id = SCOPE_IDENTITY()
END
