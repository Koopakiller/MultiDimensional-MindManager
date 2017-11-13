select p.Id, p.Name, SUM(t.Value) AS [Debt]
from Transactions t
INNER JOIN Persons p ON p.Id = t.PersonId
where IsDebt=1
Group by p.Name, p.Id
HAVING SUM(t.Value) <> 0
order by [Debt]

-- not tested for multiple Accounts