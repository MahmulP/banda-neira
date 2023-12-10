-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 10 Des 2023 pada 14.19
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
  `message` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `email`, `phone`, `subject`, `message`) VALUES
(1, 'test', 'test@gmail.com', '0821571259', 'test bgt', 'test doang ini mah'),
(2, 'test', 'testtest@gmail.com', '028157219', 'test', 'test bgt ini mah'),
(3, 'fagasgasga', 'gasgasgasg@gmail.com', '08127512958', 'aflaskfjasf', 'tesat bgatstakstjlastj'),
(4, 'fasljkfasjflaksjflasfj', 'faskjhgashjgk@gmail.com', '29418512589', 'test', 'testatsaiastkasltj\n'),
(5, 'Machmul', 'fasklfasjfaflk@gmail.com', '0851275192', 'test ', 'safkjasfkafk\n'),
(6, 'Machmul Pratama', 'mahmulpratama16@gmail.com', '081521521512', 'Test Subjek', 'Test pesan');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
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

INSERT INTO `users` (`id`, `username`, `email`, `password`, `phone`, `refresh_token`, `points`, `createdAt`, `updatedAt`) VALUES
(3, 'mahmulp', 'mahmulpratama16@gmail.com', '$2b$10$ZitZ42aKi9E7Jd/XUT626.qUAhFAVlQlAOf8BPB2/TqKTacXA3way', '081361626766', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsInVzZXJuYW1lIjoibWFobXVscCIsImVtYWlsIjoibWFobXVscHJhdGFtYTE2QGdtYWlsLmNvbSIsImlhdCI6MTcwMjIxMzYxNSwiZXhwIjoxNzAyMzAwMDE1fQ.Ydo19cwfxMJd9Q4GYG5PP8IelgMxoQ5_oauVORZWBT8', NULL, '2023-12-09 16:02:57', '2023-12-10 13:06:55'),
(4, 'mahmulp', 'mahmulpratama1@gmail.com', '$2b$10$DUq/1olo3jZwkLWZT8NQ7.BgDVEEtignA7AbPi0D6ONcyxzFJ0yBa', '081361626766', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsInVzZXJuYW1lIjoibWFobXVscCIsImVtYWlsIjoibWFobXVscHJhdGFtYTFAZ21haWwuY29tIiwiaWF0IjoxNzAyMTc2OTM1LCJleHAiOjE3MDIyNjMzMzV9.W1f4X8tksKme_zXHA7oq5yzC546Vq5DRKmiub3BtQQU', NULL, '2023-12-09 16:19:12', '2023-12-10 02:55:35'),
(5, 'ucokbb', 'mahmulcok@gmail.com', '$2b$10$0gq2ScKI6suoRTNRTDQWhOnkBhc6cA.nSyKPdssPajcIn6GWeQu1S', '098521571', NULL, NULL, '2023-12-09 17:00:48', '2023-12-09 17:00:48'),
(6, 'testlagi', 'mahmulpratama22@gmail.com', '$2b$10$6W.rdCvXznba5HEGmnOih.vqL7.Re0rUQUs2HZtmgFPl94yBYIMKe', '0852715219', NULL, NULL, '2023-12-09 17:04:07', '2023-12-09 17:04:07'),
(7, 'test', 'test@gmail.com', '$2b$10$DH2jv3RuCOWq8j9/J0h6eOQmVBIZfO6mdQn0OvDLRUacVugLZOEt2', NULL, NULL, NULL, '2023-12-10 01:00:22', '2023-12-10 01:00:22');

-- --------------------------------------------------------

--
-- Struktur dari tabel `vouchers`
--

CREATE TABLE `vouchers` (
  `id` int(11) NOT NULL,
  `jenis_voucher` text DEFAULT NULL,
  `valid_voucher` varchar(250) DEFAULT NULL,
  `deskripsi_voucher` text DEFAULT NULL,
  `point_voucher` int(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `vouchers`
--

INSERT INTO `vouchers` (`id`, `jenis_voucher`, `valid_voucher`, `deskripsi_voucher`, `point_voucher`) VALUES
(1, 'Voucher Diskon 20%', '23 June 2024', 'Diskon 20% s/d Rp 5.000 dengan minimal belanja Rp 150.000 di Indomaret', 150),
(2, 'Voucher Diskon 50%', '23 June 2024', 'Diskon 20% s/d Rp 5.000 dengan minimal belanja Rp 150.000 di Indomaret', 150),
(3, 'Voucher Diskon 70%', '23 June 2024', 'Diskon 20% s/d Rp 5.000 dengan minimal belanja Rp 150.000 di Indomaret', 75),
(4, 'Voucher Diskon 70%', '23 June 2024', 'Diskon 20% s/d Rp 5.000 dengan minimal belanja Rp 150.000 di Indomaret', 120);

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
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `vouchers`
--
ALTER TABLE `vouchers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
