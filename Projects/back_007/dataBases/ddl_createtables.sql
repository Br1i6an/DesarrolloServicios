CREATE TABLE roles (
    role_id SERIAL NOT NULL,
    role_name VARCHAR(200) NOT NULL,
    role_status INT2 NOT NULL,
    CONSTRAINT PK_ROLE PRIMARY KEY (role_id)
);

CREATE TABLE entries (
    entry_id SERIAL NOT NULL,
    user_id INT4 NOT NULL,
    entry_date DATE NOT NULL,
    entry_time TIME,
    CONSTRAINT PK_ENTRIES PRIMARY KEY (entry_id)
);

CREATE TABLE access (
    user_id INT4 NOT NULL,
    access_email VARCHAR(200) NOT NULL,
    access_password VARCHAR(200) NOT NULL,
    CONSTRAINT PK_ACCESS_USER PRIMARY KEY (user_id)
);

CREATE TABLE users (
    user_id SERIAL NOT NULL,
    role_id INT4 NOT NULL,
    user_document VARCHAR(50) NOT NULL,
    user_typedocument INT2 NOT NULL,
    user_name VARCHAR(60) NOT NULL,
    user_lastname VARCHAR(80) NOT NULL,
    user_phone VARCHAR(50) NOT NULL,
    user_status INT2 NOT NULL,
    CONSTRAINT PK_USER PRIMARY KEY (user_id)
);

CREATE TABLE images (
    image_id SERIAL NOT NULL,
    user_id INT4 NOT NULL,
    image_publicname VARCHAR(200) NOT NULL,
    image_privatename VARCHAR(200) NOT NULL,
    image_type VARCHAR(50) NOT NULL,
    image_size VARCHAR(50) NOT NULL,
    image_favorite INT2 NOT NULL,
    CONSTRAINT PK_IMAGE PRIMARY KEY (image_id)
);

CREATE TABLE alerts (
    alert_id SERIAL NOT NULL,
    user_id INT4 NOT NULL,
    alert_days INT2 NOT NULL,
    alert_months INT2 NOT NULL,
    alert_title VARCHAR(500) NOT NULL,
    alert_detail TEXT NOT NULL,
    alert_status INT2 NOT NULL,
    alert_date DATE NOT NULL,
    CONSTRAINT PK_ALERT PRIMARY KEY (alert_id)
);


ALTER TABLE roles owner to user_node;
ALTER TABLE entries owner to user_node;
ALTER TABLE access owner to user_node;
ALTER TABLE users owner to user_node;
ALTER TABLE images owner to user_node;
ALTER TABLE alerts owner to user_node;

ALTER TABLE users
    ADD CONSTRAINT FK_USER_ROLE FOREIGN KEY (role_id)
    REFERENCES roles (role_id)
    ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE access
    ADD CONSTRAINT FK_USER_ACCESS FOREIGN KEY (user_id)
    REFERENCES users (user_id)
    ON DELETE RESTRICT ON UPDATE CASCADE;
 
ALTER TABLE entries
    ADD CONSTRAINT FK_ACC_entries FOREIGN KEY (user_id)
    REFERENCES access (user_id)
    ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE images
    ADD CONSTRAINT FK_USER_IMAGE FOREIGN KEY (user_id)
    REFERENCES users (user_id)
    ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE alerts
    ADD CONSTRAINT FK_USER_ALERTS FOREIGN KEY (user_id)
    REFERENCES users (user_id)
    ON DELETE RESTRICT ON UPDATE CASCADE;