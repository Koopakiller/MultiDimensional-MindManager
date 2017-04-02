CREATE PROCEDURE [dbo].[Explorer_GetAssociatedDataSets]
	@tableName NVARCHAR(128),
	@columnName NVARCHAR(128),
	@id INT
AS
BEGIN
	SET NOCOUNT ON
	SET FMTONLY OFF

	DECLARE @query NVARCHAR(MAX) 
		= 'SELECT s.* '
		+ 'FROM ' + QUOTENAME(@tableName) + ' AS s '
		+ 'WHERE ' + @columnName + ' = ' + CAST(@id AS NVARCHAR(16));

	EXEC sp_executesql @query
		
	SET NOCOUNT OFF
	SET FMTONLY ON
END
