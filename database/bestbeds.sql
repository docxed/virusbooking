-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 20, 2022 at 07:47 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bestbeds`
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
(2, 115, '1 ซอย ฉลองกรุง 1 แขวง ลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร 10520', '13.7298889', '100.7782323', 1, 1, '2022-03-16 20:36:16'),
(5, 1561, 'ถ. พหลโยธิน แขวง ถนนพญาไท เขตราชเทวี กรุงเทพมหานคร 10400', '13.7649084', '100.5382846', 1, 1, '2022-03-17 15:39:21'),
(6, 19, 'ซอย สายไหม 13 แขวง สายไหม เขตสายไหม กรุงเทพมหานคร 10220', '13.9265609', '100.6419517', 1, 1, '2022-03-17 15:41:41'),
(7, 160, 'เซียงกง เขตสัมพันธวงศ์ กรุงเทพมหานคร', '13.7372228', '100.5132788', 1, 1, '2022-03-17 15:45:24'),
(8, 2649, '232 Moo2 Tambol ตำบล อ่าวนาง Amphur Muang กระบี่ 81000', '8.036613899999999', '98.8174305', 1, 1, '2022-03-18 03:45:54'),
(9, 10, 'เทศบาลนครเชียงใหม่ อำเภอเมืองเชียงใหม่ เชียงใหม่', '18.7883439', '98.98530079999999', 1, 1, '2022-03-18 04:17:46'),
(10, 1138, 'ตําบล, 1500 ถ. เอกชัย ตำบลมหาชัย อำเภอเมืองสมุทรสาคร สมุทรสาคร 74000', '13.5513195', '100.2795245', 1, 2, '2022-03-18 12:31:37');

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

--
-- Dumping data for table `bedsdealing`
--

INSERT INTO `bedsdealing` (`id`, `date`, `bed_id`, `user_id`, `state`, `timestamp`) VALUES
(13, '2022-04-01', 10, 1, 0, '2022-03-20 18:25:48'),
(16, '2022-03-20', 6, 2, 1, '2022-03-20 18:32:36'),
(17, '2022-03-25', 5, 2, 0, '2022-03-20 18:33:10');

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
(58, 'eyJhbGciOiJIUzI1NiJ9.YWtpcmEuYWpleWJAZ21haWwuY29t.kxTIv8VmRb0vWkXW8cHsXrTprG1pm8OYQqrpBZ4DsEc', 1, '2022-03-20 18:39:51');

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
(1, 'อคิราภ์', 'สีแสนยง', '1100501552879', '0882923741', 'akira.ajeyb@gmail.com', 'sss', '$2a$05$OElGarb5cNlf3Csrfx.XbO0sfhkmNuTUB0zfndW5oHWrtUAmx60ri', 'user', '2022-03-09 17:32:12'),
(2, 'กฤตนัย', 'ครองสิงห์', '1234568970123', '0882925468', 'test@gmail.com', 'testxxx', '$2a$05$KXNJo8w9VXsirKqqWCX/AeTHwmnT0OsNeca8xKDmEVryeJDejhd.a', 'user', '2022-03-09 18:56:03');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `bedsdealing`
--
ALTER TABLE `bedsdealing`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `tokens`
--
ALTER TABLE `tokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
