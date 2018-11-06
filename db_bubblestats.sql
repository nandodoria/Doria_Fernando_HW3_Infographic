-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Oct 31, 2018 at 01:55 PM
-- Server version: 5.7.23
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_bubblestats`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_stats`
--

CREATE TABLE `tbl_stats` (
  `id` int(10) NOT NULL,
  `percent` varchar(50) NOT NULL,
  `fact` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_stats`
--

INSERT INTO `tbl_stats` (`id`, `percent`, `fact`) VALUES
(1, 'sixty-eight', 'of Instagram users are female'),
(2, 'ninety-eight', 'of fashion brands are on Instagram'),
(3, 'seventy-two', 'of teens are using instagram');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_stats`
--
ALTER TABLE `tbl_stats`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_stats`
--
ALTER TABLE `tbl_stats`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
