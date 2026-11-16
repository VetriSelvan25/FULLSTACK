create database normal_db;
use normal_db;
create table patients(
 p_id int auto_increment,
 p_name varchar(25),
 p_age int,
primary key (p_id)
);

create table staffs(
st_id int auto_increment,
st_name varchar(25),
st_skill varchar(25),
primary key(st_id)
);

insert into staffs values(1,"Pugazh","diarrhoea"),(2,"dhanush","fever"),(3,"Mukund","Fever");

create table disease(
dis_id int auto_increment,
dis_type varchar(25),
dis_doctor_name varchar(25),

primary key(dis_id)
);

create table enrollment(
e_id int auto_increment,
p_id int ,
st_id int,
dis_id int,

primary key(e_id),

foreign key (p_id) references patients (p_id),
foreign key (st_id) references staffs (st_id),
foreign key (dis_id) references disease (dis_id)
);
insert into enrollment values(1,1,1,1),(2,2,1,2),(3,1,2,1);
select * from enrollment ;

insert into patients values (1,"Arun",65),(2,"kumar",15),(3,"Abi",52);
insert into disease values (1,"diarrhoea","Pugazh"),(2,"fever","Dhanush"),(3,"Fever","Mukund");
select * from patients;
select * from disease;



select * from enrollment as e inner join patients as p inner join disease as d inner join staffs as s on e.p_id = p.p_id and e.st_id = s.st_id and e.dis_id=d.dis_id; 