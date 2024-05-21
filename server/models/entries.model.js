const queries = require("./queries"); // Queries SQL
const pool = require('../config/db_pgsql');

// GET

// Devuelve todos los artículos
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

// Filtra entradas por email
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

// Crea un nuevo artículo
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

// Elimina una entrada localizada por el título
const deleteEntryByTitle = async (title) => {
  let client, result;
  try {
    client = await pool.connect(); 
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



