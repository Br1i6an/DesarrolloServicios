CREATE TABLE programs (
    cod_program SERIAL NOT NULL,
    name_program VARCHAR(200) NOT NULL,
    CONSTRAINT PK_PROGRAMS PRIMARY KEY (cod_program)
);

CREATE TABLE pensums (
    cod_pensum SERIAL NOT NULL,
    cod_program int4 NOT NULL,
    name_pensum VARCHAR(200) NOT NULL,
    CONSTRAINT PK_PENSUMS PRIMARY KEY (cod_pensum)
);

CREATE TABLE semesters (
    cod_semester SERIAL NOT NULL,
    name_semester VARCHAR(200) NOT NULL,
    CONSTRAINT PK_SEMESTERS PRIMARY KEY (cod_semester)
);

CREATE TABLE subjectpensum (
    cod_pensum int4 NOT NULL,
    cod_subject int4 NOT NULL,
    cod_semester int4 NOT NULL,
    CONSTRAINT PK_SUBJECTPENSUM PRIMARY KEY (cod_pensum, cod_subject)
);

CREATE TABLE subjects (
    cod_subject SERIAL NOT NULL,
    name_subject VARCHAR(200) NOT NULL,
    reference_subject VARCHAR(200) NOT NULL,
	CONSTRAINT PK_SUBJECTS PRIMARY KEY (cod_subject)
);

CREATE TABLE acceso (
    cod_access SERIAL NOT NULL,
    cod_role int4 NOT NULL,
    email_access VARCHAR(200) NOT NULL UNIQUE,
    passwrd_access VARCHAR(200) NOT NULL,
    CONSTRAINT PK_ACCESS PRIMARY KEY (cod_access)
);

CREATE TABLE roles (
    cod_role SERIAL NOT NULL,
    name_role VARCHAR(200) NOT NULL,
    CONSTRAINT PK_ROLES PRIMARY KEY (cod_role)
);

ALTER TABLE acceso
    ADD CONSTRAINT FK_ACC_ROLE FOREIGN KEY (cod_role)
    REFERENCES roles (cod_role)
    ON DELETE RESTRICT ON UPDATE CASCADE;

CREATE UNIQUE INDEX email_index ON acceso (email_access);
ALTER TABLE acceso owner to user_node;
ALTER TABLE roles owner to user_node;

ALTER TABLE pensums owner to user_node;
ALTER TABLE subjects owner to user_node;
ALTER TABLE programs owner to user_node;
ALTER TABLE semesters owner to user_node;
ALTER TABLE subjectpensum owner to user_node;

ALTER TABLE pensums
    ADD CONSTRAINT FK_PEN_PRO FOREIGN KEY (cod_program)
    REFERENCES programs (cod_program)
    ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE subjectpensum
    ADD CONSTRAINT FK_SUBJECTPEN_REF_SUBJECTS FOREIGN KEY (cod_subject)
    REFERENCES subjects (cod_subject)
    ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE subjectpensum
    ADD CONSTRAINT FK_SUBJECTPEN_REF_SEMESTERS FOREIGN KEY (cod_semester)
    REFERENCES semesters (cod_semester)
    ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE subjectpensum
    ADD CONSTRAINT FK_SUBJECTPEN_REF_PENSUM FOREIGN KEY (cod_pensum)
    REFERENCES pensums (cod_pensum)
    ON DELETE RESTRICT ON UPDATE CASCADE;