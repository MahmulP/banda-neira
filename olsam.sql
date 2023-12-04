-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 04, 2023 at 04:16 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `olsam`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(250) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `password` varchar(250) DEFAULT NULL,
  `phone` varchar(250) DEFAULT NULL,
  `points` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `phone`, `points`) VALUES
(1, 'Machmul Pratama', 'mahmulpratama16@gmail.com', 'testdoang', '081361626766', '100'),
(2, 'mahmulp', 'mahmulpratama16@gmail.com', '$2b$10$eFC5JemHk/qeiPYVhE2dW.kjGrpWgEvm.NisNt8R5JHETrKTs.GG6', '081361626766', NULL),
(3, 'mahmulp', 'mahmulpratama16@gmail.com', '$2b$10$9pa3StwGL2IXGzpL5HUJoOYztM0cTACU06LeGFkoIHykyN5jtaDfe', '081361626766', NULL),
(4, 'testdoang', 'mahmulpratama@gmail.com', '$2b$10$4couJYQJKjFnQrmrAfE31eLV9xsqkzheeCv2YW.9xcGIxL/l8mYOC', '081361626766', NULL),
(5, 'testdoan', 'testdoang@gmail.com', '$2b$10$Rz.WzA5jqn1PSnKFJpOd2uyKyXRzBXcZY0Wj1hB/flaWuu0S//Nxy', '085219519', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
