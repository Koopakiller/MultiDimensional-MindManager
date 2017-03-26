CREATE TABLE [dbo].[Places]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [Description] NVARCHAR(MAX) NULL, 
    [Geography] GEOGRAPHY NULL
)
