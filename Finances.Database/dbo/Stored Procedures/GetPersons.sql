CREATE PROCEDURE [dbo].[GetPersons]
(
    @userGroupId INT NULL = NULL
)
AS
BEGIN
    SELECT p.Id AS [Id]
         , p.[Name] as [Name]
    FROM Persons p
    WHERE @userGroupId IS NULL OR @userGroupId = p.UserGroupId
END
