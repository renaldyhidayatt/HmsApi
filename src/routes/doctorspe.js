const router = require('express').Router()
const DoctorSpecController = require('../controller/doctorspe');


router.get('/doctorspesialis', DoctorSpecController.getAll) 
router.get('/doctorspesialis/:id', DoctorSpecController.getById); 
router.post('/doctorspesialis', DoctorSpecController.create);
router.post('/doctorspesialis/:id', DoctorSpecController.updateById);
router.delete('/doctorspesialis/:id', DoctorSpecController.deleteById);


module.exports = router;