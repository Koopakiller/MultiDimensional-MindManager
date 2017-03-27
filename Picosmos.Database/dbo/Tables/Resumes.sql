CREATE TABLE [dbo].[Resumes]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY,
    [Description] NVARCHAR(MAX) NULL,
    [StartDateTime] DATETIME NULL, 
    [EndDateTime] DATETIME NULL, 
    [ResumeKindId] INT NOT NULL, 
    [ParentId] INT NULL, 
    CONSTRAINT [FK_ResumeEntries_ResumeEntryKinds] FOREIGN KEY ([ResumeKindId]) REFERENCES [ResumeKinds]([Id]), 
    CONSTRAINT [FK_ResumeEntries_ResumeEntries_Parent] FOREIGN KEY ([ParentId]) REFERENCES [Resumes]([Id]), 
)
