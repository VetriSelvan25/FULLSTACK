create database college_db;
use college_db;
-- Task1
create table students (
studentId int primary key auto_increment,
student_name varchar(25) not null,
student_age int ,
student_email varchar(25) unique,
student_course varchar(25) not null,
student_fees varchar(25) not null,
student_admission date default '2026-08-20'
);

rename table students to student_details;
alter table student_details add mobile_number int after student_email;

-- Task 2
create table employees(
id int primary key auto_increment,
name varchar(25) not null,
salary varchar(25) check (salary>0),
dept varchar(25) not null,
joiningdate date default '2026-11-11',
city varchar(25)
);
alter table employees rename column name to employee_name;
alter table employees modify salary decimal(12,2);
ALTER TABLE employees add email varchar(25) after employee_name;

-- Task 3
create table products (

id int primary key auto_increment,
name varchar(25) unique,
price int(5) CHECK (price>0),
category varchar(25) ,
stock varchar(25) not null,
manufacturing_date date default '2020-12-12'
);

rename table products to product_details;
ALTER TABLE product_details DROP CHECK product_details_chk_1;
alter table product_details rename column price to product_price; 


ALTER TABLE product_details
ADD CONSTRAINT chk_product_price CHECK (product_price > 0);

ALTER TABLE product_details
DROP COLUMN manufacturing_date;

SHOW CREATE TABLE product_details;

-- Task 6
create table customers (
id int primary key auto_increment,
name varchar(25) not null,
email varchar(25) unique not null,
city varchar(25) not null ,
age int ,
reg_date date 
);
insert into customers 
(id,name,email,city,age,reg_date) values(1,'vetri','vetri@gmail.com','krishnagiri',24,'2026-12-10'),
(23, 'Priya', 'Python@gmail.com','Madurai',24, '2026-11-10'),
(21, 'Kavin', 'Java@gmail.com', 'Chennai',24, '2026-11-09'),
(24,'Divya', 'React@gmail.com',  'Coimbatore',24, '2026-11-08'),
( 22,'Mukund', 'MERN@gmail.com','Salem',24, '2026-11-07');

insert into customers
(id,name,email,city,age,reg_date) values (2,'sona','sona@gmail.com','namakkal',22,'2026-12-12'),
(3,'uma','uma@gmail.com','namakkal',40,'2026-12-12');
insert into customers
(name,city,email) values ('daya','krishnagiri','daya@gmail.com');

-- Task 7

create table staff (
staff_id int primary key auto_increment,
name varchar(25) not null,
dept varchar(25) ,
salary int ,
city varchar(25) 
);

insert into staff  values(1,'Mukund','HR',50000,'CHennai'),
(2, 'Arun', 'Developer', 45000, 'Bangalore'),
(3, 'Priya', 'Tester', 35000, 'Coimbatore'),
(4, 'Karthik', 'Manager', 65000, 'Salem'),
(5, 'Divya', 'HR', 40000, 'Madurai'),
(6, 'Rahul', 'Developer', 55000, 'Hyderabad'),
(7, 'Sneha', 'Designer', 38000, 'Trichy');


update staff set salary = 45000 where  staff_id=3;
update staff set dept="IT" where staff_id=5;
update staff set salary= salary+5000 where dept="HR";
update staff set city="Chennai" where salary>30000;

-- Task 8
create table orders(
id int primary key auto_increment,
customer_name varchar(25) not null,
product_name varchar(25) not null,
quantity int ,
price int ,
order_date date 

);

INSERT INTO orders (id, customer_name, product_name, quantity, price, order_date)
VALUES
(1, 'Mukund', 'Laptop', 2, 55000, '2026-01-10'),
(2, 'Arun', 'Mobile', 1, 25000, '2026-01-12'),
(3, 'Priya', 'Keyboard', 3, 1500, '2026-01-15'),
(4, 'Karthik', 'Mouse', 2, 800, '2026-01-18'),
(5, 'Divya', 'Monitor', 1, 12000, '2026-01-20'),
(6, 'Rahul', 'Headphones', 2, 2500, '2026-01-22'),
(7, 'Sneha', 'Tablet', 1, 18000, '2026-01-25'),
(8, 'Vijay', 'Printer', 1, 8500, '2026-01-28'),
(9, 'Naveen', 'USB Drive', 5, 600, '2026-02-01'),
(10, 'Deepa', 'Smart Watch', 2, 4500, '2026-02-05');

delete from orders where id=4;
delete from orders where quantity <2 and price <500 ;
delete from orders where quantity <5 ;
-- Task 9
create database library_db;
use library_db;

create table books(
id int primary key unique,
name varchar(25) not null,
author varchar(25) not null,
price int ,
published_date date
);

insert into books (id, name, author, price, published_date)
VALUES
(1, 'Wings of Fire', 'APJ Abdul Kalam', 350, '1999-01-01'),
(2, 'The Alchemist', 'Paulo Coelho', 450, '1988-01-01'),
(3, 'Ponniyin Selvan', 'Kalki Krishnamurthy', 600, '1950-10-29'),
(4, 'Atomic Habits', 'James Clear', 550, '2018-10-16'),
(5, 'Rich Dad Poor Dad', 'Robert Kiyosaki', 400, '1997-04-08');

truncate table books;

-- Task 10
create database company_db;
use company_db;

create table departments(
id int primary key unique,
dept_name varchar(25)


);
create table employees(
id int primary key unique,
name varchar(25) not null
);

insert into departments(id,dept_name) values(1,'Java'),(2,'Python');
insert into employees (id,name) values (1,'Arun'),(2,'kumar');

drop table departments;
show tables;
drop database company_db;

show databases;
show databases like 'company_db';


