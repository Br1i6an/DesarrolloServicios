INSERT INTO programs (name_program) VALUES ('Licenciatura en Español y Lenguas Extranjeras Ingles y Frances'),
('Administración de Empresas'), ('Negocios Internacionales'), ('Contaduría Pública'),
('Derecho'), ('Arquitectura'),('Ingeniería Ambiental'), ('Ingeniería Civil'),
('Ingeniería de Sistemas'), ('Ingeniería Electrónica'),('Ingeniería Mecánica'),
('Ingeniería Industrial'); 

INSERT INTO pensums (cod_program, name_pensum) VALUES (1, 'Pensum 2021'),(2, 'Pensum 2011');

INSERT INTO semesters (name_semester) VALUES ('First Semester');

INSERT INTO subjects(name_subject, reference_subject) VALUES ('Subject 1', 'Reference');

INSERT INTO subjectpensum (cod_pensum, cod_subject, cod_semester) VALUES (1,1,1);

INSERT INTO roles (name_role) VALUES ('CEO'), ('Project Manager');
INSERT INTO acceso (cod_role, email_access, passwrd_access) VALUES (1,'ant@gmail.com', '123456');