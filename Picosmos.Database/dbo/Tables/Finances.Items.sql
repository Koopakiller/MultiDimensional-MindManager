CREATE TABLE [Finances.Items]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [UserId] INT NOT NULL, 
    [PersonId] INT NOT NULL,
    [DateTime] DATETIME NOT NULL, 
    [CurrencyId] INT NOT NULL, 
    [Value] DECIMAL(18, 2) NOT NULL, 
    [Note] NVARCHAR(MAX) NOT NULL, 
    [IsDebt] BIT NOT NULL DEFAULT 0 
    CONSTRAINT [FK_Finances.Items_Users] FOREIGN KEY ([UserId]) REFERENCES [Users]([Id])
    CONSTRAINT [FK_Finances.Items_Persons] FOREIGN KEY ([PersonId]) REFERENCES [Persons]([Id])
    CONSTRAINT [FK_Finances.Items_Finances.Currencies] FOREIGN KEY ([CurrencyId]) REFERENCES [Finances.Currencies]([Id])
)
