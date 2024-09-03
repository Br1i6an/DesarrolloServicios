    CREATE table faculties(
    cod_faculty SERIAL NOT NULL,
    name_faculty VARCHAR(200) NOT NULl,
    constraint PK_FACULTIES primary key (cod_faculty)
);
ALTER TABLE faculties owner to user_node;



CREATE table type_teacher(
    cod_type_teacher SERIAL NOT NULL,
    name_type_teacher VARCHAR(200) NOT NULl,
    constraint PK_TYPE_TEACHER primary key (cod_type_teacher)
);
ALTER table type_teacher owner to user_node;



CREATE table teachers(
    cod_teacher SERIAL NOT NULL,
    cod_faculty int4 NOT NULL,
    id_teacher VARCHAR(200) NOT NULL,
    name_teachers VARCHAR(200) NOT NULL,
    lastname_teachers VARCHAR (200) NOT NULL,
    cod_type_teacher int4 NOT NULL ,
    constraint PK_TEACHERS primary key (cod_teacher)
);
ALTER TABLE teachers owner to user_node;

ALTER TABLE teachers
    add constraint FK_FACUL_TEACH FOREIGN KEY (cod_faculty)
    REFERENCES faculties(cod_faculty)
    on delete restrict ON UPDATE cascade;

ALTER table teachers
    add constraint FK_TEACH_TYPETEACH FOREIGN kEY (cod_type_teacher)
    REFERENCES type_teacher(cod_type_teacher)
    on delete restrict ON UPDATE cascade;