const router = require('express').Router();
const UserController = require('../controller/user')

router.get('/', UserController.getAll);
router.get('/:id', UserController.getById);
router.post('/:id', UserController.updateById);
router.delete('/:id', UserController.deleteById);

module.exports = router;