-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 11-Nov-2022 às 21:12
-- Versão do servidor: 10.4.25-MariaDB
-- versão do PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `academico`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `aspnetroleclaims`
--

CREATE TABLE `aspnetroleclaims` (
  `Id` int(11) NOT NULL,
  `RoleId` varchar(767) NOT NULL,
  `ClaimType` text DEFAULT NULL,
  `ClaimValue` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `aspnetroles`
--

CREATE TABLE `aspnetroles` (
  `Id` varchar(767) NOT NULL,
  `Name` varchar(256) DEFAULT NULL,
  `NormalizedName` varchar(256) DEFAULT NULL,
  `ConcurrencyStamp` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `aspnetroles`
--

INSERT INTO `aspnetroles` (`Id`, `Name`, `NormalizedName`, `ConcurrencyStamp`) VALUES
('02517c2e-fd0a-415d-ab91-4f353ceda010', 'Administrador', 'ADMINISTRADOR', 'e3d65985-a1fa-47f8-8059-1c7f01f366f0'),
('5176947e-7fa2-44f5-9378-6cb74f1eefc4', 'Colaborador', 'COLABORADOR', '62de5cf2-3589-4476-8f75-3939180785d0'),
('be78081e-6aa7-40fc-80c2-ab3fa296a386', 'Funcionário', 'FUNCIONÁRIO', '88aa2707-3737-48b0-aa63-cdba1a7a3021');

-- --------------------------------------------------------

--
-- Estrutura da tabela `aspnetuserclaims`
--

CREATE TABLE `aspnetuserclaims` (
  `Id` int(11) NOT NULL,
  `UserId` varchar(767) NOT NULL,
  `ClaimType` text DEFAULT NULL,
  `ClaimValue` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `aspnetuserroles`
--

CREATE TABLE `aspnetuserroles` (
  `UserId` varchar(767) NOT NULL,
  `RoleId` varchar(767) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `aspnetuserroles`
--

INSERT INTO `aspnetuserroles` (`UserId`, `RoleId`) VALUES
('22b6c38c-4014-4dbf-9d49-3ace7559f6e4', '02517c2e-fd0a-415d-ab91-4f353ceda010'),
('392f65e2-4c64-40d8-8120-a94cd1b234c0', '02517c2e-fd0a-415d-ab91-4f353ceda010'),
('62fcc9c2-109b-4403-84e2-68521a3607e1', '02517c2e-fd0a-415d-ab91-4f353ceda010'),
('7d9288c0-e7b0-4fe8-8ae8-6f9ba1eb6ad6', '02517c2e-fd0a-415d-ab91-4f353ceda010'),
('caa3ff66-5181-491f-a147-80a629814d44', '5176947e-7fa2-44f5-9378-6cb74f1eefc4');

-- --------------------------------------------------------

--
-- Estrutura da tabela `aspnetusers`
--

CREATE TABLE `aspnetusers` (
  `Id` varchar(767) NOT NULL,
  `UserName` varchar(256) DEFAULT NULL,
  `NormalizedUserName` varchar(256) DEFAULT NULL,
  `Email` varchar(256) DEFAULT NULL,
  `NormalizedEmail` varchar(256) DEFAULT NULL,
  `EmailConfirmed` tinyint(1) NOT NULL,
  `PasswordHash` text DEFAULT NULL,
  `SecurityStamp` text DEFAULT NULL,
  `ConcurrencyStamp` text DEFAULT NULL,
  `PhoneNumber` text DEFAULT NULL,
  `PhoneNumberConfirmed` tinyint(1) NOT NULL,
  `TwoFactorEnabled` tinyint(1) NOT NULL,
  `LockoutEnd` timestamp NULL DEFAULT NULL,
  `LockoutEnabled` tinyint(1) NOT NULL,
  `AccessFailedCount` int(11) NOT NULL,
  `Perfil` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `aspnetusers`
--

INSERT INTO `aspnetusers` (`Id`, `UserName`, `NormalizedUserName`, `Email`, `NormalizedEmail`, `EmailConfirmed`, `PasswordHash`, `SecurityStamp`, `ConcurrencyStamp`, `PhoneNumber`, `PhoneNumberConfirmed`, `TwoFactorEnabled`, `LockoutEnd`, `LockoutEnabled`, `AccessFailedCount`, `Perfil`) VALUES
('22b6c38c-4014-4dbf-9d49-3ace7559f6e4', 'jonathan@teste.com', 'JONATHAN@TESTE.COM', 'jonathan@teste.com', 'JONATHAN@TESTE.COM', 0, 'AQAAAAEAACcQAAAAEHPPXM7PmfaBEZZDUzqqeQ2sGyABVdN+74G4pdbf5wEa4fHO8snyGo9gLz1qfO1IXA==', 'QTQFNOQQWGLM36MLUMPSZTZFAGAVVIOS', '5e5dfd3d-7ad6-4ffd-9b85-356a7f960023', NULL, 0, 0, NULL, 1, 0, 'Administrador'),
('392f65e2-4c64-40d8-8120-a94cd1b234c0', 'TesteTelaAdministrador@adm.com', 'TESTETELAADMINISTRADOR@ADM.COM', 'TesteTelaAdministrador@adm.com', 'TESTETELAADMINISTRADOR@ADM.COM', 0, 'AQAAAAEAACcQAAAAEKuo8s3tExE+pP8CuNO6SRzjujbkA7BXWA3GmwAK95xzT2C6sJoZTmDRIBahSujS6Q==', '7CWTRXUFKVURRECTMVYTYI6R5JPPBW54', 'c8de07b8-d0ac-46f7-9f20-e1b387275f83', NULL, 0, 0, NULL, 1, 0, 'Administrador'),
('62fcc9c2-109b-4403-84e2-68521a3607e1', 'Guedes@adm.com', 'GUEDES@ADM.COM', 'Guedes@adm.com', 'GUEDES@ADM.COM', 0, 'AQAAAAEAACcQAAAAEBvcJwQXZDTi7mD9akE8reps9RDngn3j8RTOAMB2D33TlEeEjYuZe+KYvCxbfjeZNg==', 'DUSR5EQWI66WPR3IM54IVHCQAYKNVY7Y', '785ac184-aa54-49b7-85ca-3f7b6c3a2f14', NULL, 0, 0, NULL, 1, 0, 'Administrador'),
('7d9288c0-e7b0-4fe8-8ae8-6f9ba1eb6ad6', 'kennedy@admin.com', 'KENNEDY@ADMIN.COM', 'kennedy@admin.com', 'KENNEDY@ADMIN.COM', 0, 'AQAAAAEAACcQAAAAEDi/QiyE1xXrVjTz8xe79ESc2mBHMmSai08CgTEsf3K76lAsBjOOVvn5Frxd1sADNw==', 'IMHZCZTOOUTJUOIMB3AKW7JWHGHVQ7ST', '2ddbb9cd-97eb-4bfd-99af-9572efd9b384', NULL, 0, 0, NULL, 1, 0, 'Administrador'),
('caa3ff66-5181-491f-a147-80a629814d44', 'TesteTelaFuncionario@funcionario.com', 'TESTETELAFUNCIONARIO@FUNCIONARIO.COM', 'TesteTelaFuncionario@funcionario.com', 'TESTETELAFUNCIONARIO@FUNCIONARIO.COM', 0, 'AQAAAAEAACcQAAAAEIrmKYd4ZJ8FYx5R+bwPK9eiYxKrpYyEM5ki0631LlyhizT75fGq/gGasOowFrvIWw==', 'HT3L7X2YLOS5FW2YCJZVZQK7L6VITDKK', 'f914ddbb-3ad7-47e2-a5cd-718d6ba5bd95', NULL, 0, 0, NULL, 1, 0, 'Colaborador');

-- --------------------------------------------------------

--
-- Estrutura da tabela `cliente`
--

CREATE TABLE `cliente` (
  `idCliente` int(10) NOT NULL,
  `nomeCliente` varchar(60) NOT NULL,
  `dtNascimento` date NOT NULL,
  `cpf` varchar(15) NOT NULL,
  `logradouro` varchar(60) DEFAULT NULL,
  `bairro` varchar(40) DEFAULT NULL,
  `cidade` varchar(40) DEFAULT NULL,
  `estado` char(30) DEFAULT NULL,
  `cep` varchar(8) DEFAULT NULL,
  `genero` char(10) NOT NULL,
  `email` varchar(30) DEFAULT NULL,
  `numTelefone` varchar(11) DEFAULT NULL,
  `ativo` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `cliente`
--

INSERT INTO `cliente` (`idCliente`, `nomeCliente`, `dtNascimento`, `cpf`, `logradouro`, `bairro`, `cidade`, `estado`, `cep`, `genero`, `email`, `numTelefone`, `ativo`) VALUES
(7, 'Gabriel Kennedy Sales Brito', '2003-09-10', '47842464871', 'Casa', 'Jardim Jovaia', 'Guarulhos', 'São Paulo', '07132160', 'Masculino', 'kennedy@cliente.com', '11910424516', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `funcionario`
--

CREATE TABLE `funcionario` (
  `idFuncionario` int(10) NOT NULL,
  `nomeFuncionario` varchar(60) NOT NULL,
  `dtNascimento` date NOT NULL,
  `cpf` varchar(15) NOT NULL,
  `genero` char(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `perfil` varchar(30) DEFAULT NULL,
  `senha` varchar(20) NOT NULL,
  `ativo` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `funcionario`
--

INSERT INTO `funcionario` (`idFuncionario`, `nomeFuncionario`, `dtNascimento`, `cpf`, `genero`, `email`, `perfil`, `senha`, `ativo`) VALUES
(3, 'TesteTelaAdministrador', '2022-11-18', '00000000000', 'Masculino', 'TesteTelaAdministrador@adm.com', 'Administrador', 'Admin162410!', 1),
(4, 'TesteTelaFuncionario', '2022-11-17', '00000000000', 'Masculino', 'TesteTelaFuncionario@funcionario.com', 'Colaborador', 'Admin162410!', 1),
(5, 'Guedes', '2022-11-09', '00000000000', 'Masculino', 'Guedes@adm.com', 'Administrador', 'Admin162410!', 1),
(6, 'JonathanTester', '2022-12-19', '12345678901', 'Masculino', 'jonathan@teste.com', 'Administrador', 'Admin162410!', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `procedimento`
--

CREATE TABLE `procedimento` (
  `idProcedimento` int(10) NOT NULL,
  `nomeProcedimento` varchar(40) NOT NULL,
  `descricaoProcedimento` varchar(40) NOT NULL,
  `valorProcedimento` double NOT NULL,
  `dtRetorno` date NOT NULL,
  `ativo` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `procedimento`
--

INSERT INTO `procedimento` (`idProcedimento`, `nomeProcedimento`, `descricaoProcedimento`, `valorProcedimento`, `dtRetorno`, `ativo`) VALUES
(3, 'Vasinhos', 'Injetar Ácido Hialurônico', 1500, '2022-11-16', 1),
(4, 'insumos', 'aaaaaaa', 1500, '2022-07-11', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `produto`
--

CREATE TABLE `produto` (
  `idProduto` int(10) NOT NULL,
  `nomeProduto` varchar(60) NOT NULL,
  `dtValidadeProduto` date NOT NULL,
  `valorVendaProduto` double NOT NULL,
  `valorProduto` double NOT NULL,
  `ativo` tinyint(1) DEFAULT NULL,
  `estoqueProduto` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `produto`
--

INSERT INTO `produto` (`idProduto`, `nomeProduto`, `dtValidadeProduto`, `valorVendaProduto`, `valorProduto`, `ativo`, `estoqueProduto`) VALUES
(1, 'Botox', '2022-11-16', 1500, 500, 1, 12),
(3, 'Ácido', '2022-11-22', 250, 100, 1, 19),
(4, 'Gelox', '2023-03-29', 15, 10, 1, 3),
(5, 'Gel', '2022-11-25', 68, 50, 1, 5),
(6, 'Enzimas', '2022-12-13', 468, 300, 1, 2),
(7, 'Álcool em Gel', '2022-12-08', 27, 15, 1, 3);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `aspnetroles`
--
ALTER TABLE `aspnetroles`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `RoleNameIndex` (`NormalizedName`);

--
-- Índices para tabela `aspnetuserroles`
--
ALTER TABLE `aspnetuserroles`
  ADD PRIMARY KEY (`UserId`,`RoleId`),
  ADD KEY `IX_AspNetUserRoles_RoleId` (`RoleId`);

--
-- Índices para tabela `aspnetusers`
--
ALTER TABLE `aspnetusers`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `UserNameIndex` (`NormalizedUserName`),
  ADD KEY `EmailIndex` (`NormalizedEmail`);

--
-- Índices para tabela `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`idCliente`);

--
-- Índices para tabela `funcionario`
--
ALTER TABLE `funcionario`
  ADD PRIMARY KEY (`idFuncionario`);

--
-- Índices para tabela `procedimento`
--
ALTER TABLE `procedimento`
  ADD PRIMARY KEY (`idProcedimento`);

--
-- Índices para tabela `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`idProduto`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `cliente`
--
ALTER TABLE `cliente`
  MODIFY `idCliente` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `funcionario`
--
ALTER TABLE `funcionario`
  MODIFY `idFuncionario` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `procedimento`
--
ALTER TABLE `procedimento`
  MODIFY `idProcedimento` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `produto`
--
ALTER TABLE `produto`
  MODIFY `idProduto` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `aspnetuserroles`
--
ALTER TABLE `aspnetuserroles`
  ADD CONSTRAINT `FK_AspNetUserRoles_AspNetRoles_RoleId` FOREIGN KEY (`RoleId`) REFERENCES `aspnetroles` (`Id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_AspNetUserRoles_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `aspnetusers` (`Id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
