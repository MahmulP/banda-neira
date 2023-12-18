-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 18 Des 2023 pada 18.35
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.1.17

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
-- Struktur dari tabel `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `email`, `phone`, `subject`, `message`, `createdAt`, `updatedAt`) VALUES
(1, 'test', 'test@gmail.com', '0821571259', 'test bgt', 'test doang ini mah', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'test', 'testtest@gmail.com', '028157219', 'test', 'test bgt ini mah', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'fagasgasga', 'gasgasgasg@gmail.com', '08127512958', 'aflaskfjasf', 'tesat bgatstakstjlastj', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'fasljkfasjflaksjflasfj', 'faskjhgashjgk@gmail.com', '29418512589', 'test', 'testatsaiastkasltj\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Machmul', 'fasklfasjfaflk@gmail.com', '0851275192', 'test ', 'safkjasfkafk\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'Machmul Pratama', 'mahmulpratama16@gmail.com', '081521521512', 'Test Subjek', 'Test pesan', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'Machmul Pratama', 'mahmulpratama1@gmail.com', NULL, 'Teruntuk Kamu hidup dan matiku', 'Kutuliskan kenagnan tentang caraku menemukan dirimu asik asik jos', '2023-12-10 14:19:59', '2023-12-10 14:19:59'),
(8, 'Machmul Pratama', 'mahmulpratama1@gmail.com', '08527159', 'Teruntuk Kamu hidup dan matiku', 'Kutuliskan kenagnan tentang caraku menemukan dirimu asik asik jos', '2023-12-10 14:20:21', '2023-12-10 14:20:21'),
(9, 'mahmul pratama', 'ucok@gmail.com', '9851275', 'test', 'test pesan\n', '2023-12-10 14:34:37', '2023-12-10 14:34:37'),
(10, 'test', 'test@gmail.com', '218518', 'test', 'test\n', '2023-12-10 14:48:19', '2023-12-10 14:48:19'),
(11, 'Machmul Pratama', 'mahmulpratama1@gmail.com', '08527159', 'Teruntuk Kamu hidup dan matiku', 'Kutuliskan kenagnan tentang caraku menemukan dirimu asik asik jos', '2023-12-11 00:28:20', '2023-12-11 00:28:20');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `role` varchar(250) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `refresh_token` text DEFAULT NULL,
  `points` int(250) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `role`, `password`, `phone`, `refresh_token`, `points`, `createdAt`, `updatedAt`) VALUES
(3, 'mahmulp', 'mahmulpratama16@gmail.com', 'admin', '$2b$10$ZitZ42aKi9E7Jd/XUT626.qUAhFAVlQlAOf8BPB2/TqKTacXA3way', '081361626766', NULL, 120, '2023-12-09 16:02:57', '2023-12-18 17:18:21'),
(4, 'mahmulp', 'mahmulpratama1@gmail.com', 'user', '$2b$10$DUq/1olo3jZwkLWZT8NQ7.BgDVEEtignA7AbPi0D6ONcyxzFJ0yBa', '081361626766', NULL, NULL, '2023-12-09 16:19:12', '2023-12-18 17:20:07'),
(5, 'ucokbb', 'mahmulcok@gmail.com', NULL, '$2b$10$0gq2ScKI6suoRTNRTDQWhOnkBhc6cA.nSyKPdssPajcIn6GWeQu1S', '098521571', NULL, NULL, '2023-12-09 17:00:48', '2023-12-09 17:00:48'),
(6, 'testlagi', 'mahmulpratama22@gmail.com', NULL, '$2b$10$6W.rdCvXznba5HEGmnOih.vqL7.Re0rUQUs2HZtmgFPl94yBYIMKe', '0852715219', NULL, NULL, '2023-12-09 17:04:07', '2023-12-09 17:04:07'),
(7, 'test', 'test@gmail.com', NULL, '$2b$10$DH2jv3RuCOWq8j9/J0h6eOQmVBIZfO6mdQn0OvDLRUacVugLZOEt2', NULL, NULL, NULL, '2023-12-10 01:00:22', '2023-12-10 01:00:22'),
(8, '', 'mahmulptamtayma@gmail.com', NULL, '$2b$10$Jp2eMuzQ600NKsXs2C1gfu8.weuLrn9kxrp3JaCbfe5TSsd5BEVPW', '', NULL, NULL, '2023-12-10 14:43:44', '2023-12-10 14:43:44'),
(9, 'testdoanginimah', 'moaskgagkak@gmail.com', NULL, '$2b$10$zsZedyVaEKh4xHMS5WErDeJ8mSiXNFCF0rwnRSjrSpoGAnEQ3GK3y', '95271571', NULL, NULL, '2023-12-10 14:46:53', '2023-12-10 14:46:53'),
(10, 'testusername', 'testusername@gmail.com', NULL, '$2b$10$V1ZCEExzmfuOFvbwml7e5uKWClC22iEnz/kjMXYduzj9Y52zjee.W', '085217518', NULL, NULL, '2023-12-11 14:53:51', '2023-12-11 14:53:51'),
(11, 'mahmulp', 'mahmulpratama1@gmail.com', NULL, '$2b$10$/wKv9Z7QV.4tKE159cmSrelvywOsA0ILlpzDoE4G8QnqokfXycOtm', '081361626766', NULL, NULL, '2023-12-12 03:53:09', '2023-12-12 03:53:09'),
(12, 'mahmulp', 'mahmulpratama0@gmail.com', NULL, '$2b$10$QRPIAZdJ2HlJn03AxnJfKexh074lTas9/2g/a9dNZYF1iE4WJpfve', '081361626766', NULL, NULL, '2023-12-12 03:53:17', '2023-12-12 03:58:15'),
(16, 'testrole', 'role@gmail.com', 'user', '$2b$10$ck/zwbIt86mbS9ezDGGbk.etH27PpzHsklsOdAKG3exozw26VAlJe', '085219519', NULL, NULL, '2023-12-18 14:25:31', '2023-12-18 14:25:31');

-- --------------------------------------------------------

--
-- Struktur dari tabel `vouchers`
--

CREATE TABLE `vouchers` (
  `id` int(11) NOT NULL,
  `jenis_voucher` text DEFAULT NULL,
  `valid_voucher` varchar(250) DEFAULT NULL,
  `deskripsi_voucher` text DEFAULT NULL,
  `point_voucher` int(250) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `vouchers`
--

INSERT INTO `vouchers` (`id`, `jenis_voucher`, `valid_voucher`, `deskripsi_voucher`, `point_voucher`, `createdAt`, `updatedAt`) VALUES
(1, 'Voucher Diskon 20%', '23 June 2024', 'Diskon 20% s/d Rp 5.000 dengan minimal belanja Rp 150.000 di Indomaret', 150, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Voucher Diskon 50%', '23 June 2024', 'Diskon 20% s/d Rp 5.000 dengan minimal belanja Rp 150.000 di Indomaret', 150, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Voucher Diskon 70%', '23 June 2024', 'Diskon 20% s/d Rp 5.000 dengan minimal belanja Rp 150.000 di Indomaret', 75, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Voucher Diskon 70%', '23 June 2024', 'Diskon 20% s/d Rp 5.000 dengan minimal belanja Rp 150.000 di Indomaret', 120, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Voucher Diskon 80%', '23 June 2024', 'Diskon 80% s/d Rp 25.000 dengan minimal belanja Rp 150.000 di Indomaret', 180, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'Voucher Diskon 90%', '23 June 2024', 'Diskon 90% s/d Rp 25.000 dengan minimal belanja Rp 150.000 di Indomaret', 180, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `vouchers_exchange`
--

CREATE TABLE `vouchers_exchange` (
  `id` int(11) NOT NULL,
  `id_voucher` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `redeem_voucher` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `vouchers_exchange`
--

INSERT INTO `vouchers_exchange` (`id`, `id_voucher`, `id_user`, `status`, `redeem_voucher`, `createdAt`, `updatedAt`) VALUES
(1, 2, 3, 1, 'test', '2023-12-11 12:51:55', '2023-12-18 16:48:11'),
(2, 2, 3, 1, 'hahaha', '2023-12-11 12:56:13', '2023-12-18 16:49:44'),
(3, 3, 3, 1, 'gasgas', '2023-12-11 12:57:26', '2023-12-18 16:49:58'),
(4, 3, 3, 1, 'hhdshdh', '2023-12-11 12:57:28', '2023-12-18 16:50:15'),
(5, 3, 3, NULL, NULL, '2023-12-11 12:57:29', '2023-12-11 12:57:29'),
(6, 3, 3, NULL, NULL, '2023-12-11 12:57:29', '2023-12-11 12:57:29'),
(7, 3, 3, NULL, NULL, '2023-12-11 12:57:29', '2023-12-11 12:57:29'),
(8, 3, 3, NULL, NULL, '2023-12-11 12:57:29', '2023-12-11 12:57:29'),
(9, 3, 3, NULL, NULL, '2023-12-11 12:57:30', '2023-12-11 12:57:30'),
(10, 3, 3, NULL, NULL, '2023-12-11 12:57:30', '2023-12-11 12:57:30'),
(11, 3, 3, NULL, NULL, '2023-12-11 13:00:28', '2023-12-11 13:00:28'),
(12, 6, 3, NULL, NULL, '2023-12-11 13:12:58', '2023-12-11 13:12:58'),
(13, 6, 3, NULL, NULL, '2023-12-11 13:15:44', '2023-12-11 13:15:44'),
(14, 6, 3, NULL, NULL, '2023-12-11 13:18:50', '2023-12-11 13:18:50'),
(15, 2, 3, NULL, NULL, '2023-12-11 13:21:16', '2023-12-11 13:21:16'),
(16, 2, 3, NULL, NULL, '2023-12-11 13:56:13', '2023-12-11 13:56:13'),
(17, 6, 3, NULL, NULL, '2023-12-11 13:56:39', '2023-12-11 13:56:39'),
(18, 1, 3, NULL, NULL, '2023-12-11 13:56:51', '2023-12-11 13:56:51'),
(19, 3, 3, NULL, NULL, '2023-12-11 13:58:03', '2023-12-11 13:58:03'),
(20, 2, 3, NULL, NULL, '2023-12-11 13:58:16', '2023-12-11 13:58:16'),
(21, 3, 3, NULL, NULL, '2023-12-12 03:33:57', '2023-12-12 03:33:57'),
(22, 2, 3, NULL, NULL, '2023-12-12 03:34:01', '2023-12-12 03:34:01'),
(23, 1, 3, NULL, NULL, '2023-12-12 03:34:05', '2023-12-12 03:34:05');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `vouchers`
--
ALTER TABLE `vouchers`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `vouchers_exchange`
--
ALTER TABLE `vouchers_exchange`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT untuk tabel `vouchers`
--
ALTER TABLE `vouchers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `vouchers_exchange`
--
ALTER TABLE `vouchers_exchange`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
