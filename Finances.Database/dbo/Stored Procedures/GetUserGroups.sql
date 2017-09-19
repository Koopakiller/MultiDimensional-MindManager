CREATE PROCEDURE [dbo].[GetUserGroups]
    @userId INT NULL = NULL
AS
BEGIN
    SELECT *
    FROM UserGroups ug
    WHERE @userId IS NULL OR EXISTS(SELECT * 
                                    FROM UserGroupUsers ugu 
                                    WHERE ugu.UserId = @userId AND ugu.UserGroupId = ug.Id)
END