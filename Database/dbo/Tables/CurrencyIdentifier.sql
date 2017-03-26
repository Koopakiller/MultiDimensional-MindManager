CREATE TABLE [dbo].[CurrencyIdentifier]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [CurrencyId] INT NOT NULL, 
    [Identifier] NVARCHAR(128) NOT NULL, 
    CONSTRAINT [FK_CurrencyIdentifier_Currencies] FOREIGN KEY ([CurrencyId]) REFERENCES [Currencies]([Id])
)
