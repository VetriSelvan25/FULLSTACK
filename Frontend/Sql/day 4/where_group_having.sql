create database day_4;
use day_4;
CREATE TABLE employees (
    emp_id INT PRIMARY KEY AUTO_INCREMENT,
    emp_name VARCHAR(50),
    department VARCHAR(50),
    salary INT
);
INSERT INTO employees (emp_name, department, salary)
VALUES
('Arun', 'IT', 35000),
('Banu', 'HR', 25000),
('Karthik', 'IT', 45000),
('Divya', 'HR', 40000),
('Ravi', 'Sales', 30000),
('Priya', 'IT', 28000),
('Vijay', 'Sales', 50000),
('Ram', 'IT', 55000);

-- TASK 1
select * from employees where department ="IT" and salary > 30000;

-- TASK 3
select department ,count(department) from employees group by department;

-- TASK 5 
select department, avg(salary) as avg_salary from employees where salary>25000 group by department having avg(salary) >40000;
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    age INT,
    city VARCHAR(50)
);

INSERT INTO students (name, age, city)
VALUES
('Arun', 20, 'Chennai'),
('Bala', 17, 'Madurai'),
('Karthik', 22, 'Madurai'),
('Divya', 24, 'Chennai'),
('Priya', 19, 'Coimbatore'),
('Ravi', 25, 'Madurai'),
('Meena', 26, 'Chennai'),
('Kumar', 21, 'Salem'),
('Ram', 18, 'Chennai'),
('Vijay', 23, 'Madurai');

-- TASK 2
select * from students where age between 18 and 25 and (city ="Chennai" or city= "Madurai"); 


CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(50),
    category VARCHAR(50),
    stock INT,
    price DECIMAL(10,2)
);

INSERT INTO products (product_name, category, stock, price)
VALUES
('Laptop', 'Electronics', 10, 45000),
('Mobile', 'Electronics', 20, 15000),
('Headphones', 'Electronics', 15, 2000),
('Shirt', 'Clothing', 30, 800),
('Jeans', 'Clothing', 25, 1200),
('T-Shirt', 'Clothing', 40, 500),
('Rice', 'Grocery', 50, 60),
('Wheat', 'Grocery', 35, 45),
('Sugar', 'Grocery', 20, 50),
('Watch', 'Accessories', 12, 2500);

-- TASK 4 

select category,sum(stock) as total_stock ,avg(price) from products group by category;