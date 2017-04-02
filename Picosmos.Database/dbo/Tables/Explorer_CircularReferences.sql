CREATE TABLE [dbo].[Explorer_CircularReferences]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [ChainId] INT NOT NULL, 
    [ChainPosition] INT NOT NULL, 
    [TableName] NVARCHAR(128) NOT NULL, 
    [ColumnName] NVARCHAR(128) NOT NULL
)
