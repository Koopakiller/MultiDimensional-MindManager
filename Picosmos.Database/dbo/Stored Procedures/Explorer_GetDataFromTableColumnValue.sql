CREATE PROCEDURE [dbo].[Explorer_GetDataFromTableColumnValue] 
(
    @tableName NVARCHAR(128),
    @columnName NVARCHAR(128),
    @columnValue INT
)
AS
BEGIN    
    SET NOCOUNT ON
    SET FMTONLY OFF
	
    DECLARE @query NVARCHAR(MAX)
         = ' SELECT * '
         + ' FROM [dbo].[udf-EAV]((Select RowNumber=Row_Number() over (Order By ID), myTable.* '
         + '                       FROM ' + QUOTENAME(@tableName) + ' AS myTable'
         + '                       WHERE myTable.' + QUOTENAME(@columnName) + '=' + CAST(@columnValue AS NVARCHAR(16))
         + '                       FOR XML RAW))'
            
    CREATE TABLE #result
    (
        EntityId INT,
        ColumnName NVARCHAR(128),
        ColumnValue NVARCHAR(MAX)
    )

    INSERT INTO #result
    EXEC sp_sqlexec @query

    SELECT * 
    FROM #result

    DROP TABLE #result

    SET NOCOUNT OFF
    SET FMTONLY ON
END