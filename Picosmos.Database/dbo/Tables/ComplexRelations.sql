CREATE TABLE [dbo].[ComplexRelations]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [Name] NVARCHAR(128) NOT NULL, 
    [SourceTableName] NVARCHAR(128) NOT NULL, 
    [TargetTableName] NVARCHAR(128) NOT NULL, 
    [RelationDescriptor] NVARCHAR(1024) NOT NULL
)
