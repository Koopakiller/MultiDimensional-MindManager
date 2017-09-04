CREATE PROCEDURE [dbo].[GetUsers]
AS
BEGIN
    SELECT u.Id AS [Id]
         , u.[Name] as [Name]
    FROM Users u
END
