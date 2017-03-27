CREATE PROCEDURE [dbo].[Explorer_GetLinkedCells]
	@tableName NVARCHAR(128),
	@columnName NVARCHAR(128),
	@id INT
AS
BEGIN

	SET NOCOUNT ON
	SET FMTONLY OFF

	SELECT [table].[name]            AS [SourceTableName]
		 , colFK.[name]              AS [SourceTableColumn]
		 , [reftable].[name]         AS [TargetTableName]
		 , colPK.[name]              AS [TargetTableColumn]
		 , CAST((CASE WHEN [table].[name] LIKE @tableName THEN 0 ELSE 1 END) AS BIT) 
									 AS [HasMultipleMatchingValues]
		 , CAST('' AS NVARCHAR(MAX)) AS [Query]
	INTO #data
	FROM       sys.tables               AS [table]
	INNER JOIN sys.foreign_keys         AS fk           ON       fk.[parent_object_id] = [table].[object_id]
	INNER JOIN sys.foreign_key_columns  AS fkc          ON              fk.[object_id] = fkc.[constraint_object_id]
	INNER JOIN sys.columns              AS colFK        ON      fkc.[parent_object_id] = colFK.[object_id]
													   AND      fkc.[parent_column_id] = colFK.[column_id]
	INNER JOIN sys.columns              AS colPK        ON  fkc.[referenced_object_id] = colPK.[object_id]
													   AND  fkc.[referenced_column_id] = colPK.[column_id]
	INNER JOIN sys.tables               AS [reftable]   ON   fk.[referenced_object_id] = [reftable].[object_id]
	WHERE [table].[name] LIKE @tableName OR [reftable].[name] LIKE @tableName

	UPDATE #data
	SET SourceTableName = TargetTableName
	  , TargetTableName = SourceTableName 
	  , SourceTableColumn = [TargetTableColumn] 
	  , [TargetTableColumn] = SourceTableColumn
	WHERE [HasMultipleMatchingValues] = 1

    DELETE FROM #data
    WHERE SourceTableName <> @tableName OR SourceTableColumn <> @columnName
    
	UPDATE #data
	SET Query = 'SELECT s.' + QUOTENAME(SourceTableColumn)
			  + ' FROM ' + QUOTENAME(SourceTableName) + ' AS s' 
			  + ' WHERE s.' + QUOTENAME(@columnName) + ' = ' + CAST(@id AS NVARCHAR(16))


	CREATE TABLE #result (TargetTableName NVARCHAR(MAX), TargetTableColumn NVARCHAR(MAX), ColumnValue INT)
  
	DECLARE @query NVARCHAR(MAX), @targetTableName NVARCHAR(128), @targetColumnName NVARCHAR(128);
	DECLARE myCursor CURSOR FOR   
		SELECT TargetTableName, TargetTableColumn, Query 
		FROM #data    
	OPEN myCursor  
  
	FETCH NEXT FROM myCursor   
	INTO @targetTableName, @targetColumnName, @query
  
	WHILE @@FETCH_STATUS = 0  
	BEGIN  

		CREATE TABLE #tmp (Id INT)
    
		PRINT @query

		INSERT INTO #tmp
		EXEC sp_executesql @query

		INSERT INTO #result (TargetTableName, TargetTableColumn, ColumnValue) 
		SELECT DISTINCT @targetTableName, @targetColumnName, #tmp.Id 
		FROM #tmp

		DROP TABLE #tmp

		FETCH NEXT FROM myCursor
	INTO @targetTableName, @targetColumnName, @query
	END
	CLOSE myCursor;  
	DEALLOCATE myCursor;  

	DROP TABLE #data

	SELECT * FROM #result

	DROP TABLE #result
		
	SET NOCOUNT OFF
	SET FMTONLY ON

END