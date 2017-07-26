CREATE PROCEDURE [dbo].[AddRawDataEntry]
(
	@transactionId INT,
	@key NVARCHAR(MAX) NOT NULL,
	@value NVARCHAR(MAX) NOT NULL
)
AS
BEGIN
	DECLARE @rawDataId INT
	SELECT @rawDataId = t.RawDataId
	FROM Transactions t
	WHERE t.Id = @rawDataId

	IF @rawDataId IS NULL
	BEGIN
		INSERT INTO RawData DEFAULT VALUES
		SET @rawDataId = SCOPE_IDENTITY()
		UPDATE Transactions
		SET Transactions.RawDataId = @rawDataId
		WHERE Transactions.Id = @transactionId
	END

	INSERT INTO RawDataEntries (RawDataId, [Key], [Value])
	VALUES (@rawDataId, @key, @value)
END
