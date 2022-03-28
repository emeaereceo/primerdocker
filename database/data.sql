-- TUVE ERRORES AL CORRER MIGRATE.JS 
-- ASI QUE EJECUTE LAS CONSULTAS DIRECTO EN LA BBDD

-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp"

CREATE TABLE todos (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    title varchar(255) NOT NULL,
    description varchar(255) NOT NULL
)


INSERT INTO todos (title, description) 
VALUES 
    ('Primer Todo', 'Primer Todo Description'),
    ('Segundo Todo', 'Segundo Todo Description'),
    ('Tercer Todo', 'Tercer Todo Description'),
    ('Cuarto Todo', 'Cuarto Todo Description'),
    ('Quinto Todo', 'Quinto Todo Description'),
    ('Sexto Todo', 'Sexto Todo Description'),
    ('Septimo Todo', 'Septimo Todo Description'),
    ('Octavo Todo', 'Octavo Todo Description')



-- INSERT INTO todos (title, description) VALUES ('Primer Todo', 'Primer Todo Description')
-- INSERT INTO todos (title, description) VALUES ('Segundo Todo', 'Segundo Todo Description')
-- INSERT INTO todos (title, description) VALUES ('Tercer Todo', 'Tercer Todo Description')
-- INSERT INTO todos (title, description) VALUES ('Cuarto Todo', 'Cuarto Todo Description')
-- INSERT INTO todos (title, description) VALUES ('Quinto Todo', 'Quinto Todo Description')
-- INSERT INTO todos (title, description) VALUES ('Sexto Todo', 'Sexto Todo Description')
-- INSERT INTO todos (title, description) VALUES ('Septimo Todo', 'Septimo Todo Description')
-- INSERT INTO todos (title, description) VALUES ('Octavo Todo', 'Octavo Todo Description')