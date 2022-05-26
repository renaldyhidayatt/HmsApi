const router = require('express').Router()
const DoctorController = require('../controller/doctor');


router.get('/', DoctorController.getAll) 
router.get('/:id', DoctorController.getById); 
router.post('/', DoctorController.create);
router.post('/:id', DoctorController.updateById);
router.delete('/:id', DoctorController.deleteById);


module.exports = router;