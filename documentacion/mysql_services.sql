-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Generation Time: Mar 14, 2022 at 03:36 AM
-- Server version: 8.0.22-13
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bzrbpden1ccpeefjlha2`
--
CREATE DATABASE IF NOT EXISTS `bzrbpden1ccpeefjlha2` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `bzrbpden1ccpeefjlha2`;

-- --------------------------------------------------------

--
-- Table structure for table `areas`
--

CREATE TABLE `areas` (
  `id` int NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `areas`
--

INSERT INTO `areas` (`id`, `nombre`) VALUES
(1, 'Area uno'),
(2, 'AREA637'),
(3, 'AREA613'),
(4, 'AREA75'),
(5, 'AREA462'),
(6, 'AREA845'),
(7, 'AREA984'),
(8, 'AREA577'),
(9, 'AREA282'),
(10, 'AREA674'),
(11, 'AREA747'),
(12, 'AREA277'),
(13, 'AREA370'),
(14, 'AREA103'),
(15, 'AREA445'),
(16, 'AREA155'),
(17, 'AREA958'),
(18, 'AREA958'),
(19, 'AREA44'),
(20, 'AREA587'),
(21, 'AREA62'),
(22, 'AREA227'),
(23, 'AREA582'),
(24, 'AREA322'),
(25, 'AREA542'),
(26, 'AREA494'),
(27, 'AREA807'),
(28, 'AREA587'),
(29, 'AREA549'),
(30, 'AREA792'),
(31, 'AREA926'),
(32, 'AREA175'),
(33, 'AREA771'),
(34, 'AREA111'),
(35, 'AREA657'),
(36, 'AREA443'),
(37, 'AREA568'),
(38, 'AREA247'),
(39, 'AREA265'),
(40, 'AREA408'),
(41, 'AREA429'),
(42, 'AREA47'),
(43, 'AREA814'),
(44, 'AREA57'),
(45, 'AREA619'),
(46, 'AREA325'),
(47, 'AREA378'),
(48, 'AREA824'),
(49, 'AREA436');

-- --------------------------------------------------------

--
-- Table structure for table `empleados`
--

CREATE TABLE `empleados` (
  `id` int NOT NULL,
  `nombres` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `documento` varchar(25) NOT NULL,
  `tipodocumento` int NOT NULL,
  `subarea` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `empleados`
--

INSERT INTO `empleados` (`id`, `nombres`, `apellidos`, `documento`, `tipodocumento`, `subarea`) VALUES
(4, 'JOSE LUIS', 'HERNANDEZ', '0000002277', 3, 5),
(5, 'MIGUEL ANGEL', 'GARCIA', '0000003754', 7, 36),
(6, 'FRANCISCO', 'MARTINEZ', '0000003580', 3, 15),
(7, 'JUAN', 'LOPEZ', '0000006564', 5, 21),
(8, 'JESUS', 'GONZALEZ', '0000002080', 4, 31),
(9, 'ALEJANDRO', 'RODRIGUEZ', '0000004134', 4, 9),
(10, 'ANTONIO', 'PEREZ', '0000002260', 7, 25),
(11, 'JORGE', 'SANCHEZ', '0000004136', 8, 22),
(12, 'PEDRO', 'RAMIREZ', '0000000382', 5, 34),
(13, 'CARLOS', 'FLORES', '0000005827', 1, 15),
(14, 'ROBERTO', 'CRUZ', '0000007794', 2, 23),
(15, 'JUAN CARLOS', 'GOMEZ', '0000004546', 1, 38),
(16, 'JAVIER', 'MORALES', '0000006186', 1, 10),
(17, 'JOSE', 'VAZQUEZ', '0000004368', 8, 2),
(18, 'FERNANDO', 'JIMENEZ', '0000005215', 7, 8),
(19, 'FRANCISCO JAVIER', 'REYES', '0000002588', 1, 3),
(20, 'ARTURO', 'DIAZ', '0000008522', 5, 15),
(21, 'MANUEL', 'TORRES', '0000002570', 7, 9),
(22, 'RAUL', 'GUTIERREZ', '0000003457', 1, 43),
(23, 'RICARDO', 'RUIZ', '0000007871', 3, 21),
(24, 'RAFAEL', 'AGUILAR', '0000003306', 2, 33),
(25, 'MARTIN', 'MENDOZA', '0000002384', 2, 15),
(26, 'MARCO ANTONIO', 'CASTILLO', '0000007481', 2, 8),
(27, 'MIGUEL', 'ORTIZ', '0000000483', 3, 19),
(28, 'MARIA GUADALUPE', 'MORENO', '0000000524', 4, 23),
(29, 'LETICIA', 'RIVERA', '0000007849', 7, 11),
(30, 'PATRICIA', 'RAMOS', '0000007730', 8, 44),
(31, 'GUADALUPE', 'ROMERO', '0000003550', 3, 28),
(32, 'MARIA DEL CARMEN', 'JUAREZ', '0000001287', 4, 46),
(33, 'VERONICA', 'ALVAREZ', '0000008371', 5, 34),
(34, 'MARGARITA', 'MENDEZ', '0000008390', 4, 37),
(35, 'ELIZABETH', 'CHAVEZ', '0000003523', 2, 49),
(36, 'SILVIA', 'HERRERA', '0000000553', 2, 27),
(37, 'ROSA MARIA', 'MEDINA', '0000005254', 2, 47),
(38, 'MARIA ELENA', 'DOMINGUEZ', '0000008680', 4, 19),
(39, 'YOLANDA', 'CASTRO', '0000007721', 7, 36),
(40, 'GABRIELA', 'GUZMAN', '0000006695', 8, 4),
(41, 'JUANA', 'VARGAS', '0000003459', 4, 47),
(42, 'ADRIANA', 'VELAZQUEZ', '0000005640', 6, 24),
(43, 'ARACELI', 'SALAZAR', '0000006011', 1, 17),
(44, 'MARTHA', 'ROJAS', '0000008095', 8, 34),
(45, 'ANA MARIA', 'ORTEGA', '0000004669', 5, 5),
(46, 'MARIBEL', 'CORTES', '0000008256', 6, 44),
(47, 'ALICIA', 'SANTIAGO', '0000001042', 1, 23),
(48, 'ALEJANDRA', 'GUERRERO', '0000004597', 5, 5),
(49, 'CLAUDIA', 'CONTRERAS', '0000003186', 2, 41),
(50, 'LAURA', 'BAUTISTA', '0000008145', 7, 6),
(51, 'IRMA', 'ESTRADA', '0000004546', 6, 22),
(52, '', 'LUNA', '0000000967', 8, 30);

-- --------------------------------------------------------

--
-- Table structure for table `subareas`
--

CREATE TABLE `subareas` (
  `id` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `area` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `subareas`
--

INSERT INTO `subareas` (`id`, `nombre`, `area`) VALUES
(1, 'sub area uno', 1),
(2, 'SUBAREA205', 15),
(3, 'SUBAREA657', 47),
(4, 'SUBAREA147', 20),
(5, 'SUBAREA207', 31),
(6, 'SUBAREA66', 30),
(7, 'SUBAREA466', 29),
(8, 'SUBAREA387', 42),
(9, 'SUBAREA292', 3),
(10, 'SUBAREA167', 6),
(11, 'SUBAREA506', 16),
(12, 'SUBAREA579', 19),
(13, 'SUBAREA614', 49),
(14, 'SUBAREA351', 28),
(15, 'SUBAREA770', 21),
(16, 'SUBAREA234', 45),
(17, 'SUBAREA28', 28),
(18, 'SUBAREA974', 35),
(19, 'SUBAREA321', 2),
(20, 'SUBAREA885', 38),
(21, 'SUBAREA161', 46),
(22, 'SUBAREA738', 34),
(23, 'SUBAREA272', 19),
(24, 'SUBAREA201', 38),
(25, 'SUBAREA90', 15),
(26, 'SUBAREA228', 34),
(27, 'SUBAREA828', 26),
(28, 'SUBAREA787', 25),
(29, 'SUBAREA436', 46),
(30, 'SUBAREA434', 37),
(31, 'SUBAREA262', 38),
(32, 'SUBAREA716', 9),
(33, 'SUBAREA631', 20),
(34, 'SUBAREA734', 36),
(35, 'SUBAREA78', 22),
(36, 'SUBAREA462', 20),
(37, 'SUBAREA362', 24),
(38, 'SUBAREA120', 43),
(39, 'SUBAREA380', 23),
(40, 'SUBAREA137', 31),
(41, 'SUBAREA40', 19),
(42, 'SUBAREA175', 18),
(43, 'SUBAREA450', 15),
(44, 'SUBAREA224', 6),
(45, 'SUBAREA81', 15),
(46, 'SUBAREA557', 7),
(47, 'SUBAREA223', 21),
(48, 'SUBAREA846', 47),
(49, 'SUBAREA149', 4),
(50, 'SUBAREA308', 25);

-- --------------------------------------------------------

--
-- Table structure for table `tiposdocumentos`
--

CREATE TABLE `tiposdocumentos` (
  `id` int NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tiposdocumentos`
