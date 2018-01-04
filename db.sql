CREATE DATABASE test;

CREATE TABLE `author` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `firstName` varchar(64) NOT NULL,
  `lastName` varchar(64) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `post` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `authorId` int(11) NOT NULL COMMENT '作者id',
  `title` varchar(64) NOT NULL,
  `votes` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `authorId` (`authorId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `author` (`firstName`, `lastName`) values ('Tom', 'Coleman'), ('Sashko', 'Stubailo'), ('Mikhail', 'Novikov');
INSERT INTO `post` (`authorId`, `title`, `votes`) values (1, 'Introduction to GraphQL', 2), (2, 'Welcome to Apollo', 3), (2, 'Advanced GraphQL', 1), (3, 'Launchpad is Cool', 7);