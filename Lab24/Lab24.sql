-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 23, 2020 at 09:58 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Lab24`
--

-- --------------------------------------------------------

--
-- Table structure for table `CLIENTES_BANCA`
--

CREATE TABLE `CLIENTES_BANCA` (
  `NoCuenta` varchar(5) NOT NULL,
  `Nombre` varchar(30) NOT NULL,
  `Saldo` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `CLIENTES_BANCA`
--

INSERT INTO `CLIENTES_BANCA` (`NoCuenta`, `Nombre`, `Saldo`) VALUES
('001', 'Manuel Rios Maldonado', '9000.00'),
('002', 'Pablo Perez Ortiz', '5000.00'),
('003', 'Luis Flores Alvarado', '8000.00');

-- --------------------------------------------------------

--
-- Table structure for table `MOVIMIENTOS`
--

CREATE TABLE `MOVIMIENTOS` (
  `NoCuenta` varchar(5) NOT NULL,
  `ClaveM` varchar(2) NOT NULL,
  `Fecha` datetime NOT NULL,
  `Monto` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `TIPOS_MOVIMIENTO`
--

CREATE TABLE `TIPOS_MOVIMIENTO` (
  `ClaveM` varchar(2) NOT NULL,
  `Descripcion` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `CLIENTES_BANCA`
--
ALTER TABLE `CLIENTES_BANCA`
  ADD PRIMARY KEY (`NoCuenta`);

--
-- Indexes for table `MOVIMIENTOS`
--
ALTER TABLE `MOVIMIENTOS`
  ADD PRIMARY KEY (`NoCuenta`,`ClaveM`,`Fecha`),
  ADD KEY `NoCuenta` (`NoCuenta`),
  ADD KEY `ClaveM` (`ClaveM`);

--
-- Indexes for table `TIPOS_MOVIMIENTO`
--
ALTER TABLE `TIPOS_MOVIMIENTO`
  ADD PRIMARY KEY (`ClaveM`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `MOVIMIENTOS`
--
ALTER TABLE `MOVIMIENTOS`
  ADD CONSTRAINT `MOVIMIENTOS_ibfk_1` FOREIGN KEY (`ClaveM`) REFERENCES `TIPOS_MOVIMIENTO` (`ClaveM`) ON UPDATE CASCADE,
  ADD CONSTRAINT `MOVIMIENTOS_ibfk_2` FOREIGN KEY (`NoCuenta`) REFERENCES `CLIENTES_BANCA` (`NoCuenta`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
