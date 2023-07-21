-- SQLBook: Code
CREATE DATABASE iglesia;

USE iglesia;

CREATE TABLE departamentos(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(40) NOT NULL
);

CREATE TABLE municipios(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(40) NOT NULL,
    idDepartamento INT,
    Foreign Key (idDepartamento) REFERENCES departamentos(id)
);

CREATE TABLE comunas(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(40) NOT NULL,
    idMunicipio INT,
    Foreign Key (idMunicipio) REFERENCES municipios(id);
);

CREATE TABLE barrios(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    idComuna INT,
    Foreign Key (idComuna) REFERENCES comunas(id)
);

CREATE TABLE creyente(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombres VARCHAR(60) NOT NULL,
    apellidos VARCHAR(60) NOT NULL,
    idDepartamento INT,
    idMunicipio INT,
    idComuna INT,
    idBarrio INT,
    Foreign Key (idDepartamento) REFERENCES departamentos(id),
    Foreign Key (idMunicipio) REFERENCES municipios(id),
    Foreign Key (idComuna) REFERENCES comunas(id),
    Foreign Key (idBarrio) REFERENCES barrios(id)
)
