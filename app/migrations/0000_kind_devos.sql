DROP TABLE IF EXISTS `Whiskys`;
CREATE TABLE `whiskys` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`volume` integer,
	`abv` real,
	`area` text,
	`company` text,
	`description` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP
);
