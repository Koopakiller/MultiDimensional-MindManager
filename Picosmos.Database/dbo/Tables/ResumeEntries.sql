CREATE TABLE [dbo].[ResumeEntries]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [StartDateTime] DATETIME NULL, 
    [EndDateTime] DATETIME NULL, 
    [ResumeEntryKindId] INT NOT NULL, 
    [Description] NVARCHAR(MAX) NULL, 
    [ParentEntryId] INT NULL, 
    CONSTRAINT [FK_ResumeEntries_ResumeEntryKinds] FOREIGN KEY ([ResumeEntryKindId]) REFERENCES [ResumeEntryKinds]([Id]), 
    CONSTRAINT [FK_ResumeEntries_ResumeEntries_Parent] FOREIGN KEY ([ParentEntryId]) REFERENCES [ResumeEntries]([Id]), 
 )
