CREATE PROCEDURE [dbo].[AddPerson]
	@name NVARCHAR(MAX),
	@userId INT
AS
BEGIN
	INSERT INTO Persons ([Name], UserId)
	VALUES (@name, @userId)
END