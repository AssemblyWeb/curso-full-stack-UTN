-- EJERCICIO:
-- Crear una tabla con la siguientes campos:
-- ID-  NOMBRE-APELLIDO-EDAD-PROFESION (edited) 
-- Agregar como restricion que:
-- Edad no sea nulo , que Apellido tenga un limite de 200 caracteres , 
-- nombre que tenga un limite de 100 caracteres,  profesion que tenga hasta 
-- 200 caracteres y edad sea de tipo. numerico (edited) 

CREATE DATABASE clase_4;
USE clase_4;

SELECT * FROM empleados;

CREATE TABLE empleados (
	ID INT NOT NULL AUTO_INCREMENT,
    NOMBRE VARCHAR(100) NOT NULL,
    APELLIDO VARCHAR(200) NOT NULL,
    EDAD INT NOT NULL,
    PROFESION VARCHAR(30) NOT NULL,
    PRIMARY KEY (ID)
);

-- Modificar que Nombre tenga no mas de 220 caracteres y que Edad sea de tipo string con no mas de 100 caracteres-- 
ALTER TABLE 
empleados
MODIFY COLUMN 
NOMBRE VARCHAR(220);

ALTER TABLE 
empleados
MODIFY COLUMN 
EDAD VARCHAR(100);

-- ALT
ALTER TABLE
empleados
MODIFY COLUMN
NOMBRE VARCHAR(100),
MODIFY COLUMN
APELLIDO VARCHAR(100);

-- Crear una columna de DNI que sea numerico
ALTER TABLE
empleados
ADD 
DNI INT NOT NULL;

-- Por ultimo eliminar la columna de EDAD
ALTER TABLE
empleados
DROP COLUMN
EDAD;
