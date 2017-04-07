CREATE TABLE [Finances.TransactionItems]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [UserId] INT NOT NULL, 
    [PersonId] INT NOT NULL,
    [DateTime] DATETIME NOT NULL, 
    [CurrencyId] INT NOT NULL
    CONSTRAINT [FK_Finances.TransactionItems_Users] FOREIGN KEY ([UserId]) REFERENCES [Users]([Id])
    CONSTRAINT [FK_Finances.TransactionItems_Persons] FOREIGN KEY ([PersonId]) REFERENCES [Persons]([Id])
    CONSTRAINT [FK_Finances.TransactionItems_Finances.Currencies] FOREIGN KEY ([CurrencyId]) REFERENCES [Finances.Currencies]([Id]), 
    [Value] DECIMAL(18, 2) NOT NULL, 
    [Note] NVARCHAR(128) NOT NULL, 
    [IsDebt] BIT NOT NULL DEFAULT 0 
)
