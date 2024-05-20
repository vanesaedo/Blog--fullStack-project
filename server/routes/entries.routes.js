const express = require('express');

const entriesController = require("../controllers/entries.controller");
const router = express.Router();


router.get('/', entriesController.getAllEntries);
router.post('/new/?', entriesController.createEntry);
router.put('/edit/:title', entriesController.updateEntry);
router.delete('/delete/:title', entriesController.deleteEntryByTitle);



module.exports = router;

