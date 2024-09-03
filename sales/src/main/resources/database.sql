create table provider(
    provider_id serial not null,
    provider_name varchar(200) not null,
    provider_nit varchar(20) not null,
    provider_address varchar(100) not null,
    constraint PK_PROVIDER primary key (provider_id)
);
alter table provider owner to user_node;

create table customer(
  customer_id serial not null,
  customer_name varchar(200) not null,
  customer_lastName varchar(200) not null,
  customer_document varchar(50) not null,
  customer_phoneNumber varchar(50) not null,
  constraint PK_CUSTOMER primary key (customer_id)
);
alter table customer owner to user_node;

create table product(
  product_id serial not null,
  product_name varchar(200) not null,
  product_availableAmount int not null,
  product_description varchar(200) not null,
  product_value int not null,
  product_IVA Float not null,
  provider_id int4 not null,
  constraint PK_PRODUCT primary key (product_id)
);
alter table product owner to user_node;

create table bill(
  bill_id serial not null,
  bill_total int not null,
  bill_date date not null,
  product_id int4 not null,
  constraint PK_BILL primary key (bill_id)
);
alter table bill owner to user_node;

create table orders(
  order_id serial not null,
  order_number varchar not null,
  order_description varchar not null,
  product_id int4 not null,
  constraint PK_ORDERS primary key (order_id)
);
alter table orders owner to user_node;

create table orderDetail(
    orderdetail_id serial not null,
    orderdetail_address varchar(200) not null,
    orderdetail_totalorder int4 not null,
    order_id int4 not null,
    constraint PK_ORDERDETAIL primary key (orderdetail_id)
);
alter table orderDetail owner to user_node;

create table customerOrder(
    customerorder_id serial not null,
    customerorder_description varchar(200) not null,
    order_id int4 not null,
    customer_id int4 not null,
    constraint PK_CUSTOMERORDER primary key (customerorder_id)
);
alter table customerOrder owner to user_node;



ALTER TABLE product
    ADD CONSTRAINT FK_PROD_PROV
        FOREIGN KEY (provider_id)
            REFERENCES provider (provider_id)
            ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE bill
    ADD CONSTRAINT FK_BILL_PROD
        FOREIGN KEY (product_id)
            REFERENCES product (product_id)
            ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE orders
    ADD CONSTRAINT FK_ORD_PROD
        FOREIGN KEY (product_id)
            REFERENCES product (product_id)
            ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE orderDetail
    ADD CONSTRAINT FK_ORDET_ORD
        FOREIGN KEY (order_id)
            REFERENCES orders (order_id)
            ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE customerOrder
    ADD CONSTRAINT FK_CUSTORD_ORD
        FOREIGN KEY (order_id)
            REFERENCES orders (order_id)
            ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE customerOrder
    ADD CONSTRAINT FK_CUS_CUSTORD
        FOREIGN KEY (customer_id)
            REFERENCES customer(customer_id)
            ON DELETE CASCADE ON UPDATE CASCADE;

