const router = require('express').Router()
const DoctorSpecController = require('../controller/doctorspe');


router.get('/', DoctorSpecController.getAll) 
router.get('/:id', DoctorSpecController.getById); 
router.post('/', DoctorSpecController.create);
router.post('/:id', DoctorSpecController.updateById);
router.delete('/:id', DoctorSpecController.deleteById);


module.exports = router;