
--
-- Table structure for table `incidentes`
--

DROP TABLE IF EXISTS `incidentes`;
CREATE TABLE `incidentes` (
  `idLugares` int(11) NOT NULL,
  `idTipos` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`idTipos`,`fecha`,`idLugares`),
  KEY `idLugares` (`idLugares`),
  KEY `idTipos` (`idTipos`),
  CONSTRAINT `fk_incidentes_idLugares` FOREIGN KEY (`idLugares`) REFERENCES `lugares` (`idLugares`) ON UPDATE CASCADE,
  CONSTRAINT `fk_incidentes_idTipos` FOREIGN KEY (`idTipos`) REFERENCES `tipos` (`idTipos`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `incidentes`
--

INSERT INTO `incidentes` VALUES 
(2,1,'2020-05-06 11:10:59'),
(2,5,'2020-05-06 11:11:08'),
(6,5,'2020-05-06 11:11:26'),
(7,7,'2020-05-06 11:12:39'),
(8,4,'2020-05-06 11:27:22'),
(9,6,'2020-05-06 11:52:10');


--
-- Table structure for table `lugares`
--

DROP TABLE IF EXISTS `lugares`;
CREATE TABLE `lugares` (
  `idLugares` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idLugares`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `lugares`
--
INSERT INTO `lugares` VALUES
(1,'Centro turístico'),
(2,'Laboratorios'),
(3,'Restaurante'),
(4,'Centro operativo'),
(5,'Triceratops'),
(6,'Dilofosaurios'),
(7,'Velociraptors'),
(8,'TRex'),
(9,'Planicie de los herbívoros');

--
-- Table structure for table `tipos`
--
DROP TABLE IF EXISTS `tipos`;
CREATE TABLE `tipos` (
  `idTipos` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idTipos`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
--
-- Dumping data for table `tipos`
--

INSERT INTO `tipos` VALUES 
(1,'Falla eléctrica'),
(2,'Fuga de herbívoro'),
(3,'Fuga de Velociraptors'),
(4,'Fuga de TRex'),
(5,'Robo de ADN'),
(6,'Auto descompuesto'),
(7,'Visitantes en zona no autorizada');

--
-- Dumping events for database 'dawbdorg_A01704340'
--

--
-- Dumping routines for database 'dawbdorg_A01704340'
--

DELIMITER ;;
CREATE PROCEDURE `registrarIncidente`(uidLugar int(11), uidTipo int(11), ufecha datetime)
begin
	insert into incidentes(idLugares,idTipos,fecha) values (uidLugar, uidTipo, ufecha);
end ;;

DELIMITER ;;
CREATE PROCEDURE `registrarLugar`(unombre varchar(50))
begin
	insert into lugares(nombre) values (unombre);
end ;;
DELIMITER ;

DELIMITER ;;
CREATE PROCEDURE `registrarTipo`(unombre varchar(50))
begin
	insert into tipos(nombre) values (unombre);
end ;;
DELIMITER ;

