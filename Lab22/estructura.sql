
--
-- Table structure for table `Cantidades2000ProveedoresInfonavitDurango`
--

DROP TABLE IF EXISTS `Cantidades2000ProveedoresInfonavitDurango`;
CREATE TABLE `Cantidades2000ProveedoresInfonavitDurango` (
  `RFC` char(13) DEFAULT NULL,
  `RazonSocial` varchar(50) DEFAULT NULL,
  `cantidad total` decimal(30,2) DEFAULT NULL
);
--
-- Dumping data for table `Cantidades2000ProveedoresInfonavitDurango`
--
LOCK TABLES `Cantidades2000ProveedoresInfonavitDurango` WRITE;
UNLOCK TABLES;

--
-- Table structure for table `Cantidades2001ProveedoresInfonavitDurango`
--
DROP TABLE IF EXISTS `Cantidades2001ProveedoresInfonavitDurango`;
CREATE TABLE `Cantidades2001ProveedoresInfonavitDurango` (
  `RFC` char(13) DEFAULT NULL,
  `RazonSocial` varchar(50) DEFAULT NULL,
  `cantidad total` decimal(30,2) DEFAULT NULL
);

--
-- Dumping data for table `Cantidades2001ProveedoresInfonavitDurango`
--

LOCK TABLES `Cantidades2001ProveedoresInfonavitDurango` WRITE;
UNLOCK TABLES;

--
-- Table structure for table `DescripcionEmpezandoConSi`
--

DROP TABLE IF EXISTS `DescripcionEmpezandoConSi`;
CREATE TABLE `DescripcionEmpezandoConSi` (
  `Clave` decimal(5,0) DEFAULT NULL,
  `Descripcion` varchar(50) DEFAULT NULL,
  `Costo` decimal(8,2) DEFAULT NULL,
  `PorcentajeImpuesto` decimal(6,2) DEFAULT NULL
);

--
-- Dumping data for table `DescripcionEmpezandoConSi`
--

LOCK TABLES `DescripcionEmpezandoConSi` WRITE;
UNLOCK TABLES;

--
-- Table structure for table `EntregaUltimoNum6`
--

DROP TABLE IF EXISTS `EntregaUltimoNum6`;
CREATE TABLE `EntregaUltimoNum6` (
  `Numero` decimal(5,0) DEFAULT NULL
);

--
-- Dumping data for table `EntregaUltimoNum6`
--

LOCK TABLES `EntregaUltimoNum6` WRITE;
UNLOCK TABLES;

--
-- Table structure for table `Entregan`
--

DROP TABLE IF EXISTS `Entregan`;
CREATE TABLE `Entregan` (
  `Clave` decimal(5,0) NOT NULL,
  `RFC` char(13) NOT NULL,
  `Numero` decimal(5,0) NOT NULL,
  `Fecha` datetime NOT NULL,
  `Cantidad` decimal(8,2) DEFAULT NULL
);

--
-- Dumping data for table `Entregan`
--

