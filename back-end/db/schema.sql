CREATE TABLE shirts (
    id SERIAL PRIMARY KEY,
    type_of TEXT,
    size TEXT,
    color TEXT,
    price NUMERIC,
    in_stock BOOLEAN
);