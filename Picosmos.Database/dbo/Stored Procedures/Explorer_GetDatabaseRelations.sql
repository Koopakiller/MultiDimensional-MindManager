CREATE PROCEDURE [dbo].[Explorer_GetDatabaseRelations]
AS
BEGIN
	SET NOCOUNT ON
	SET FMTONLY OFF

    SELECT [table].[name]            AS [SourceTableName]
		    , colFK.[name]              AS [SourceColumnName]
		    , [reftable].[name]         AS [TargetTableName]
		    , colPK.[name]              AS [TargetColumnName]
    INTO #data
    FROM       sys.tables               AS [table]
    INNER JOIN sys.foreign_keys         AS fk           ON       fk.[parent_object_id] = [table].[object_id]
    INNER JOIN sys.foreign_key_columns  AS fkc          ON              fk.[object_id] = fkc.[constraint_object_id]
    INNER JOIN sys.columns              AS colFK        ON      fkc.[parent_object_id] = colFK.[object_id]
													    AND      fkc.[parent_column_id] = colFK.[column_id]
    INNER JOIN sys.columns              AS colPK        ON  fkc.[referenced_object_id] = colPK.[object_id]
													    AND  fkc.[referenced_column_id] = colPK.[column_id]
    INNER JOIN sys.tables               AS [reftable]   ON   fk.[referenced_object_id] = [reftable].[object_id];

    SELECT d.[TargetTableName]  AS [TargetTableName]
         , d.[TargetColumnName] AS [TargetColumnName]
         , d.[SourceTableName]  AS [SourceTableName]
         , d.[SourceColumnName] AS [SourceColumnName]
    FROM #data AS d
    UNION ALL
    SELECT d.[SourceTableName]  AS [TargetTableName]
         , d.[SourceColumnName] AS [TargetColumnName]
         , d.[TargetTableName]  AS [SourceTableName]
         , d.[TargetColumnName] AS [SourceColumnName]
    FROM #data AS d;


    DROP TABLE #data

	SET NOCOUNT OFF
	SET FMTONLY ON
END