LOCK TABLES `Entregan` WRITE;
INSERT INTO `Entregan` VALUES (1000,'AAAA800101',5019,'1999-08-08 00:00:00',254.00),(1000,'AAAA800101',5019,'2000-04-06 00:00:00',7.00),(1010,'BBBB800101',5001,'2000-05-03 00:00:00',528.00),(1010,'BBBB800101',5018,'2000-11-10 00:00:00',667.00),(1010,'BBBB800101',5018,'2002-03-29 00:00:00',523.00),(1020,'CCCC800101',5002,'2001-07-29 00:00:00',582.00),(1020,'CCCC800101',5017,'1999-02-04 00:00:00',8.00),(1020,'CCCC800101',5017,'2001-05-04 00:00:00',478.00),(1030,'DDDD800101',5003,'1998-02-21 00:00:00',202.00),(1030,'DDDD800101',5016,'1998-04-09 00:00:00',139.00),(1030,'DDDD800101',5016,'2000-11-05 00:00:00',295.00),(1040,'EEEE800101',5004,'1999-12-11 00:00:00',263.00),(1040,'EEEE800101',5015,'2000-06-10 00:00:00',546.00),(1040,'EEEE800101',5015,'2002-07-12 00:00:00',540.00),(1050,'FFFF800101',5005,'2000-10-14 00:00:00',503.00),(1050,'FFFF800101',5014,'1999-03-07 00:00:00',623.00),(1050,'FFFF800101',5014,'1999-06-04 00:00:00',90.00),(1060,'GGGG800101',5006,'2000-05-04 00:00:00',324.00),(1060,'GGGG800101',5013,'2000-01-02 00:00:00',692.00),(1060,'GGGG800101',5013,'2000-07-10 00:00:00',47.00),(1070,'HHHH800101',5007,'1998-02-23 00:00:00',2.00),(1070,'HHHH800101',5012,'1999-12-03 00:00:00',503.00),(1070,'HHHH800101',5012,'2000-04-01 00:00:00',516.00),(1080,'AAAA800101',5008,'1999-01-12 00:00:00',86.00),(1080,'AAAA800101',5011,'2002-11-07 00:00:00',699.00),(1090,'BBBB800101',5009,'2000-08-01 00:00:00',73.00),(1090,'BBBB800101',5010,'1998-01-03 00:00:00',421.00),(1090,'BBBB800101',5010,'1998-06-06 00:00:00',612.00),(1100,'CCCC800101',5009,'2000-08-06 00:00:00',466.00),(1100,'CCCC800101',5009,'2002-05-07 00:00:00',523.00),(1100,'CCCC800101',5010,'2001-09-10 00:00:00',699.00),(1110,'DDDD800101',5008,'1999-05-10 00:00:00',337.00),(1110,'DDDD800101',5008,'2000-02-09 00:00:00',292.00),(1120,'EEEE800101',5007,'1998-03-12 00:00:00',167.00),(1120,'EEEE800101',5007,'2001-07-07 00:00:00',692.00),(1120,'EEEE800101',5012,'2001-04-03 00:00:00',215.00),(1130,'FFFF800101',5006,'1999-05-06 00:00:00',673.00),(1130,'FFFF800101',5006,'2002-07-06 00:00:00',562.00),(1130,'FFFF800101',5013,'2002-04-04 00:00:00',63.00),(1140,'GGGG800101',5005,'1998-02-07 00:00:00',651.00),(1140,'GGGG800101',5005,'2001-09-02 00:00:00',583.00),(1140,'GGGG800101',5014,'2001-07-12 00:00:00',219.00),(1150,'HHHH800101',5004,'2001-08-10 00:00:00',453.00),(1150,'HHHH800101',5015,'1999-03-04 00:00:00',458.00),(1160,'AAAA800101',5016,'2000-06-01 00:00:00',162.00),(1160,'AAAA800101',5019,'1999-06-09 00:00:00',244.00),(1160,'AAAA800101',5019,'2002-02-08 00:00:00',665.00),(1170,'BBBB800101',5017,'1998-02-04 00:00:00',180.00),(1170,'BBBB800101',5018,'1999-11-12 00:00:00',53.00),(1170,'BBBB800101',5018,'2001-08-06 00:00:00',517.00),(1180,'CCCC800101',5017,'2001-03-03 00:00:00',334.00),(1180,'CCCC800101',5017,'2001-06-01 00:00:00',216.00),(1180,'CCCC800101',5018,'2002-06-14 00:00:00',407.00),(1190,'DDDD800101',5016,'2000-02-04 00:00:00',356.00),(1190,'DDDD800101',5019,'1998-09-12 00:00:00',94.00),(1200,'EEEE800101',5000,'2000-03-05 00:00:00',177.00),(1200,'EEEE800101',5015,'2000-05-06 00:00:00',585.00),(1200,'EEEE800101',5015,'2000-07-10 00:00:00',653.00),(1210,'FFFF800101',5001,'1999-11-05 00:00:00',43.00),(1210,'FFFF800101',5014,'2001-09-06 00:00:00',479.00),(1210,'FFFF800101',5014,'2001-11-03 00:00:00',70.00),(1220,'GGGG800101',5002,'2003-02-01 00:00:00',24.00),(1220,'GGGG800101',5013,'2001-02-08 00:00:00',653.00),(1220,'GGGG800101',5013,'2002-07-04 00:00:00',658.00),(1230,'HHHH800101',5003,'2003-01-06 00:00:00',530.00),(1230,'HHHH800101',5012,'1999-03-08 00:00:00',115.00),(1230,'HHHH800101',5012,'2002-12-09 00:00:00',312.00),(1240,'AAAA800101',5004,'2003-01-12 00:00:00',152.00),(1240,'AAAA800101',5011,'2000-08-12 00:00:00',366.00),(1250,'BBBB800101',5005,'2002-07-08 00:00:00',71.00),(1250,'BBBB800101',5010,'1998-05-08 00:00:00',690.00),(1250,'BBBB800101',5010,'2002-04-04 00:00:00',691.00),(1260,'CCCC800101',5006,'1999-05-10 00:00:00',460.00),(1260,'CCCC800101',5009,'1999-08-09 00:00:00',631.00),(1260,'CCCC800101',5009,'2003-02-10 00:00:00',200.00),(1270,'DDDD800101',5007,'1999-03-10 00:00:00',506.00),(1270,'DDDD800101',5008,'1997-09-03 00:00:00',546.00),(1270,'DDDD800101',5008,'2002-04-12 00:00:00',324.00),(1280,'EEEE800101',5007,'2000-02-03 00:00:00',331.00),(1280,'EEEE800101',5007,'2002-12-07 00:00:00',448.00),(1280,'EEEE800101',5008,'2002-07-29 00:00:00',107.00),(1290,'FFFF800101',5006,'1999-01-07 00:00:00',336.00),(1290,'FFFF800101',5006,'2001-02-08 00:00:00',279.00),(1290,'FFFF800101',5009,'1998-01-08 00:00:00',132.00),(1300,'GGGG800101',5005,'2002-06-10 00:00:00',521.00),(1300,'GGGG800101',5005,'2003-02-02 00:00:00',457.00),(1300,'GGGG800101',5010,'2003-01-08 00:00:00',119.00),(1310,'HHHH800101',5011,'2002-04-12 00:00:00',72.00),(1310,'HHHH800101',5019,'2000-08-03 00:00:00',463.00),(1310,'HHHH800101',5019,'2002-10-02 00:00:00',199.00),(1320,'AAAA800101',5012,'2003-01-06 00:00:00',698.00),(1320,'AAAA800101',5018,'1999-12-03 00:00:00',163.00),(1320,'AAAA800101',5018,'2000-03-07 00:00:00',413.00),(1330,'BBBB800101',5013,'1998-12-10 00:00:00',554.00),(1330,'BBBB800101',5017,'1998-06-12 00:00:00',558.00),(1330,'BBBB800101',5017,'2000-08-11 00:00:00',93.00),(1340,'CCCC800101',5014,'2002-12-02 00:00:00',324.00),(1340,'CCCC800101',5016,'1998-11-06 00:00:00',674.00),(1340,'CCCC800101',5016,'1999-02-10 00:00:00',11.00),(1350,'DDDD800101',5015,'1999-05-09 00:00:00',272.00),(1350,'DDDD800101',5015,'1999-06-05 00:00:00',330.00),(1350,'DDDD800101',5015,'1999-08-02 00:00:00',261.00),(1360,'EEEE800101',5014,'2001-07-06 00:00:00',37.00),(1360,'EEEE800101',5014,'2002-04-07 00:00:00',265.00),(1360,'EEEE800101',5016,'2000-11-07 00:00:00',364.00),(1370,'FFFF800101',5013,'2000-04-08 00:00:00',575.00),(1370,'FFFF800101',5013,'2002-06-05 00:00:00',423.00),(1370,'FFFF800101',5017,'2000-02-12 00:00:00',44.00),(1380,'GGGG800101',5012,'1998-07-08 00:00:00',645.00),(1380,'GGGG800101',5012,'2001-02-01 00:00:00',147.00),(1380,'GGGG800101',5018,'2002-03-03 00:00:00',302.00),(1390,'HHHH800101',5011,'2001-11-08 00:00:00',697.00),(1390,'HHHH800101',5011,'2002-01-06 00:00:00',308.00),(1390,'HHHH800101',5019,'2003-01-12 00:00:00',107.00),(1400,'AAAA800101',5000,'2002-03-12 00:00:00',382.00),(1400,'AAAA800101',5010,'1998-06-05 00:00:00',116.00),(1400,'AAAA800101',5010,'2002-05-03 00:00:00',441.00),(1410,'BBBB800101',5001,'2000-02-05 00:00:00',601.00),(1410,'BBBB800101',5009,'2002-05-03 00:00:00',467.00),(1410,'BBBB800101',5009,'2002-11-05 00:00:00',461.00),(1420,'CCCC800101',5002,'1998-04-07 00:00:00',603.00),(1420,'CCCC800101',5008,'2000-08-02 00:00:00',278.00),(1420,'CCCC800101',5008,'2001-02-12 00:00:00',444.00),(1430,'DDDD800101',5003,'1999-09-02 00:00:00',576.00),(1430,'DDDD800101',5007,'1998-01-09 00:00:00',13.00),(1430,'DDDD800101',5007,'2002-06-10 00:00:00',506.00);
UNLOCK TABLES;

