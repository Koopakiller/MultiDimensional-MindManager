CREATE PROCEDURE [dbo].[AddUserToUserGroup]
	@userGroupId INT,
	@userId INT
AS
BEGIN
	
	IF NOT EXISTS(SELECT * FROM UserGroupUsers ugu WHERE ugu.UserGroupId = @userGroupId AND ugu.UserId = @userId)
	BEGIN
		INSERT INTO UserGroupUsers(UserGroupId, UserId)
		VALUES (@userGroupId, @userId)
	END

END