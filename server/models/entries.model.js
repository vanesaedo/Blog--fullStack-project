const { Pool } = require("pg");
require('dotenv').config();

const pool = new Pool({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
});

const queries = require("./queries"); // Queries SQL

// GET
const getAllEntries = async () => {
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.getAllEntries);
    console.log(data);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};



const getEntriesByEmail = async (email) => {
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.getEntriesByEmail, [email]);
    console.log(data);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};
// CREATE
const createEntry = async (entry) => {
  const { title, content, email, category, entry_image } = entry;
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.createEntry, [
      title,
      content,
      email,
      category,
      entry_image
    ]);
    result = data.rowCount;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const updateEntry = async (entry, old_title) => {
  const { title, content, date, category, email} = entry;
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.updateEntry, [
      title,
      content,
      date,
      category,
      email,
      old_title
    ]);
    result = data.rowCount;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

// DELETE

const deleteEntryByTitle = async (title) => {
  //const { title, content, date, category, email, old_title} = entry;
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.deleteEntryByTitle, [title]);
    result = data.rowCount;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};


const entries = {
  getAllEntries,

  getEntriesByEmail,
  createEntry,
  updateEntry,
  deleteEntryByTitle
};

module.exports = entries;

// Pruebas
/*
getEntriesByEmail("birja@thebridgeschool.es")
    .then(data=>console.log(data))
*/

/*
getAllEntries()
.then(data=>console.log(data))
*/

/* let newEntry = {
    title: "Se acabaron las mandarinas de TB",
    content: "Corren rumores de que papa noel tenía un saco vacio y lo llenó",
    email: "guillermu@thebridgeschool.es",
    category: "sucesos"
}

createEntry(newEntry)
    .then(data => console.log(data)) */

/*
   const entry_to_update =  {
        title: "Nos vamos de tortillas",
        content: "Corren rumores de que papa noel tenía un saco vacio y lo llenó",
        date: "2021-12-25",
        category: "sucesos",
        email: "alejandru@thebridgeschool.es",
        old_title: "Noticia: Un panda suelto por la ciudad"
    }

    updateEntry(entry_to_update)
    .then(data => console.log(data)) 
    */
