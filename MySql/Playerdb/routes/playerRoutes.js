const express = require('express');
const playerController = request('../controller/player.js');
const router = express.Router();

router.post('/add',playerController.addEntries);
router.put('/:id',playerController.updateEntries);
router.delete('/:id',playerController.deleteEntries);

module.exports = router;