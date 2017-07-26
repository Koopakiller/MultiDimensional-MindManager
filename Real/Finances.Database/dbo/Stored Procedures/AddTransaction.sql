CREATE PROCEDURE [dbo].[AddTransaction]
(
	@personId [int] NOT NULL,
	@value [decimal](18, 2) NOT NULL,
	@timeStamp [datetime] NOT NULL,
	@currencyAccountId [int] NOT NULL,
	@note NVARCHAR(MAX) NOT NULL
)
AS
BEGIN
	INSERT INTO Transactions (PersonId, [Value], [TimeStamp], CurrencyAccountId, Note)
	OUTPUT inserted.Id
	VALUES (@personId, @value, @timestamp, @currencyAccountId, @note)

	SELECT * 
	FROM Transactions t
	WHERE t.Id = SCOPE_IDENTITY()
END
