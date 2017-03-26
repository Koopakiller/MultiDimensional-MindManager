﻿/*
Deployment script for Web.Database

This code was generated by a tool.
Changes to this file may cause incorrect behavior and will be lost if
the code is regenerated.
*/

GO
SET ANSI_NULLS, ANSI_PADDING, ANSI_WARNINGS, ARITHABORT, CONCAT_NULL_YIELDS_NULL, QUOTED_IDENTIFIER ON;

SET NUMERIC_ROUNDABORT OFF;


GO
:setvar DatabaseName "Web.Database"
:setvar DefaultFilePrefix "Web.Database"
:setvar DefaultDataPath "C:\Users\tomla\AppData\Local\Microsoft\VisualStudio\SSDT"
:setvar DefaultLogPath "C:\Users\tomla\AppData\Local\Microsoft\VisualStudio\SSDT"

GO
:on error exit
GO
/*
Detect SQLCMD mode and disable script execution if SQLCMD mode is not supported.
To re-enable the script after enabling SQLCMD mode, execute the following:
SET NOEXEC OFF; 
*/
:setvar __IsSqlCmdEnabled "True"
GO
IF N'$(__IsSqlCmdEnabled)' NOT LIKE N'True'
    BEGIN
        PRINT N'SQLCMD mode must be enabled to successfully execute this script.';
        SET NOEXEC ON;
    END


GO
USE [$(DatabaseName)];


GO
/*
The type for column BirthPlaceId in table [dbo].[Humans] is currently  NVARCHAR (128) NULL but is being changed to  INT NULL. Data loss could occur.
*/

IF EXISTS (select top 1 1 from [dbo].[Humans])
    RAISERROR (N'Rows were detected. The schema update is terminating because data loss might occur.', 16, 127) WITH NOWAIT

GO
PRINT N'The following operation was generated from a refactoring log file 42de4af8-79b5-4f30-aee4-c2582c8d206a';

PRINT N'Rename [dbo].[Humans].[BirthPlace] to BirthPlaceId';


GO
EXECUTE sp_rename @objname = N'[dbo].[Humans].[BirthPlace]', @newname = N'BirthPlaceId', @objtype = N'COLUMN';


GO
PRINT N'Altering [dbo].[Humans]...';


GO
ALTER TABLE [dbo].[Humans] ALTER COLUMN [BirthPlaceId] INT NULL;


GO
PRINT N'Creating [dbo].[Places]...';


GO
CREATE TABLE [dbo].[Places] (
    [Id]          INT               IDENTITY (1, 1) NOT NULL,
    [Description] NVARCHAR (MAX)    NULL,
    [Geography]   [sys].[geography] NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);


GO
PRINT N'Creating [dbo].[FK_Humans_Places_BirthPlace]...';


GO
ALTER TABLE [dbo].[Humans] WITH NOCHECK
    ADD CONSTRAINT [FK_Humans_Places_BirthPlace] FOREIGN KEY ([BirthPlaceId]) REFERENCES [dbo].[Places] ([Id]);


GO
-- Refactoring step to update target server with deployed transaction logs
IF NOT EXISTS (SELECT OperationKey FROM [dbo].[__RefactorLog] WHERE OperationKey = '42de4af8-79b5-4f30-aee4-c2582c8d206a')
INSERT INTO [dbo].[__RefactorLog] (OperationKey) values ('42de4af8-79b5-4f30-aee4-c2582c8d206a')

GO

GO

-- HumanRelationKinds ----------------------------------------------------------

IF NOT EXISTS(SELECT * FROM [HumanRelationKinds] AS hrk WHERE hrk.[Name] = 'Mother')
BEGIN
	INSERT INTO [HumanRelationKinds] ([Name]) VALUES ('Mother')
END
IF NOT EXISTS(SELECT * FROM [HumanRelationKinds] AS hrk WHERE hrk.[Name] = 'Father')
BEGIN
	INSERT INTO [HumanRelationKinds] ([Name]) VALUES ('Father')
END
GO

GO
PRINT N'Checking existing data against newly created constraints';


GO
USE [$(DatabaseName)];


GO
ALTER TABLE [dbo].[Humans] WITH CHECK CHECK CONSTRAINT [FK_Humans_Places_BirthPlace];


GO
PRINT N'Update complete.';


GO
