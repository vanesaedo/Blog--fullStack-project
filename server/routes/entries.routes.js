const express = require('express');

const entriesController = require("../controllers/entries.controller");
const router = express.Router();

//http://localhost:3000/api/authors
router.get('/', entriesController.getAllEntries);

//http://localhost:3000/api/new/?
router.post('/new/?', entriesController.createEntry);

//http://localhost:3000/edit/:title
router.put('/edit/:title', entriesController.updateEntry);

//http://localhost:3000/delete/:title
router.delete('/delete/:title', entriesController.deleteEntryByTitle);



module.exports = router;

