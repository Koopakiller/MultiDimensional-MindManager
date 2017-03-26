CREATE TABLE [dbo].[Humans]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [BirthPlaceId] INT NULL, 
    [BirthDateTime] DATETIME NULL, 
    [PersonId] INT NOT NULL, 
    [ResumeId] INT NULL, 
    CONSTRAINT [FK_Humans_Persons] FOREIGN KEY ([PersonId]) REFERENCES [Persons]([Id]), 
    CONSTRAINT [FK_Humans_Places_BirthPlace] FOREIGN KEY ([BirthPlaceId]) REFERENCES [Places]([Id]), 
    CONSTRAINT [FK_Humans_Resume] FOREIGN KEY ([ResumeId]) REFERENCES [Resumes]([Id])
)
