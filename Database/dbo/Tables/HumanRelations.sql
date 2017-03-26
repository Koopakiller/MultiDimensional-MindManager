CREATE TABLE [dbo].[HumanRelations]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [RelationKind] INT NOT NULL, 
    [PersonId] INT NOT NULL, 
    [RelatedPersonId] INT NOT NULL, 
    CONSTRAINT [FK_HumanRelations_HumanRelationKinds] FOREIGN KEY ([RelationKind]) REFERENCES [HumanRelationKinds]([Id]), 
    CONSTRAINT [FK_HumanRelations_Persons] FOREIGN KEY ([PersonId]) REFERENCES [Persons]([Id]), 
    CONSTRAINT [FK_HumanRelations_Persons_Related] FOREIGN KEY ([RelatedPersonId]) REFERENCES [Persons]([Id])
)
