CREATE PROCEDURE [dbo].[Explorer_GetTableColumns]
    @tableName NVARCHAR(128)='Humans'
AS
BEGIN

    SET NOCOUNT ON
    SET FMTONLY OFF

    SELECT [column].name                      AS [ColumnName]
         , TYPE_NAME([column].system_type_id) AS [ColumnType]
         , CAST(CASE WHEN(EXISTS(SELECT * 
                            FROM sys.foreign_keys AS fk 
                               , sys.foreign_key_columns AS fkc 
                            WHERE fk.[object_id] = fkc.[constraint_object_id]
                              AND fkc.[parent_object_id] = [column].[object_id]
                              AND fkc.[parent_column_id] = [column].[column_id]))
            THEN 1
            ELSE 0
           END AS BIT) AS [IsParent]
         , CAST(CASE WHEN(EXISTS(SELECT * 
                            FROM sys.foreign_keys AS fk 
                               , sys.foreign_key_columns AS fkc 
                            WHERE fk.[object_id] = fkc.[constraint_object_id]
                              AND fkc.[referenced_object_id] = [column].[object_id]
                              AND fkc.[referenced_column_id] = [column].[column_id]))
            THEN 1
            ELSE 0
           END AS BIT) AS [IsChild]
         , [column].column_id AS [OrdinalPosition]
    FROM            sys.tables              AS [table]
    INNER JOIN      sys.columns             AS [column] ON        [column].[object_id] = [table].[object_id]
    WHERE [table].[name] = @tableName
	ORDER BY [column].column_id
            
    SET NOCOUNT OFF
    SET FMTONLY ON

END