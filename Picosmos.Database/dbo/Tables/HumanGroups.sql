CREATE TABLE [dbo].[HumanGroups]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [Description] NVARCHAR(MAX) NOT NULL, 
    [IsComplete] BIT NOT NULL 
)
