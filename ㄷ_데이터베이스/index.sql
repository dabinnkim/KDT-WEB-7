CREATE TABLE user(
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    pw VARCHAR(20) NOT NULL,
    name VARCHAR(5) NOT NULL,
    gender ENUM('F','M','') default '',
    age INT(3) NOT NULL default 0
);

INSERT INTO user (id,pw,name,gender,age) VALUES
('hong1234','qwer','홍길동','F',33),
('hong1234','qwer','홍길동','F',33),
('hong1234','qwer','홍길동','F',33),
('hong1234','qwer','홍길동','F',33),
('hong1234','qwer','홍길동','F',33);

select * from user order by birthday;
select * from user where gender='M' order by name desc;
select id, name from user where year(birthday) between 1990 and 1999;
select * from user where month(birthday)=6 order by birthday;
select * from user where gender='M' and year(birthday) between 1970 and 1979;
select * from user order by age desc limit 3;
select * from user where age between 25 and 50;
update user set pw=12345678 where id='hong1234';
delete from user where id='jungkrat';

CREATE TABLE customer(
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    birthday DATE NOT NULL
);

insert into customer (id, name, birthday) values
('aaa','김이현','1990-03-17'),
('bbb','최지율','1992-11-01'),
('ccc','이혜진','1993-05-31');

create table order_list (
    id int auto_increment not null primary key,
    customer_id varchar(10) not null,/*위의 테이블에서 */
    product_name varchar(20) not null,
    quantity int,
    foreign key(customer_id) references customer(id) ON UPDATE CASCADE ON DELETE CASCADE/*ID만들때 커스터머 ID 참조할거임 수정,삭제시 참조하는 테이블도 같이 수정, 삭제되게*/
    );

INSERT INTO order_list (customer_id, product_name, quantity) values
('aaa','맥북m',1),
('bbb','빅파이',30),
('ccc','키보드',3),
('bbb','초코파이',5),
('ccc','텀블러',1);

select * from customer;
select * from order_list;

--INNER JOIN
--custmoer에 order_list 를 조인하라 on 커스터머의 아이디와 order_list 아이디를
select * from customer inner join order_list on customer.id = order_list.customer_id
select * from customer inner join customer.id on customer_id = order_list.customer_id
where order_list.quantity >=5;

create table customer2(
    id varchar(30) not null primary key,
    name varchar(30) not null,
    birthday int not null,
    phonenumber varchar(40) not null
);

insert into customer2 values('hello','김지수',910191,'010-9184-3919');
insert into customer2 values
('world','박세진*',920202,'010-9184-3919'),
('banana','이민지',930303,'01-2830-8207'),
('apple','정민혁',940404,'010-2345-3920'),
('kiwi','박세진*',960517,'010-1350-7253');

create table product2 (
    id int not null auto_increment primary key,
    product varchar(30) not null,
    company varchar(30) not null, 
    price int not null
);

insert into product2 (product,company,price) values
('무선마우스','삼성',20000),
('무선마우스','lg',60000),
('긴팔티셔츠','lg',40000),
('키보드','삼성',50000),
('헤드폰','소니',30000),
('마우스','로지텍',40000);

create table order2(
    order_id varchar(30) not null primary key,
    customer_id varchar(30) not null,
    product_id int not null,
    quantity int not null,
    foreign key customer_id references customer2(id) on update CASCADE on delete CASCADE, --customer_id는 테이블 customer2의 id를 참조
    foreign key product_id references product2(id) on update CASCADE on delete CASCADE --product_id는 테이블 product2의 id를 참조
);

insert into order2(order_id, customer_id,product_id,quantity) values
('m101312','hello',1,2),
('k233332','banana',4,1),
('t220085','world',3,3),
('h111077','hello',5,1),
('m123456','kiwi',5,1);


--상품을 주문한 사람들
--커스터머2를 a로 이름 바꾼것 b도 마찬가지 (이름 너무 길어)
select * from customer2 as a inner join order2 as b
on a.id=b.customer_id; --a와b의 아이디가 같은것

--김지수가 주문한 상품을 조회해 보세요
--김지수, 상품명, 가격이 나와야합니다.

select name,product,price from customer2 as a
inner join order2 as b
on a.id=b.customer_id
inner join product2 as c
on b.product_id=c.id
where name='김지수';

--무선마우스를 구매한 고객

select name, product, price from product2 as a
inner join order2 as b
on a.id=b.product_id
inner join customer2 as c
on b.customer_id=c.id
where product='무선마우스';

--박세진 중 긴팔티셔츠를 구매한 사람의 아이디와 상품가격, 구매수량 조회
select id, price, quantity from customer2 as a
inner join order2 as b
on a.id=b.customer_id
inner join product2 as c
on b.product_id=c.id
where a.name='박세진*' and c.product='긴팔티셔츠';


select SUM(c.price * b.quantity) from customer2 as a
inner join order2 as b
on a.id=b.customer_id
inner join product2 as c
on b.product_id=c.id
where a.name='박세진*' and c.product='긴팔티셔츠';