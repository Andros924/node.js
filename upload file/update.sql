DROP TABLE IF EXISTS planets;

CREATE TABLE planets (
  id SERIAL NOT NULL PRIMARY KEY,
  name TEXT NOT NULL,
  image TEXT -- Nuova colonna per il percorso dell'immagine
);