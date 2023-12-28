DROP TABLE IF EXISTS Whiskys;
CREATE TABLE Whiskys (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  area TEXT NOT NULL,
  alc FLOAT NOT NULL,
  company TEXT,
  description TEXT,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL
);
