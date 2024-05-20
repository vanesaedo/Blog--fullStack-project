const express = require('express');

const authorsController = require("../controllers/authors.controller");
const router = express.Router();

//http://localhost:3000/api/authors
router.get('/', authorsController.getAllAuthors);//OK

//http://localhost:3000/api/authors/birja@thebridgeschool.es
router.get('/:email', authorsController.getAuthorByEmail);//OK

//http://localhost:3000/api/authors/ 
router.post('/new', authorsController.createAuthor);//OK


//http://localhost:3000/api/authors/edit/birja@thebridgeschool.es
router.put('/edit/:email', authorsController.updateAuthorByEmail);


//http://localhost:3000/api/authors/9
router.delete('delete/:email', authorsController.deleteAuthor);

module.exports = router;

