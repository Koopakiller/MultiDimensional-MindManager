CREATE PROCEDURE [dbo].[GetUsersFromUserGroup]
	@userGroupId INT
AS
BEGIN

	SELECT *
	FROM Users u
	INNER JOIN UserGroupUsers ugu ON ugu.UserId = u.Id
	WHERE ugu.UserGroupId = @userGroupId

END