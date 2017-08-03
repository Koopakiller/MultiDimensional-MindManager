CREATE PROCEDURE [dbo].[GetTransactions]
	@currencyAccountId INT,
	@skipCount INT,
	@takeCount INT,
	@timeStampOrder NVARCHAR(4) = 'DESC'
AS
BEGIN
	SELECT t.[TimeStamp]
		 , t.[Id]
		 , t.[Note]
		 , t.[RawDataId]
		 , t.[Value]
		 , t.[CurrencyAccountId]
		 , t.[PersonId]
	FROM Transactions t
	WHERE t.CurrencyAccountId = @currencyAccountId
	ORDER BY CASE WHEN UPPER(@timeStampOrder) = 'ASC' THEN t.[TimeStamp] END ASC,
			 CASE WHEN UPPER(@timeStampOrder) = 'DESC' THEN t.[TimeStamp] END DESC,
			 t.[Note] ASC
	OFFSET @skipCount ROWS 
	FETCH NEXT @takeCount ROWS ONLY;
END