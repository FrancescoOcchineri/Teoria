/* DDL - Data Definition Language */

CREATE DATABASE miodb; -- Crea un DB di nome miodb;
USE miodb;  -- Seleziona il DB da utilizzare;
DROP DATABASE miodb;  -- Cancella un db di nome miodb;

CREATE TABLE IF NOT EXISTS miatab ( -- Crea una tabella di nome miatab se non esiste;
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,  -- Crea una primary KEY con valori generati in automatico ed auto incrementanti
    name VARCHAR(255) NOT NULL,  -- Crea una colonna di tipo stringa non vuota
    age INT UNSIGNED NOT NULL,   -- Crea una colonna di tipo INT non vuota con valori positivi
    email VARCHAR(100) NOT NULL UNIQUE  -- Crea una colonna di tipo stringa con valori univoci
);

DROP TABLE miatab;  -- Cancella una tabella di nome miatab;

ALTER TABLE miatab ADD cf VARCHAR(16) NOT NULL UNIQUE;  -- Modifico la struttura della tabella aggiungendo un nuovo campo;
ALTER TABLE miatab RENEAME COLUMN cf to fiscal_code;  -- Modifico la struttura della tabella rinominando un campo esistente;
ALTER TABLE miatab DROP cf;  -- Modifico la struttura della tabella cancellando un campo esistente;

/* DKL - Data Manipulation Language */

INSERT INTO miatab (name, age, email)    -- Inserisco un RECORD nella tabella miatab nei campi (name, age, email);
    VALUES ('Mario', 25, 'm.rossi@example.com')   -- Con questi valori VALUES ('Mario', 25, 'm.rossi@example.com');
    
-- Modifica i valori del campo age ed email con dei nuovi valori per tutte le righe che hanno un id uguale a quello inserito;
UPDATE miatab SET age = 26, SET email = 'mario.rossi@example.com' WHERE id = 1;  -- Attenzione ad inserire sempre la clausola WHERE altrimenti vengono modificati tutti i record della tabella; 

DELETE FROM miatab WHERE id = 1;  -- Cancello tutti i valori della mia tabella, o uno inserito con la clausola WHERE;

/* DQL - Data Query Language */

SELECT name, email FROM miatab;  -- Restituisce nome ed email di tutti i record presenti nella tabella;
SELECT * FROM miatab;  -- Restituisce tutti i campi di tutti i record presenti nella tabella;
SELECT * FROM miatab WHERE id = 1;  -- Restituisce tutti i campi di tutti i record che corrispondono alla clausola WHERE nella tabella;
SELECT * FROM miatab WHERE name = 'Mario' AND age = 30;
SELECT * FROM miatab WHERE age > 18;
SELECT * FROM miatab WHERE email LIKE '%.com';   -- Restituisce tutti i campi in cui il campo email finisca con .com;
SELECT * FROM miatab WHERE email LIKE '%ro%';    -- Restituisce tutti i campi in cui il campo email contenga i caratteri 'ro';
SELECT * FROM miatab WHERE email LIKE 'ma%';     -- Restituisce tutti i campi in cui il campo email cominci con 'ma';
SELECT * FROM miatab WHERE email LIKE 'm%.com';  -- Restituisce tutti i campi in cui il campo email cominci con 'm' e finisca con .com;
SELECT * FROM miatab WHERE email LIKE 'm_rio@example.com';  -- Restituisce tutti i campi in cui il campo email nel secondo carattere può avere qualsiasi cosa;

