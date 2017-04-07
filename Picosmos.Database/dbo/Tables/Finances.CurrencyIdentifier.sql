CREATE TABLE [dbo].[Finances.CurrencyIdentifier]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [CurrencyId] INT NOT NULL, 
    [Identifier] NVARCHAR(128) NOT NULL, 
    CONSTRAINT [FK_Finances.CurrencyIdentifier_Finances.Currencies] FOREIGN KEY ([CurrencyId]) REFERENCES [Finances.Currencies]([Id])
)
