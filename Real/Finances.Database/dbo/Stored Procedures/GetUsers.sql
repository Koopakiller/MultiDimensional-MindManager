CREATE PROCEDURE [dbo].[GetUsers]
AS
BEGIN
    SELECT u.Id AS [Id]
         , p.[Name] as [Name]
    FROM Users u
    INNER JOIN Persons p ON p.Id = u.PersonId
END
