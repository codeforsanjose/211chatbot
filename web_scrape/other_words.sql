-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 30, 2020 at 09:20 PM
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
('calfresh', 118),
('medical', 121),
('house', 314),
('houses', 314),
('rent', 314),
('rental', 314),
('pantry', 322),
('homelessness', 329),
('class', 377),
('benefit', 390),
('complain', 556),
('complaining', 556),
('covid-19', 572),
('covid', 572),
('drugs', 360),
('library', 373),
(NULL, 373),
('schools', 368),
('applications', 2),
('rents', 314),
('apartment', 314),
('apartments', 314),
('meal', 320),
('meals', 320),
('grocery', 320),
('groceries', 320);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
