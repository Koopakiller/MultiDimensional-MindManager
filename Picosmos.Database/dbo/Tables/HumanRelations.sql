CREATE TABLE [dbo].[HumanRelations]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [RelationKind] INT NOT NULL, 
    [PersonId] INT NOT NULL, 
    [RelatedHumanId] INT NOT NULL, 
    CONSTRAINT [FK_HumanRelations_HumanRelationKinds] FOREIGN KEY ([RelationKind]) REFERENCES [HumanRelationKinds]([Id]), 
    CONSTRAINT [FK_HumanRelations_Humans] FOREIGN KEY ([PersonId]) REFERENCES [Humans]([Id]), 
    CONSTRAINT [FK_HumanRelations_Humans_Related] FOREIGN KEY ([RelatedHumanId]) REFERENCES [Humans]([Id])
)
