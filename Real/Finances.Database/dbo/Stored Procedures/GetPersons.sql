CREATE PROCEDURE [dbo].[GetPersons]
AS
BEGIN
	SELECT p.Id AS [Id]
	     , p.[Name] as [Name]
	FROM Persons p
END
