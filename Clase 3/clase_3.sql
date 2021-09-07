CREATE DATABASE clase_3;
USE clase_3;

CREATE TABLE empleados(
	id_emp INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(30) NOT NULL,
    Apellido VARCHAR(30) NOT NULL,
    Trabajo VARCHAR(30) NOT NULL,
    Edad INT NOT NULL,
    Salario INT NOT NULL,
    Mail VARCHAR(30) NOT NULL
);

-- DROP TABLE empleados;
SELECT * FROM empleados;

INSERT INTO empleados VALUES
(null, "Juan", "Hagan", "Programador Senior", 32, 1200, "juan_hagan@gmail.com");


INSERT INTO empleados VALUES
(null, "Gonzalo", "Pillai", "Programador senior", 32, 1100, "g_pillai@bignet.com"),
(null, "Ana", "Dharma", "Desarrolladora web", 27, 900, "ana@bignet.com"), (4, "Gonzalo", "Pillai", "Programador senior", 32, 1100, "g_pillai@bignet.com"),
(null, "Maria", "Anchor", "Desarrollador Web", 26, 850, "mary@bignet.com"),
(null, "Alfred", "Fernandez", "Programdor", 31, 750, "af@bignet.com"),
(null, "Juan", "Aguero", "Programador", 36, 850, "juan@bignet.com"),
(null, "Eduardo", "Sacan", "Programador", 25, 850, "eddi@bignet.com"),
(null, "Alejandro", "Nanda", "Programador", 32, 700, "alenanda@bignet.com"),
(null, "Hernan", "Rosso", "Especialista multimedia", 33, 900, "hernan@bignet.com"),
(null, "Pablo", "Simon", "Especialista multimedia", 43, 850, "ps@bignet.com"),
(null, "Jimena", "Cazado", "Diseñador web", 32, 1100, "jimena@bignet.com"),
(null, "Roberto", "Luis", "Administrador de sistemas", 35, 1000, "roberto@bignet.com"),
(null, "Daniel", "Gutierrez", "Administrador de sistemas", 34, 9000, "daniel@bignet.com"),
(null, "Miguel", "Harper", "Ejecutivo de Ventas Senior", 36, 1200, "miguel@bignet.com"),
(null, "Monica", "Sanchez", "Ejecutivo de Ventas", 30, 900, "monica@bignet.com"),
(null, "Alicia", "Simlai", "Ejecutivo de Ventas", 27, 700, "alicia@bignet.com"),
(null, "Jose", "Iriarte", "Ejecutivo de Ventas", 27, 720, "jose@bignet.com"),
(null, "Sabrina", "Allende", "Gerente de Soporte tecnico", 32, 2000, "sabrina@bignet.com"),
(null, "Pedro", "Campeon", "Gerente de finanzas", 36, 2200, "pedro@bignet.com"),
(null, "Mariano", "Dharma", "Presidente", 28, 3000, "mariano@bignet.com");

UPDATE `clase_3`.`empleados` SET `Trabajo` = 'Desarrollador web' WHERE (`id_emp` = '3');
UPDATE `clase_3`.`empleados` SET `Trabajo` = 'Programador' WHERE (`id_emp` = '6');

SELECT * FROM empleados;

