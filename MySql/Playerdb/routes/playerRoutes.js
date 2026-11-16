const express = require('express');
const playerController = require('../controller/player.js');
const router = express.Router();

router.post('/add',playerController.addEntries);
router.get('/playerlist',playerController.showEntries);
router.put('/:id',playerController.updateEntries);
router.delete('/:id',playerController.deleteEntries);

module.exports = router;