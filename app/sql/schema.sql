DROP TABLE IF EXISTS Users;
CREATE TABLE Users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO Users (username, password) VALUES ("test_user_01", "password01");
INSERT INTO Users (username, password) VALUES ("test_user_02", "password02");