--
-- Table structure for table `Entregas2000`
--

DROP TABLE IF EXISTS `Entregas2000`;
CREATE TABLE `Entregas2000` (
  `Descripcion` varchar(50) DEFAULT NULL
);

--
-- Dumping data for table `Entregas2000`
--

LOCK TABLES `Entregas2000` WRITE;
UNLOCK TABLES;

--
-- Table structure for table `ImporteEntregas`
--

DROP TABLE IF EXISTS `ImporteEntregas`;
CREATE TABLE `ImporteEntregas` (
  `Importe` decimal(27,10) DEFAULT NULL
);

--
-- Dumping data for table `ImporteEntregas`
--

LOCK TABLES `ImporteEntregas` WRITE;
UNLOCK TABLES;

--
-- Table structure for table `Materiales`
--

DROP TABLE IF EXISTS `Materiales`;
CREATE TABLE `Materiales` (
  `Clave` decimal(5,0) NOT NULL,
  `Descripcion` varchar(50) DEFAULT NULL,
  `Costo` decimal(8,2) DEFAULT NULL,
  `PorcentajeImpuesto` decimal(6,2) DEFAULT NULL
);

--
-- Dumping data for table `Materiales`
--

LOCK TABLES `Materiales` WRITE;
INSERT INTO `Materiales` VALUES (1000,'Varilla 3/16',100.00,2.00),(1010,'Varilla 4/32',115.00,2.02),(1020,'Varilla 3/17',130.00,2.04),(1030,'Varilla 4/33',145.00,2.06),(1040,'Varilla 3/18',160.00,2.08),(1050,'Varilla 4/34',175.00,2.10),(1060,'Varilla 3/19',190.00,2.12),(1070,'Varilla 4/35',205.00,2.14),(1080,'Ladrillos rojos',50.00,2.16),(1090,'Ladrillos grises',35.00,2.18),(1100,'Block',30.00,2.20),(1110,'Megablock',40.00,2.22),(1120,'Sillar rosa',100.00,2.24),(1130,'Sillar gris',110.00,2.26),(1140,'Cantera blanca',200.00,2.28),(1150,'Cantera gris',1210.00,2.30),(1160,'Cantera rosa',1420.00,2.32),(1170,'Cantera amarilla',230.00,2.34),(1180,'Recubrimiento P1001',200.00,2.36),(1190,'Recubrimiento P1010',220.00,2.38),(1200,'Recubrimiento P1019',240.00,2.40),(1210,'Recubrimiento P1028',250.00,2.42),(1220,'Recubrimiento P1037',280.00,2.44),(1230,'Cemento ',300.00,2.46),(1240,'Arena',200.00,2.48),(1250,'Grava',100.00,2.50),(1260,'Gravilla',90.00,2.52),(1270,'Tezontle',80.00,2.54),(1280,'Tepetate',34.00,2.56),(1290,'Tuberia 3.5',200.00,2.58),(1300,'Tuberia 4.3',210.00,2.60),(1310,'Tuberia 3.6',220.00,2.62),(1320,'Tuberia 4.4',230.00,2.64),(1330,'Tuberia 3.7',240.00,2.66),(1340,'Tuberia 4.5',250.00,2.68),(1350,'Tuberia 3.8',260.00,2.70),(1360,'Pintura C1010',125.00,2.72),(1370,'Pintura B1020',125.00,2.74),(1380,'Pintura C1011',725.00,2.76),(1390,'Pintura B1021',125.00,2.78),(1400,'Pintura C1011',125.00,2.80),(1410,'Pintura B1021',125.00,2.82),(1420,'Pintura C1012',125.00,2.84),(1430,'Pintura B1022',125.00,2.86),(1440,'Valla Movil',160.00,2.20),(1450,'Madera Nogal',200.00,4.00),(1460,'Placa de yeso laminado',100.00,2.10),(1470,'Bloque de vidrio',230.00,3.20),(1480,'Fibrocemento',300.00,5.00);