-- 1) ¿Cuales son los nombres y la ocupación de cada uno de los empleados?
SELECT Nombre, Trabajo FROM empleados;
-- 2) ¿Cuál es el nombre y la edad de cada uno de los empleados?
SELECT nombre, edad FROM empleados;
-- 3) ¿Cuál es el nombre y la edad de todos los programadores?
SELECT nombre, edad FROM empleados WHERE trabajo LIKE "%Programador%";
-- 4) ¿Cuáles son los empleados de mas de 30 años?
SELECT nombre from empleados WHERE edad > 30;
-- 5) ¿Cuál es el apellido y el mail de los empleados llamados Juan?
SELECT apellido, mail FROM empleados WHERE nombre = "Juan";
-- 6) ¿Cuál es el nombre de las personas que trabajan como Programadores o Desarrolladores Web?
SELECT nombre FROM empleados where trabajo = "Programador" OR trabajo = "Desarrollador Web";
-- 7) Mostrar una lista (nro_emp, nombre, apellido, trabajo) las personas cuyo numero de empleado esté entre 15 y 20
SELECT id_emp, nombre, apellido, trabajo FROM empleados WHERE id_emp >= "15" AND id_emp <= "20";
-- 8) ¿Cuáles son los Programadores que ganan menos de $800?
SELECT * FROM empleados WHERE Trabajo LIKE "%Programador%" AND Salario < 800;
-- 9) ¿Cuáles son los Programadores que ganan entre $750 y $900?
SELECT * FROM empleados WHERE trabajo LIKE "%Programador%" AND Salario BETWEEN 750 AND 900;
-- 10) ¿Cuáles son los trabajadores cuyo apellido comienza con s? 
SELECT * FROM empleados WHERE apellido LIKE "s%";
-- 11)¿Cuáles son los trabajadores cuyo nombre termina en l?
SELECT * FROM empleados WHERE nombre LIKE "%l";
-- 12) Agregar un empleado con ID_empleado 22 con los siguientes datos:
-- Francisco Perez, Programador, 26 años, salario 900, mail:
-- francisco@bignet.com
INSERT INTO empleados VALUE (null, "Francisco", "Perez", "Programador", 26, 900, "francisco@bignet.com");

-- 13)Borrar los datos de Hernar Rosso
DELETE FROM empleados WHERE nombre = "Hernan" AND apellido = "Rosso";
-- Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column.  
-- To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.

SELECT id_emp FROM empleados WHERE nombre = "Hernan" AND apellido = "Rosso" > @id_deleteUser;
DELETE FROM empleados WHERE id_emp = @id_deleteUser;
DELETE FROM empleados WHERE id_emp = 10;

-- 14)Modificar los datos de Daniel Gutierrez, salario 900.
UPDATE empleados SET salario = 900 WHERE nombre = "Daniel" AND apellido = "Gutierrez";
SELECT id_emp FROM empleados WHERE nombre = "Daniel" AND apellido = "Gutierrez" > @id_updateUser;
UPDATE empleados SET salario = 900 WHERE id_emp = @id_updateUser;

SELECT * FROM empleados WHERE nombre = "Daniel" AND apellido = "Gutierrez";
SELECT * FROM empleados;

-- TEST
SELECT * FROM empleados;

DELETE FROM empleados WHERE nombre="Francisco" AND apellido="Perez";

ALTER TABLE empleados ADD COLUMN telefono INT NOT NULL AFTER mail; 
ALTER TABLE empleados DROP COLUMN telefono; 

ALTER TABLE empleados ADD COLUMN password VARCHAR(4) NOT NULL AFTER mail;

INSERT INTO empleados 
	('password')
VALUES
	('HOLA'),
    ('chau'),
    ('hello'),
    ('pwd'),
    ('qwerty');
    
UPDATE empleados 
SET password = 'hola' WHERE id_emp = "4" AND
SET password = 'pasw' WHERE id_emp = "5";
SET password = 'pwd' WHERE id_emp = "4",
SET password = 'qwert' WHERE id_emp = "6",
SET password = '1234' WHERE id_emp = "7",
SET password = 'safe' WHERE id_emp = "8",
SET password = 'tostado' WHERE id_emp = "9",
SET password = 'cafe' WHERE id_emp = "10",
SET password = 'hello' WHERE id_emp = "11",
SET password = 'horrible' WHERE id_emp = "12";


SELECT telefono from empleados WHERE id_emp="1";

-- JOIN TWO DATABASES TABLES
SELECT *
FROM phpmysql_crud.task php
JOIN empleados em
   ON php.id = em.id_emp