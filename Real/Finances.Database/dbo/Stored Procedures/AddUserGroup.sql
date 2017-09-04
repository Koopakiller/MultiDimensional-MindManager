CREATE PROCEDURE [dbo].AddUserGroup
	@name NVARCHAR(MAX)
AS
BEGIN

	INSERT INTO UserGroups ([Name])
	VALUES (@name)

	SELECT * 
	FROM UserGroups o
	WHERE o.Id = SCOPE_IDENTITY()

END