UNLOCK TABLES;

--
-- Table structure for table `Primeros3Proyectos`
--

DROP TABLE IF EXISTS `Primeros3Proyectos`;
CREATE TABLE `Primeros3Proyectos` (
  `Numero` decimal(5,0) DEFAULT NULL,
  `Denominacion` varchar(50) DEFAULT NULL
);

--
-- Dumping data for table `Primeros3Proyectos`
--

LOCK TABLES `Primeros3Proyectos` WRITE;
UNLOCK TABLES;

--
-- Table structure for table `Proveedores`
--

DROP TABLE IF EXISTS `Proveedores`;
CREATE TABLE `Proveedores` (
  `RFC` char(13) NOT NULL,
  `RazonSocial` varchar(50) DEFAULT NULL
);

--
-- Dumping data for table `Proveedores`
--

LOCK TABLES `Proveedores` WRITE;
INSERT INTO `Proveedores` VALUES ('AAAA800101','La fragua'),('BBBB800101','Oviedo'),('CCCC800101','La Ferre'),('DDDD800101','Cecoferre'),('EEEE800101','Alvin'),('FFFF800101','Comex'),('GGGG800101','Tabiquera del centro'),('HHHH800101','Tubasa');
UNLOCK TABLES;

--
-- Table structure for table `ProveedoresEducandoCoahuila`
--

