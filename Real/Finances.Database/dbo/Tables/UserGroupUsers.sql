CREATE TABLE [dbo].[UserGroupUsers]
( 
    [UserGroupId] INT NOT NULL, 
    [UserId] INT NOT NULL, 
    PRIMARY KEY ([UserId], [UserGroupId])
)
GO
ALTER TABLE [dbo].[UserGroupUsers]  ADD  CONSTRAINT [FK_UserGroupsUsers_Users] FOREIGN KEY([UserId])
REFERENCES [dbo].[UserGroups] ([Id])
GO
ALTER TABLE [dbo].[UserGroupUsers] CHECK CONSTRAINT [FK_UserGroupsUsers_Users]
GO
ALTER TABLE [dbo].[UserGroupUsers]  ADD  CONSTRAINT [FK_UserGroupsUsers_UserGroups] FOREIGN KEY([UserGroupId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[UserGroupUsers] CHECK CONSTRAINT [FK_UserGroupsUsers_UserGroups]
GO
