ALTER TABLE [dbo].[Accounts]  WITH CHECK ADD  CONSTRAINT [FK_Accounts_Users] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[Accounts] CHECK CONSTRAINT [FK_Accounts_Users]
GO

ALTER TABLE [dbo].[CurrencySymbols]  WITH CHECK ADD  CONSTRAINT [FK_CurrencySymbols_Currencies] FOREIGN KEY([CurrencyId])
REFERENCES [dbo].[Currencies] ([Id])
GO
ALTER TABLE [dbo].[CurrencySymbols] CHECK CONSTRAINT [FK_CurrencySymbols_Currencies]
GO

ALTER TABLE [dbo].[Transactions]  WITH CHECK ADD  CONSTRAINT [FK_Transactions_Accounts] FOREIGN KEY([AccountId])
REFERENCES [dbo].[Accounts] ([Id])
GO
ALTER TABLE [dbo].[Transactions] CHECK CONSTRAINT [FK_Transactions_Accounts]
GO

ALTER TABLE [dbo].[Transactions]  WITH CHECK ADD  CONSTRAINT [FK_Transactions_Currencies] FOREIGN KEY([CurrencyId])
REFERENCES [dbo].[Currencies] ([Id])
GO
ALTER TABLE [dbo].[Transactions] CHECK CONSTRAINT [FK_Transactions_Currencies]
GO

ALTER TABLE [dbo].[Transactions]  WITH CHECK ADD  CONSTRAINT [FK_Transactions_Persons] FOREIGN KEY([PersonId])
REFERENCES [dbo].[Persons] ([Id])
GO
ALTER TABLE [dbo].[Transactions] CHECK CONSTRAINT [FK_Transactions_Persons]
GO

ALTER TABLE [dbo].[Transactions]  WITH CHECK ADD  CONSTRAINT [FK_Transactions_Users] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[Transactions] CHECK CONSTRAINT [FK_Transactions_Users]
GO

ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [FK_Users_Persons] FOREIGN KEY([PersonId])
REFERENCES [dbo].[Persons] ([Id])
GO
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [FK_Users_Persons]
GO
