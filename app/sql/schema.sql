DROP TABLE IF EXISTS HealthCheck;
CREATE TABLE HealthCheck (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
	connection TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO HealthCheck(connection) VALUES('ok');
