const router = require('express').Router();
const UserController = require('../controller/user')

router.get('/user', UserController.getAll);
router.get('/user/:id', UserController.getById);
router.post('/user/:id', UserController.updateById);
router.delete('/user/:id', UserController.deleteById);

module.exports = router;