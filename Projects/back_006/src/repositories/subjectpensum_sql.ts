export const SQL_SUBJECTPENSUM = {
    ALL: 'SELECT s.cod_semester, se.name_semester, s.cod_pensum, p.name_pensum, s.cod_subject, su.name_subject \
    FROM subjectpensum s \
    INNER JOIN pensums p ON s.cod_pensum = p.cod_pensum \
    INNER JOIN subjects su ON s.cod_subject = su.cod_subject \
    INNER JOIN semesters se ON s.cod_semester = s.cod_semester'
}