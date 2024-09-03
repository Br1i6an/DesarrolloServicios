INSERT INTO faculties(name_faculty)
VALUES ('Los de arquitectura');
INSERT INTO faculties(name_faculty)
VALUES ('Deportes');
INSERT INTO faculties(name_faculty)
VALUES ('Los de la gloriosa Ingenieria de sistemas');
INSERT INTO faculties(name_faculty)
VALUES ('Los de ambiental');


INSERT INTO type_teacher(name_type_teacher)
    VALUES('Decano');
    INSERT INTO type_teacher(name_type_teacher)
    VALUES('Docente titular');
    INSERT INTO type_teacher(name_type_teacher)
    VALUES('Docente Asociado');
    INSERT INTO type_teacher(name_type_teacher)
    VALUES('Docente Asistente');
    INSERT INTO type_teacher(name_type_teacher)
    VALUES('Docente Auxiliar');
    INSERT INTO type_teacher(name_type_teacher)
    VALUES('Otro');


    INSERT INTO teachers(cod_faculty, id_teacher, name_teachers, lastname_teachers, cod_type_teacher)
VALUES (1, '333555666', 'Luz Elena', 'Gutierrez López', 1);

INSERT INTO teachers(cod_faculty, id_teacher, name_teachers, lastname_teachers, cod_type_teacher)
VALUES (1, '888777444', 'Carlos Andres', 'Guerrero Alarcón', 2);

INSERT INTO teachers(cod_faculty, id_teacher, name_teachers, lastname_teachers, cod_type_teacher)
VALUES (1, '999888777', 'Jennifer Eliana', 'Correa Ussa', 3);

INSERT INTO teachers(cod_faculty, id_teacher, name_teachers, lastname_teachers, cod_type_teacher)
VALUES (2, '111222333', 'Ismael Ramón', 'Medida Abello', 1);

INSERT INTO teachers(cod_faculty, id_teacher, name_teachers, lastname_teachers, cod_type_teacher)
VALUES (2, '741258963', 'Aida', 'Merlano', 4);

INSERT INTO teachers(cod_faculty, id_teacher, name_teachers, lastname_teachers, cod_type_teacher)
VALUES (3, '41257845', 'Doña Ramona', 'Almeida Estragón', 3);

INSERT INTO teachers(cod_faculty, id_teacher, name_teachers, lastname_teachers, cod_type_teacher)
VALUES (2, '98732145', 'Isto Manuel', 'TRansilvania Castro', 1);