DROP DATABASE IF EXISTS shirts_dev;
CREATE DATABASE shirts_dev;

\c shirts_dev;

CREATE TABLE shirts (
    id SERIAL PRIMARY KEY,
    type_of TEXT,
    size TEXT,
    color TEXT,
    price NUMERIC,
    in_stock BOOLEAN
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT
);