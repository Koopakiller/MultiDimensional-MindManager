﻿CREATE PROCEDURE [dbo].[GetUserGroups]
	@userId INT NULL = NULL
AS
BEGIN
	SELECT *
	FROM UserGroups
END