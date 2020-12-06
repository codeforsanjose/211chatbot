-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 06, 2020 at 05:07 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `211Sonoma`
--

-- --------------------------------------------------------

--
-- Table structure for table `other_words`
--

DROP TABLE IF EXISTS `other_words`;
CREATE TABLE `other_words` (
  `word` varchar(256) DEFAULT NULL,
  `other` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `other_words`
--

INSERT INTO `other_words` (`word`, `other`) VALUES
('calfresh', 117),
('house', 563),
('houses', 314),
('rental', 455),
('homelessness', 563),
('class', 290),
('complain', 571),
('complaining', 571),
('covid-19', 17),
('schools', 290),
('applications', 451),
('rents', 455),
('apartment', 455),
('apartments', 455),
('meal', 589),
('grocery', 577);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
