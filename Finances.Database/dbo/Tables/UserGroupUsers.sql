CREATE TABLE [dbo].[UserGroupUsers]
( 
    [UserGroupId] INT NOT NULL, 
    [UserId] INT NOT NULL, 
    [UserPersonId] INT NULL, 
    PRIMARY KEY ([UserId], [UserGroupId])
)
GO

ALTER TABLE [dbo].[UserGroupUsers]  ADD  CONSTRAINT [FK_UserGroupsUsers_Users] FOREIGN KEY([UserGroupId])
REFERENCES [dbo].[UserGroups] ([Id])
GO
ALTER TABLE [dbo].[UserGroupUsers] CHECK CONSTRAINT [FK_UserGroupsUsers_Users]
GO

ALTER TABLE [dbo].[UserGroupUsers]  ADD  CONSTRAINT [FK_UserGroupsUsers_UserGroups] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[UserGroupUsers] CHECK CONSTRAINT [FK_UserGroupsUsers_UserGroups]
GO

ALTER TABLE [dbo].[UserGroupUsers]  ADD  CONSTRAINT [FK_UserGroupsUsers_Persons] FOREIGN KEY([UserPersonId])
REFERENCES [dbo].[Persons] ([Id])
GO
ALTER TABLE [dbo].[UserGroupUsers] CHECK CONSTRAINT [FK_UserGroupsUsers_Persons]
GO

CREATE TRIGGER [dbo].[UserGroupUsers_UserPersonId_Trigger]
ON UserGroupUsers
AFTER INSERT, UPDATE
AS
BEGIN
	IF NOT EXISTS(SELECT * 
				  FROM inserted i 
				  WHERE EXISTS(SELECT * 
							   FROM Persons p 
							   WHERE i.UserPersonId = p.Id AND i.UserGroupId = p.UserGroupId))
	BEGIN
		RAISERROR('UserGroupUsers.UserPersonId must reference a Person with Person.UserGroup = UserGroupUsers.UserGroupId', 16, 1)
	END
END
GO