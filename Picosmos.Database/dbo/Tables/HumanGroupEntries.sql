CREATE TABLE [dbo].[HumanGroupEntries]
(
	[GroupId] INT NOT NULL , 
    [HumanId] INT NOT NULL, 
    PRIMARY KEY ([GroupId], [HumanId]), 
    CONSTRAINT [FK_HumanGroupEntries_HumanGroups] FOREIGN KEY ([GroupId]) REFERENCES [HumanGroups]([Id]), 
    CONSTRAINT [FK_HumanGroupEntries_Humans] FOREIGN KEY ([HumanId]) REFERENCES [Humans]([Id])
)
