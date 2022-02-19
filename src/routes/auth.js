const router = require('express').Router();
const AuthController = require('../controller/auth');
const ProctectRoute = require('../middleware/auth')



router.post('/auth/register', AuthController.register);
router.post('/auth/login', AuthController.login);
// router.post('/auth/email', AuthController.EmailTes);
router.get('/ye', ProctectRoute, AuthController.testingapi);



module.exports = router;