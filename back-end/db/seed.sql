-- INSERT INTO test (name) VALUES
-- ('Monday'),
-- ('Tuesday'),
-- ('Wednesday'),
-- ('Thursday'),
-- ('Friday'),
-- ('Saturday'),
-- ('Sunday');
\c shirts_dev;

INSERT INTO shirts (size, color, price, in_stock) VALUES
('Medium', 'Blue', 20,true),
('Large', 'Pink', 30,true),
('Small', 'Green', 10,false),
('xx-Large', 'Yellow', 50,true),
('Medium', 'White', 20,false),
('Medium', 'Black', 20,true);


