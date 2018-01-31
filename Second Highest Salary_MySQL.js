// Write a SQL query to get the second highest salary from the Employee table.

// +----+--------+
// | Id | Salary |
// +----+--------+
// | 1  | 100    |
// | 2  | 200    |
// | 3  | 300    |
// +----+--------+
// For example, given the above Employee table, the query should return 200 as the second highest salary. If there is no second highest salary, then the query should return null.

// +---------------------+
// | SecondHighestSalary |
// +---------------------+
// | 200                 |
// +---------------------+


// # Write your MySQL query statement below

// # Create table If Not Exists Employee (Id int, Salary int)
// # Truncate table Employee
// # insert into Employee (Id, Salary) values ('1', '100')
// # insert into Employee (Id, Salary) values ('2', '200')
// # insert into Employee (Id, Salary) values ('3', '300')

SELECT (SELECT DISTINCT Salary FROM Employee ORDER BY Employee.Salary DESC LIMIT 1, 1) SecondHighestSalary;


