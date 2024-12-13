const express = require('express');
const router = express.Router();
const crudController = require('../controllers/crud.controller');

router.get('/records', crudController.getAllRecords);
router.post('/records', crudController.addRecord);
router.put('/records', crudController.updateRecord);
router.delete('/records/:id', crudController.deleteRecord);

module.exports = router;
