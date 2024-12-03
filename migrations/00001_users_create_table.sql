BEGIN;
CREATE TABLE  "users" (
    id SERIAL PRIMARY KEY,
    email TEXT NOT NULL UNIQUE, 
    hashed_password TEXT NOT NULL
);

INSERT INTO "users" (email, hashed_password) VALUES
('mohamed', 'mohamed'),
('hamza', 'hamza');
COMMIT;
