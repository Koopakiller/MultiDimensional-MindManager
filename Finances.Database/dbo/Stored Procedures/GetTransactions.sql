CREATE PROCEDURE [dbo].[GetTransactions]
    @currencyAccountId INT,
    @skipCount INT,
    @takeCount INT,
    @timeStampOrder NVARCHAR(4) = 'DESC'
AS
BEGIN
    SELECT t.[TimeStampDate]
         , t.[TimeStampTime]
         , t.[Id]
         , t.[Note]
         , t.[RawDataId]
         , t.[Value]
         , t.[CurrencyAccountId]
         , t.[PersonId]
    FROM Transactions t
    WHERE t.CurrencyAccountId = @currencyAccountId
    ORDER BY CASE WHEN UPPER(@timeStampOrder) = 'ASC'  THEN t.[TimeStampDate] END ASC,
             CASE WHEN UPPER(@timeStampOrder) = 'ASC'  THEN t.[TimeStampTime] END ASC,
             CASE WHEN UPPER(@timeStampOrder) = 'DESC' THEN t.[TimeStampDate] END DESC,
             CASE WHEN UPPER(@timeStampOrder) = 'DESC' THEN t.[TimeStampTime] END DESC,
             t.[Id]
    OFFSET @skipCount ROWS 
    FETCH NEXT @takeCount ROWS ONLY;
END