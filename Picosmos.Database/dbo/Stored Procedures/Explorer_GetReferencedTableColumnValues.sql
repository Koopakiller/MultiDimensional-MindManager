CREATE PROCEDURE [dbo].[Explorer_GetReferencedTableColumnValues.sql]
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
		 , CAST((CASE WHEN [table].[name] = @tableName AND colFK.[name] = @columnName THEN 0 ELSE 1 END) AS BIT) 
									 AS [HasMultipleMatchingValues]
	INTO #data
	FROM       sys.tables               AS [table]
	INNER JOIN sys.foreign_keys         AS fk           ON       fk.[parent_object_id] = [table].[object_id]
	INNER JOIN sys.foreign_key_columns  AS fkc          ON              fk.[object_id] = fkc.[constraint_object_id]
	INNER JOIN sys.columns              AS colFK        ON      fkc.[parent_object_id] = colFK.[object_id]
													   AND      fkc.[parent_column_id] = colFK.[column_id]
	INNER JOIN sys.columns              AS colPK        ON  fkc.[referenced_object_id] = colPK.[object_id]
													   AND  fkc.[referenced_column_id] = colPK.[column_id]
	INNER JOIN sys.tables               AS [reftable]   ON   fk.[referenced_object_id] = [reftable].[object_id]
	WHERE [table].[name] = @tableName OR [reftable].[name] = @tableName

	UPDATE #data
	SET SourceTableName = TargetTableName
	  , TargetTableName = SourceTableName 
	  , SourceTableColumn = [TargetTableColumn] 
	  , [TargetTableColumn] = SourceTableColumn
	WHERE [HasMultipleMatchingValues] = 1
    
    SELECT d.TargetTableName AS [TableName]
         , d.TargetTableColumn AS [ColumnName]
         , @id AS [ColumnValue]
    FROM #data AS d
    WHERE NOT ((SourceTableName <> @tableName OR SourceTableColumn <> @columnName)
           AND (TargetTableName <> @tableName OR TargetTableColumn <> @columnName))
    
	DROP TABLE #data
		
	SET NOCOUNT OFF
	SET FMTONLY ON

END