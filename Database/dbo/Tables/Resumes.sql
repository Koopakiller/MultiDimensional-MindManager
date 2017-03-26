CREATE TABLE [dbo].[Resumes]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY,
    [TopLevelEntryId] INT NOT NULL, 
    [Description] NVARCHAR(MAX) NULL, 
    CONSTRAINT [FK_Resumes_ResumeEntries] FOREIGN KEY ([TopLevelEntryId]) REFERENCES [ResumeEntries]([Id]), 
)
