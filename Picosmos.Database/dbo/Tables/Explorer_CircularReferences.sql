CREATE TABLE [dbo].[Explorer_CircularReferences]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [ChainId] INT NOT NULL, 
    [ChainPosition] INT NOT NULL, 
    [SourceTableName] NVARCHAR(128) NOT NULL, 
    [SourceColumnName] NVARCHAR(128) NOT NULL,
    [TargetTableName] NVARCHAR(128) NOT NULL, 
    [TargetColumnName] NVARCHAR(128) NOT NULL
)
