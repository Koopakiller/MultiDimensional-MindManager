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

    CREATE TABLE #result (EntityId INT, ColumnName NVARCHAR(128), ColumnValue NVARCHAR(MAX))

    DECLARE @column NVARCHAR(128);
    DECLARE myCursor CURSOR
    FOR 
        SELECT c.[name]
        FROM sys.tables AS t
        INNER JOIN sys.columns AS c ON c.[object_id] = t.[object_id]
        WHERE t.[name] = @tableName
    OPEN myCursor  
    FETCH NEXT FROM myCursor 
    INTO @column

    WHILE @@FETCH_STATUS = 0
    BEGIN
        DECLARE @query NVARCHAR(MAX) 
            = ' SELECT ROW_NUMBER() OVER(ORDER BY myTable.' + QUOTENAME(@columnName) + ' DESC) AS [EntityId], ''' + @column + ''' AS [ColumnName], CAST(myTable.' + QUOTENAME(@column) + ' AS NVARCHAR(MAX)) AS [ColumnValue]'
            + ' FROM ' + QUOTENAME(@tableName) + ' AS myTable'
            + ' WHERE myTable.' + QUOTENAME(@columnName) + ' = ' + CAST(@columnValue AS NVARCHAR(16))
        PRINT @query

        INSERT INTO #result(EntityId, ColumnName, ColumnValue)
        EXEC sp_sqlexec @query
    
        FETCH NEXT FROM myCursor 
        INTO @column
    END
    CLOSE myCursor;  
    DEALLOCATE myCursor;  

    SELECT * FROM #result
    ORDER BY EntityId, ColumnName

    DROP TABLE #result

	SET NOCOUNT OFF
	SET FMTONLY ON
END