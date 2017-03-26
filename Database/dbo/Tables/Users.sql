CREATE TABLE [dbo].[Users]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [PersonId] INT NOT NULL, 
    CONSTRAINT [FK_Users_Persons] FOREIGN KEY ([PersonId]) REFERENCES [Persons]([Id])
)
