CREATE PROCEDURE [dbo].[AddPerson]
    @name NVARCHAR(MAX),
    @userGroupId INT
AS
BEGIN
    INSERT INTO Persons ([Name], UserGroupId)
    VALUES (@name, @userGroupId)

    SELECT p.*
    FROM Persons p
    WHERE p.Id = SCOPE_IDENTITY()
END