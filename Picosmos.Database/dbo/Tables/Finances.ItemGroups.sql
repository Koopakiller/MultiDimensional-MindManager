CREATE TABLE [dbo].[Finances.ItemGroups]
(
	[GroupId] INT NOT NULL, 
    [ItemId] INT NOT NULL
    CONSTRAINT [FK_Finances.ItemGroups_Groups] FOREIGN KEY ([GroupId]) REFERENCES [Finances.Groups]([Id])
    CONSTRAINT [FK_Finances.ItemGroups_Items] FOREIGN KEY ([ItemId]) REFERENCES [Finances.Items]([Id])
    PRIMARY KEY ([ItemId], [GroupId])
)
