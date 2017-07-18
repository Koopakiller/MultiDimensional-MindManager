CREATE TABLE [dbo].[Transactions]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [UserId] INT NOT NULL, 
    [PersonId] INT NOT NULL, 
    [CurrencyId] INT NOT NULL, 
    [Value] DECIMAL(18, 2) NOT NULL, 
    [Timestamp] DATETIME NOT NULL, 
    [AccountId] INT NOT NULL
)