--

INSERT INTO `tiposdocumentos` (`id`, `nombre`) VALUES
(1, 'PARTIDA DE NACIMIENTO'),
(2, 'SIN DOCUMENTO'),
(3, 'DUI'),
(4, 'NIT'),
(5, 'DUI'),
(6, 'NIT'),
(7, 'CARNET DE ESTUDIANTE'),
(8, 'PASAPORTE');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `areas`
--
ALTER TABLE `areas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id`),
  ADD KEY `empleadotipodocumento` (`tipodocumento`),
  ADD KEY `empleadosubarea` (`subarea`);

--
-- Indexes for table `subareas`
--
ALTER TABLE `subareas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `areasubarea` (`area`);

--
-- Indexes for table `tiposdocumentos`
--
ALTER TABLE `tiposdocumentos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `areas`
--
ALTER TABLE `areas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `subareas`
--
ALTER TABLE `subareas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `tiposdocumentos`
--
ALTER TABLE `tiposdocumentos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `empleados`
--
ALTER TABLE `empleados`
  ADD CONSTRAINT `empleadosubarea` FOREIGN KEY (`subarea`) REFERENCES `subareas` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `empleadotipodocumento` FOREIGN KEY (`tipodocumento`) REFERENCES `tiposdocumentos` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `subareas`
--
ALTER TABLE `subareas`
  ADD CONSTRAINT `areasubarea` FOREIGN KEY (`area`) REFERENCES `areas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
