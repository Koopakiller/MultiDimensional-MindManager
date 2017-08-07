CREATE PROCEDURE [dbo].[AddPerson]
	@name NVARCHAR(MAX),
	@userId INT
AS
BEGIN
	INSERT INTO Persons ([Name], UserId)
	VALUES (@name, @userId)

	SELECT p.*
	FROM Persons p
	WHERE p.Id = SCOPE_IDENTITY()
END