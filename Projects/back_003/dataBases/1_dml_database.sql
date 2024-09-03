CREATE table faculties(
    cod_faculty serial NOT NULL,
    name_faculty varchar (200) NOT NULL,
    CONSTRAINT PK_FACULTY primary key (cod_faculty)
);

ALTER TABLE faculties owner to user_node;

CREATE table teachers(
    cod_teacher serial NOT NULL,
    cod_faculty int4 NOT NULL,
    identification_teacher INT NOT NULL,
    name_teacher varchar(200) NOT NULL,
    lastname_teacher varchar(200) NOT NULL,
    type_teacher int2 NOT NULL
        CONSTRAINT CK_TYPETEACHER CHECK (type_teacher in(1,2,3,4,5,6)),
    CONSTRAINT PK_TEACHERS primary key (cod_teacher)
);

ALTER TABLE teachers owner to user_node;
ALTER TABLE teachers
    ADD CONSTRAINT FK_FACU_TEAC FOREIGN KEY (cod_faculty)
    REFERENCES faculties (cod_faculty)
    ON DELETE RESTRICT ON UPDATE CASCADE