CREATE PROCEDURE [dbo].[Explorer_GetTablesAndColumns]
AS
	SELECT [table].[name] AS [TableName], [column].[name] AS [ColumnName]
	FROM sys.tables AS [table]
	INNER JOIN sys.columns AS [column] ON [column].[object_id] = [table].[object_id]
	WHERE TYPE_NAME([column].system_type_id) LIKE 'INT'
	ORDER BY [TableName], [ColumnName]
RETURN 0
