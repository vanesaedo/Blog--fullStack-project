const express = require('express');

const authorsController = require("../controllers/authors.controller");
const router = express.Router();

//http://localhost:3000/api/authors
router.get('/', authorsController.getAllAuthors);//OK

//http://localhost:3000/api/authors/alicia@mail.com
router.get('/:email', authorsController.getAuthorByEmail);

//http://localhost:3000/api/authors/ 
router.post('/new', authorsController.createAuthor);


//http://localhost:3000/api/authors/edit/alicia@mail.com
router.put('/edit/:email', authorsController.updateAuthorByEmail);


//http://localhost:3000/api/authors/9
router.delete('delete/:email', authorsController.deleteAuthor);

module.exports = router;

