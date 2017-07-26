CREATE TABLE [dbo].[RawDataEntries]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [Key] NVARCHAR(MAX) NOT NULL, 
    [Value] NVARCHAR(MAX) NOT NULL, 
    [RawDataId] INT NOT NULL
)
GO
ALTER TABLE [dbo].[RawDataEntries]  ADD  CONSTRAINT [FK_RawDataEntries_RawData] FOREIGN KEY([RawDataId])
REFERENCES [dbo].[RawData] ([Id])
GO
ALTER TABLE [dbo].[RawDataEntries] CHECK CONSTRAINT [FK_RawDataEntries_RawData]
GO