DROP TABLE IF EXISTS `ProveedoresEducandoCoahuila`;
CREATE TABLE `ProveedoresEducandoCoahuila` (
  `RFC` char(13) DEFAULT NULL
);

--
-- Dumping data for table `ProveedoresEducandoCoahuila`
--

LOCK TABLES `ProveedoresEducandoCoahuila` WRITE;
UNLOCK TABLES;

--
-- Table structure for table `ProveedoresTelevisaEnAccion`
--

DROP TABLE IF EXISTS `ProveedoresTelevisaEnAccion`;
CREATE TABLE `ProveedoresTelevisaEnAccion` (
  `RFC` char(13) DEFAULT NULL,
  `RazonSocial` varchar(50) DEFAULT NULL,
  `Denominacion` varchar(50) DEFAULT NULL
);

--
-- Dumping data for table `ProveedoresTelevisaEnAccion`
--

LOCK TABLES `ProveedoresTelevisaEnAccion` WRITE;
UNLOCK TABLES;

--
-- Table structure for table `Proyectos`
--

DROP TABLE IF EXISTS `Proyectos`;
CREATE TABLE `Proyectos` (
  `Numero` decimal(5,0) NOT NULL,
  `Denominacion` varchar(50) DEFAULT NULL
);

--
-- Dumping data for table `Proyectos`
--

LOCK TABLES `Proyectos` WRITE;
INSERT INTO `Proyectos` VALUES (5000,'Vamos Mexico'),(5001,'Aztecon'),(5002,'CIT Campeche'),(5003,'Mexico sin ti no estamos completos'),(5004,'Educando en Coahuila'),(5005,'Infonavit Durango'),(5006,'Reconstruccion del templo de Guadalupe'),(5007,'Construccion de plaza Magnolias'),(5008,'Televisa en accion'),(5009,'Disco Atlantic'),(5010,'Construccion de Hospital Infantil'),(5011,'Remodelacion de aulas del IPP'),(5012,'Restauracion de instalaciones del CEA'),(5013,'Reparacion de la plaza Sonora'),(5014,'Remodelacion de Soriana'),(5015,'CIT Yucatan'),(5016,'Ampliacion de la carretera a la huasteca'),(5017,'Reparacion de la carretera del sol'),(5018,'Tu cambio por la educacion'),(5019,'Queretaro limpio');
UNLOCK TABLES;


--
-- Dumping routines for database 'dawbdorg_A01704340'
--
DROP PROCEDURE IF EXISTS `creaEntrega`;

DELIMITER ;;
CREATE PROCEDURE `creaEntrega`(uclave NUMERIC(5,0), urfc CHAR(13), unumero NUMERIC(5,0), ufecha DATETIME, ucantidad NUMERIC(8,2))
BEGIN
	INSERT INTO Entregan VALUES(uclave, urfc, unumero, ufecha, ucantidad);
END ;;
DELIMITER ;


DROP PROCEDURE IF EXISTS `creaMaterial` ;

DELIMITER ;;
CREATE PROCEDURE `creaMaterial`( uclave NUMERIC(5,0), udescripcion VARCHAR(50), ucosto NUMERIC (8,2), uimpuesto NUMERIC(6,2))
BEGIN
	INSERT INTO Materiales VALUES(uclave, udescripcion, ucosto, uimpuesto);
