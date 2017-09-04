CREATE PROCEDURE [dbo].[GetPersons]
(
	@userId INT NULL = NULL
)
AS
BEGIN
	SELECT p.Id AS [Id]
	     , p.[Name] as [Name]
	FROM Persons p
	WHERE @userId IS NULL OR @userId = p.UserId
END
