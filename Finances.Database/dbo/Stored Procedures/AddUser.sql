CREATE PROCEDURE [dbo].[AddUser]
	@name NVARCHAR(MAX),
	@email NVARCHAR(MAX),
	@phone NVARCHAR(20)
AS
BEGIN

    INSERT INTO Users (Name, Email, Phone)
    VALUES (@name, @email, @phone)

    SELECT * 
    FROM Users u
    WHERE u.Id = SCOPE_IDENTITY()

END