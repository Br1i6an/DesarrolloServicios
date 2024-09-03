INSERT INTO roles (role_name, role_status) VALUES ('CEO', 0), ('Manager', 1);
INSERT INTO users (role_id, user_document, user_typedocument, user_name, user_lastname, user_phone, user_status) VALUES (1,'104921347954', 0, 'Brian', 'Rodriguez', '3214607331', 1);
INSERT INTO access (user_id, access_email, access_password) VALUES (1, 'pepito@peito.com', '1234567');
INSERT INTO entries (user_id, entry_date, entry_time) VALUES (1, '2022-03-16', '11:00:00');
INSERT INTO images (user_id, image_publicname, image_privatename, image_type, image_size, image_favorite) VALUES (1, 'Public image', 'private image', 'Three', '50mpx', 1);
INSERT INTO alerts (user_id, alert_days, alert_months, alert_title, alert_detail, alert_status, alert_date) VALUES (1, 2, 1, 'ALERT1', 'Alert, inactive', 1, '2022-03-12');
