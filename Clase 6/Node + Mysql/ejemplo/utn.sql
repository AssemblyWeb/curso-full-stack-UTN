-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema utn
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema utn
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `utn` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin ;
USE `utn` ;

-- -----------------------------------------------------
-- Table `utn`.`carrera`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `utn`.`carrera` (
  `Carr_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Carr_nombre` VARCHAR(60) NULL DEFAULT NULL,
  `Carr_codigo` VARCHAR(30) NULL DEFAULT NULL,
  `Carr_duracion` TINYINT NULL DEFAULT NULL,
  PRIMARY KEY (`Carr_id`),
  UNIQUE INDEX `Carr_codigo` (`Carr_codigo` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `utn`.`alumno`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `utn`.`alumno` (
  `Alu_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Alu_nombre` VARCHAR(60) NULL DEFAULT NULL,
  `Alu_apellido` VARCHAR(60) NULL DEFAULT NULL,
  `Alu_dni` INT UNSIGNED NOT NULL,
  `Alu_telefono` INT NULL DEFAULT NULL,
  `Alu_matricula` INT NOT NULL,
  `Alu_carr` INT UNSIGNED NULL DEFAULT NULL,
  PRIMARY KEY (`Alu_id`),
  UNIQUE INDEX `Alu_dni` (`Alu_dni` ASC) VISIBLE,
  UNIQUE INDEX `Alu_matricula` (`Alu_matricula` ASC) VISIBLE,
  INDEX `Alu_carr` (`Alu_carr` ASC) VISIBLE,
  CONSTRAINT `alumno_ibfk_1`
    FOREIGN KEY (`Alu_carr`)
    REFERENCES `utn`.`carrera` (`Carr_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `utn`.`empleado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `utn`.`empleado` (
  `idempleado` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(40) NOT NULL,
  `salario` INT NOT NULL,
  PRIMARY KEY (`idempleado`))
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `utn`.`empleados`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `utn`.`empleados` (
  `id_emp` INT(3) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(150) NOT NULL,
  `apellido` VARCHAR(150) NOT NULL,
  `trabajo` VARCHAR(200) NOT NULL,
  `edad` INT NOT NULL,
  `salario` INT NOT NULL,
  `mail` VARCHAR(140) NOT NULL,
  PRIMARY KEY (`id_emp`))
ENGINE = InnoDB
AUTO_INCREMENT = 23
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


-- -----------------------------------------------------
-- Table `utn`.`libros`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `utn`.`libros` (
  `idlibros` INT(10) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(20) NULL DEFAULT NULL,
  `autor` VARCHAR(40) NULL DEFAULT NULL,
  `editorial` VARCHAR(20) NULL DEFAULT NULL,
  `precio` FLOAT NULL DEFAULT NULL,
  `fecha` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idlibros`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `utn`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `utn`.`usuarios` (
  `idUsuarios` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(50) NULL DEFAULT NULL,
  `password` VARCHAR(20) NULL DEFAULT NULL,
  `nombre` VARCHAR(30) NULL DEFAULT NULL,
  `edad` INT NULL DEFAULT NULL,
  PRIMARY KEY (`idUsuarios`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
