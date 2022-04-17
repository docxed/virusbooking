-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 17, 2022 at 03:31 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bestbeds2`
--

-- --------------------------------------------------------

--
-- Table structure for table `beds`
--

CREATE TABLE `beds` (
  `id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `address` text NOT NULL,
  `lat` varchar(255) NOT NULL,
  `lng` varchar(255) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `user_id` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `beds`
--

INSERT INTO `beds` (`id`, `amount`, `address`, `lat`, `lng`, `state`, `user_id`, `timestamp`) VALUES
(11, 599, '19/49 ซอย สายไหม 15 แขวง สายไหม เขตสายไหม กรุงเทพมหานคร 10220 ประเทศไทย', '13.9276745', '100.6441675', 1, 3, '2022-03-21 12:34:24'),
(51, 200, '8/1 ถ. ลาดพร้าว แขวง สะพานสอง เขตวังทองหลาง กรุงเทพมหานคร 10310 ประเทศไทย', '13.7884688', '100.608406', 1, 7, '2022-04-17 01:20:29');

-- --------------------------------------------------------

--
-- Table structure for table `bedsdealing`
--

CREATE TABLE `bedsdealing` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `bed_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 0,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tokens`
--

CREATE TABLE `tokens` (
  `id` int(11) NOT NULL,
  `token` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tokens`
--

INSERT INTO `tokens` (`id`, `token`, `user_id`, `timestamp`) VALUES
(66, 'eyJhbGciOiJIUzI1NiJ9.cGhhbGF0MThAZ21haWwuY29t.Dzc6Jd1l-YOqXm94r6TY6WRC0UKRjkXyV0VflfEzFT8', 7, '2022-04-17 01:19:39');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `idcard` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `lineid` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','user') NOT NULL DEFAULT 'user',
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `idcard`, `phone`, `email`, `lineid`, `password`, `role`, `timestamp`) VALUES
(3, 'อคิราภ์', 'สีแสนยง', '1100501552879', '0882923741', 'akira.ajeyb@gmail.com', 'ajayxxx', '$2a$05$tjMXAL8OKV9RIFI6LGwKf.xp19ALxIyn.x0z2WH5/iBk69md03mMa', 'user', '2022-03-21 12:33:50'),
(7, 'พลัฏฐ์', 'วงศ์สิทธิพรรุ่ง', '1234567891235', '0812345678', 'phalat18@gmail.com', '_po_pon', '$2a$05$lp5hJyWrrNPQFN.jk7Z.IuJBH/XUpk1gPL1eKj8OlQ0qpcZMIZ3ci', 'user', '2022-04-17 01:18:19'),
(59, 'ประธาน', 'นาเวียง', '1234567891236', '0812345678', 'prathan@gmail.com', '_go_gog', '$2a$05$4dLNZYtXCvUUWsk9oIjOleQNDRlwF48PF5uEAhqSui/J9ydVZC6l6', 'user', '2022-04-17 01:19:13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `beds`
--
ALTER TABLE `beds`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `bedsdealing`
--
ALTER TABLE `bedsdealing`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bed_id` (`bed_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `tokens`
--
ALTER TABLE `tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `beds`
--
ALTER TABLE `beds`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `bedsdealing`
--
ALTER TABLE `bedsdealing`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `tokens`
--
ALTER TABLE `tokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `beds`
--
ALTER TABLE `beds`
  ADD CONSTRAINT `beds_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `bedsdealing`
--
ALTER TABLE `bedsdealing`
  ADD CONSTRAINT `bedsdealing_ibfk_1` FOREIGN KEY (`bed_id`) REFERENCES `beds` (`id`),
  ADD CONSTRAINT `bedsdealing_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `tokens`
--
ALTER TABLE `tokens`
  ADD CONSTRAINT `tokens_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