END ;;
DELIMITER ;

DROP PROCEDURE IF EXISTS `creaProveedor` 
DELIMITER ;;
CREATE PROCEDURE `creaProveedor`( urfc CHAR(13), urazonsocial VARCHAR(50))
BEGIN
	INSERT INTO Proveedores VALUES(urfc, urazonsocial);
END ;;
DELIMITER ;

DROP PROCEDURE IF EXISTS `creaProyecto`;
DELIMITER ;;
CREATE PROCEDURE `creaProyecto`( unumero NUMERIC(5,0), udenominacion VARCHAR(50))
BEGIN
	INSERT INTO Proyectos VALUES(unumero, udenominacion);
END ;;
DELIMITER ;

DROP PROCEDURE IF EXISTS `eliminaEntrega`;
DELIMITER ;;
CREATE PROCEDURE `eliminaEntrega`(uclave NUMERIC(5,0), urfc CHAR(13), unumero NUMERIC(5,0), ufecha DATETIME)
BEGIN
	DELETE FROM Entregan WHERE Clave = uclave AND RFC = urfc AND Numero = unumero AND Fecha = ufecha;
END ;;
DELIMITER ;

DROP PROCEDURE IF EXISTS `eliminaMaterial` 
DELIMITER ;;
CREATE PROCEDURE `eliminaMaterial`( uclave NUMERIC(5,0))
BEGIN
	DELETE FROM Materiales WHERE Clave = uclave;
END ;;
DELIMITER ;

DROP PROCEDURE IF EXISTS `eliminaProveedor` 
DELIMITER ;;
CREATE PROCEDURE `eliminaProveedor`( urfc CHAR(13))
BEGIN
	DELETE FROM Proveedores WHERE RFC = urfc;
END ;;
DELIMITER ;

DROP PROCEDURE IF EXISTS `eliminaProyecto` 
DELIMITER ;;
CREATE PROCEDURE `eliminaProyecto`( unumero NUMERIC(5,0))
BEGIN
	DELETE FROM Proyectos WHERE Numero = unumero;
END ;;
DELIMITER ;

DROP PROCEDURE IF EXISTS `modificaEntrega` 
DELIMITER ;;
CREATE PROCEDURE `modificaEntrega`(uclave NUMERIC(5,0), urfc CHAR(13), unumero NUMERIC(5,0), ufecha DATETIME, ucantidad NUMERIC(8,2))
BEGIN
	UPDATE Entregan SET Cantidad = ucantidad WHERE Clave = uclave AND RFC = urfc AND Numero = unumero AND Fecha = ufecha;
END ;;
DELIMITER ;

DROP PROCEDURE IF EXISTS `modificaMaterial` 
DELIMITER ;;
CREATE PROCEDURE `modificaMaterial`( uclave NUMERIC(5,0), udescripcion VARCHAR(50), ucosto NUMERIC (8,2), uimpuesto NUMERIC(6,2))
BEGIN
	UPDATE Materiales SET Descripcion = udescripcion, Costo = ucosto, PorcentajeImpuesto = uimpuesto WHERE Clave = uclave;
END ;;
DELIMITER ;

DROP PROCEDURE IF EXISTS `modificaProveedor` 
DELIMITER ;;
CREATE PROCEDURE `modificaProveedor`( urfc CHAR(13), urazonsocial VARCHAR(50))
BEGIN
	UPDATE Proveedores SET RazonSocial = urazonsocial WHERE RFC = urfc;
END ;;
DELIMITER ;

DROP PROCEDURE IF EXISTS `modificaProyecto` 
DELIMITER ;;
CREATE PROCEDURE `modificaProyecto`( unumero NUMERIC(5,0), udenominacion VARCHAR(50))
BEGIN
	UPDATE Proyectos SET Denominacion = udenominacion WHERE Numero = unumero;
END ;;
DELIMITER ;

DROP PROCEDURE IF EXISTS `queryMaterial` 
DELIMITER ;;
CREATE PROCEDURE `queryMaterial`(udescripcion VARCHAR(50), ucosto NUMERIC(8,2))
BEGIN
	SELECT * FROM Materiales WHERE Descripcion
    LIKE concat('%', udescripcion , '%') AND Costo > ucosto;
END ;;
DELIMITER ;