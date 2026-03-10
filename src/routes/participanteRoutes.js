const express = require('express');
const router = express.Router();
const participanteController = require('../controllers/participanteController');

router.get('/', participanteController.index);
router.get('/:id', participanteController.show);
router.post('/', participanteController.store);
router.put('/:id', participanteController.update);
router.delete('/:id', participanteController.destroy);

module.exports = router;