CREATE TABLE [dbo].[HumanRelations]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [RelationKindId] INT NOT NULL, 
    [HumanId] INT NOT NULL, 
    [RelatedHumanId] INT NOT NULL, 
    CONSTRAINT [FK_HumanRelations_HumanRelationKinds] FOREIGN KEY ([RelationKindId]) REFERENCES [HumanRelationKinds]([Id]), 
    CONSTRAINT [FK_HumanRelations_Humans] FOREIGN KEY ([HumanId]) REFERENCES [Humans]([Id]), 
    CONSTRAINT [FK_HumanRelations_Humans_Related] FOREIGN KEY ([RelatedHumanId]) REFERENCES [Humans]([Id])
)
