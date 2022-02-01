-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: hospital
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `doctors`
--

DROP TABLE IF EXISTS `doctors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctors` (
  `Names` varchar(50) DEFAULT NULL,
  `sex` varchar(10) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `qualification` varchar(30) DEFAULT NULL,
  `doctor_id` bigint NOT NULL,
  `Tel` int DEFAULT NULL,
  `DoB` date DEFAULT NULL,
  PRIMARY KEY (`doctor_id`),
  UNIQUE KEY `Tel` (`Tel`),
  CONSTRAINT `doctors_DoB` CHECK (((2022 - year(`DoB`)) >= 18))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctors`
--

LOCK TABLES `doctors` WRITE;
/*!40000 ALTER TABLE `doctors` DISABLE KEYS */;
INSERT INTO `doctors` VALUES ('Imanishimwe Djabel','male','Musanze','2022-01-30 10:28:17','dentist',1979332218989193,789391322,'1980-08-27'),('Muhoza Ericka','female','Ruhango','2022-01-30 10:08:56','optician',1979378452746368,789393112,'1990-05-17'),('Mahoro Peace','female','Nyabihu','2022-01-30 10:10:17','conselor',1983332218989193,789391312,'1981-03-23'),('Dushime Joyce','female','Rulindo','2022-01-30 10:29:25','diet counselor',1989332218989893,789398322,'1995-07-03'),('Niyomungeri Erick','male','kigali','2022-01-30 10:07:26','surgery',1989378452746268,781393111,'1985-04-23');
/*!40000 ALTER TABLE `doctors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medicine`
--

DROP TABLE IF EXISTS `medicine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medicine` (
  `Name` varchar(30) NOT NULL,
  `MedCode` int NOT NULL,
  `type` varchar(20) DEFAULT NULL,
  `price_RWF` int DEFAULT NULL,
  PRIMARY KEY (`MedCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicine`
--

LOCK TABLES `medicine` WRITE;
/*!40000 ALTER TABLE `medicine` DISABLE KEYS */;
INSERT INTO `medicine` VALUES ('Amoxicillin',12011843,'capsules',5000),('Palecetamol',12334343,'pills',2000),('Amostaline',12334843,'fluid',3000),('Acetaminophen',13311843,'capsules',10000),('Quartem',13334843,'capsules',1000);
/*!40000 ALTER TABLE `medicine` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patients`
--

DROP TABLE IF EXISTS `patients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patients` (
  `Names` varchar(50) DEFAULT NULL,
  `PatNumber` int NOT NULL AUTO_INCREMENT,
  `sex` varchar(10) DEFAULT NULL,
  `disease` varchar(30) DEFAULT NULL,
  `address` varchar(30) DEFAULT NULL,
  `date_regitered` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `DoB` date DEFAULT NULL,
  PRIMARY KEY (`PatNumber`),
  CONSTRAINT `patients_DoB` CHECK (((2022 - year(`DoB`)) >= 18))
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patients`
--

LOCK TABLES `patients` WRITE;
/*!40000 ALTER TABLE `patients` DISABLE KEYS */;
INSERT INTO `patients` VALUES ('Muhoza Angelique',1,'female','malaria','nyabihu','2022-01-30 10:43:52','1991-03-23'),('Uwimana Anne',2,'female','diabet','Nyanza','2022-01-30 10:48:03','1981-04-03'),('Uwayezu Edmond',3,'male','constipation','Nyamagabe','2022-01-30 10:48:56','1971-02-03'),('Mugisha Ezel',4,'male','lung cancer','Gicumbi','2022-01-30 10:50:34','1991-04-01'),('Irumva Edie',5,'male','alzheimers','Kamonyi','2022-01-30 10:51:24','1988-03-01');
/*!40000 ALTER TABLE `patients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room`
--

DROP TABLE IF EXISTS `room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `room` (
  `type` varchar(50) NOT NULL,
  `RNumber` int NOT NULL AUTO_INCREMENT,
  `inCharge` varchar(40) DEFAULT NULL,
  `capacity` int DEFAULT NULL,
  PRIMARY KEY (`RNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room`
--

LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
INSERT INTO `room` VALUES ('ER',1,'N.Bosco',10),('consultation room',2,'I.Herve',15),('tests room',3,'I.Alphonse',25),('director_room',4,'U.Alice',5),('waiting_room',5,'Erick, Edmond',995);
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-31 15:40:27
