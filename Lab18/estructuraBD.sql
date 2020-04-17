 /*Crear tabla Materiales*/
 CREATE TABLE `Materiales` (
 `Clave` decimal(5,0) NOT NULL,
 `Descripcion` varchar(50) DEFAULT NULL,
 `Costo` decimal(8,2) DEFAULT NULL,
 PRIMARY KEY (`Clave`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/* Insertar datos de Materiales*/
LOAD DATA INFILE 'materiales.csv'
INTO TABLE Lab14.Materiales
FIELDS TERMINATED BY ',';

/*Crear tabla Proyectos*/
CREATE TABLE `Proyectos` (
 `Numero` decimal(5,0) NOT NULL,
 `Denominacion` varchar(50) DEFAULT NULL,
 PRIMARY KEY (`Numero`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Insertar datos de Proyectos*/
LOAD DATA INFILE 'proyectos.csv'
INTO TABLE Lab14.Proyectos
FIELDS TERMINATED BY ',';

/*Crear tabla Proveedores*/
CREATE TABLE `Proveedores` (
 `RFC` char(13) NOT NULL,
 `RazonSocial` varchar(50) DEFAULT NULL,
 PRIMARY KEY (`RFC`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Insertar datos de Proveedores*/
LOAD DATA INFILE 'proveedores.csv'
INTO TABLE Lab14.Proveedores
FIELDS TERMINATED BY ',' ;

/*Crear tabla Entregan*/
CREATE TABLE `Entregan` (
 `Clave` decimal(5,0) NOT NULL,
 `RFC` char(13) NOT NULL,
 `Numero` decimal(5,0) NOT NULL,
 `Fecha` datetime NOT NULL,
 `Cantidad` decimal(8,2) DEFAULT NULL,
 PRIMARY KEY (`Clave`,`RFC`,`Numero`,`Fecha`),
 KEY `entregan_proyectos` (`Numero`),
 KEY `entregan_proveedores` (`RFC`),
 CONSTRAINT `entregan_materiales` FOREIGN KEY (`Clave`) REFERENCES `Materiales` (`Clave`),
 CONSTRAINT `entregan_proveedores` FOREIGN KEY (`RFC`) REFERENCES `Proveedores` (`RFC`),
 CONSTRAINT `entregan_proyectos` FOREIGN KEY (`Numero`) REFERENCES `Proyectos` (`Numero`),
 CONSTRAINT `Cantidad` CHECK (`Cantidad` > 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Insertar datos de Entregan*/
LOAD DATA INFILE 'entregan.csv'
INTO TABLE Lab14.Entregan
FIELDS TERMINATED BY ','
(Clave,RFC,Numero, @Fecha,Cantidad)
SET Fecha = STR_TO_DATE(@Fecha, '%d/%m/%Y');