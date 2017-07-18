CREATE TABLE [dbo].[CurrencySymbols]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [Symbol] NVARCHAR(MAX) NOT NULL, 
    [CurrencyId] INT NOT NULL
)
