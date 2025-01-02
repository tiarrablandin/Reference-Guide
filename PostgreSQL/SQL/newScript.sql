
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema menrvadb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `menrvadb` ;

-- -----------------------------------------------------
-- Schema menrvadb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `menrvadb` DEFAULT CHARACTER SET utf8 ;
USE `menrvadb` ;

SET SQL_MODE = '';
DROP USER IF EXISTS menrvadb@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER IF NOT EXISTS 'user'@'localhost' IDENTIFIED BY 'password';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON menrvadbdb.* TO 'menrvadb'@'localhost';