    CREATE TABLE subjectpensum(
    pensum_id int4 NOT NULL,
    subject_id int4 NOT NULL,
    semester_id int4 NOT NULL,

    constraint PK_SUBJECTPENSUM primary key (pensum_id,subject_id)    
);
    ALTER TABLE subjectpensum owner to user_node;


    CREATE TABLE subjects(
        subject_id serial,
        subject_name varchar(200) NOT NULL,
        subject_reference varchar(200) NOT NULL,
        
        constraint PK_SUBJECTS primary key (subject_id)
    );
    ALTER TABLE subjects owner to user_node;


    CREATE TABLE pensums(
        pensum_id int4,
        program_id int4 NOT NULL,
        pensum_name varchar(200) NOT NULL,
        
        constraint PK_PENSUMS primary key (pensum_id)
    );
    ALTER TABLE pensums owner to user_node;


    CREATE TABLE semesters(
        semester_id int4 NOT NULL,
        semester_name varchar(200) NOT NULL,

        constraint PK_SEMESTERS primary key (semester_id)
    );
    ALTER TABLE semesters owner to user_node;


    CREATE TABLE programs(
        program_id serial NOT NULL,
        program_name varchar(200) NOT NULL,

        constraint PK_PROGRAMS primary key (program_id)
    );
    ALTER TABLE programs owner to user_node;
    /*CREATE UNIQUE INDEX namepro ON programs (program_name);*/


    CREATE TABLE access(
        access_id serial NOT NULL,
        access_Email varchar(200) NOT NULL UNIQUE,
        access_key varchar(200) NOT NULL,
        role_id int4 NOT NULL

        constraint PK_ACCESS primary key (access_id)
    );
    ALTER TABLE programs owner to user_node;


    CREATE TABLE roles(
        role_id serial NOT NULL,
        role_name varchar(200) NOT NULL,

        constraint PK_ROLES primary key (role_id)
    );
    ALTER TABLE roles owner to user_node;


    ALTER TABLE subjectpensum 
        add constraint fk_subjectpensum_ref_subjects foreign key (subject_id)
        references subjects (subject_id)
        on delete restrict on update cascade;


    ALTER TABLE subjectpensum
        add constraint fk_subjectpensum_ref_semesters foreign key (semester_id)
        references semesters (semester_id)
        on delete restrict on update cascade;


    ALTER TABLE subjectpensum 
        add constraint fk_subjectpensum_ref_pensums foreign key (pensum_id)
        references pensums (pensum_id)
        on delete restrict on update cascade;



     ALTER TABLE pensums
        add constraint fk_pensums_ref_programs foreign key (program_id)
        references programs (program_id)
        on delete restrict on update cascade;


        ALTER TABLE access
        add constraint fk_roles foreign key (role_id)
        references roles (role_id)
        on delete restrict on update cascade;