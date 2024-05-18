require('dotenv').config();

const express = require("express");
const app = express();
const cors = require ('cors')

// Rutas
//const booksRoutes = require("./routes/books.routes")
//const productsRoutes = require("./routes/products.routes")
const entriesRoutes = require("./routes/entries.routes")
const authorsRoutes = require("./routes/authors.routes")

//Middlewares

app.use(cors())
//app.use(express.json()); // Para parsear el body de las peticiones

/******RUTAS ******/

// http://localhost:3000/
app.get("/", (req, res) => {
  res.status(200).send("Home. Welcome to backend!");
});

//API

app.use('/api/entries',entriesRoutes);
app.use('/api/authors',authorsRoutes);


// http://localhost:3000


app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});

