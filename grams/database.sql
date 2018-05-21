#用户表
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
    `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
    `phone`  VARCHAR(11) NOT NULL,
    `nickname` VARCHAR(50) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
    `avatar` VARCHAR(100),

    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
#书评动态表
DROP TABLE IF EXISTS `moment`;
CREATE TABLE `moment` (
    `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
    `content` TEXT NOT NULL,
    `book` VARCHAR(50) NOT NULL,
    `author_id` BIGINT(20), #书评作者用户id
    `publish_time` TIMESTAMP NOT NULL,
    `right` INT(11) NOT NULL, #书评权限 0完全公开，1好友可见，2指定列表可见，3指定列表不可见

    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
#书评权限表
DROP TABLE IF EXISTS `moment_right`;
CREATE TABLE `moment_right` (
    `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
    `moment_id`  VARCHAR(50) NOT NULL,
    `users` TEXT NOT NULL, #权限涉及用户列表，记录用户id并以‘,’间隔

    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
#好友关系表 双向关系表
DROP TABLE IF EXISTS `friend`;
CREATE TABLE `friend` (
    `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
    `from_id`  BIGINT(20) NOT NULL,
    `to_id` BIGINT(20) NOT NULL，
    `status` INT(11) NOT NULL, #好友关系状态 0申请中，1已接受

    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
#群组信息表 
DROP TABLE IF EXISTS `group`;
CREATE TABLE `group` (
    `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
    `name`  VARCHAR(50) NOT NULL,
    `book` VARCHAR(50) NOT NULL, #群聊所属书籍

    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
#用户-群组关系表
DROP TABLE IF EXISTS `user_group`;
CREATE TABLE `user_group` (
    `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
    `user_id`  BIGINT(20) NOT NULL,
    `group_id` BIGINT(20) NOT NULL, 

    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
#聊天记录表
DROP TABLE IF EXISTS `chat`;
CREATE TABLE `chat` (
    `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
    `from_id`  BIGINT(20) NOT NULL,
    `to_id` BIGINT(20) NOT NULL,
    `send_time` TIMESTAMP NOT NULL,
    `type` INT(11) NOT NULL, #记录类型 0好友， 1 群聊

    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
#标签表
DROP TABLE IF EXISTS `tag`;
CREATE TABLE `tag` (
    `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
    `name`  VARCHAR(50) NOT NULL,#标签内容
    `user_id` BIGINT(20) NOT NULL,#标签所属用户id

    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
#标签-用户关系表
DROP TABLE IF EXISTS `tag-user`;
CREATE TABLE `tag-user` (
    `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
    `tag_id`  BIGINT(20) NOT NULL,#标签id
    `user_id` BIGINT(20) NOT NULL,#标签所贴用户id

    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
