const router = require('express').Router()
const DoctorController = require('../controller/doctor');


router.get('/doctor', DoctorController.getAll) 
router.get('/doctor/:id', DoctorController.getById); 
router.post('/doctor', DoctorController.create);
router.post('/doctor/:id', DoctorController.updateById);
router.delete('/doctor/:id', DoctorController.deleteById);


module.exports = router;