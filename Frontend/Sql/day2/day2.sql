create database warehouse;
use warehouse;
create table warehouse_table(
id int primary key auto_increment,
warehousenName varchar(30) not null ,
warehouseBarcode varchar(30) unique,
warehouseLocation varchar(20) ,
warehouseArea varchar(30) ,
isActive boolean default true,
warehouseCreatedby varchar(20) default "Admin",
warehouseCreateddate date ,
warehouseCrearedat datetime,
warehouseUpdatedby varchar(20),
warehouseupdatedat timestamp default current_timestamp
);
use warehouse;
create table product_table(
id int primary key auto_increment,
productName varchar(30) not null ,
productquantity int not null,
productPrice varchar(20) ,
productCategory varchar(30) ,
product_tableproductBarcode varchar(30) unique,
productAdddate date,
isActive boolean default true,
productCreatedby varchar(20) default "Admin",
productCreateddate date ,
productCrearedat datetime,
productUpdatedby varchar(20),
productupdatedat timestamp default current_timestamp
);
