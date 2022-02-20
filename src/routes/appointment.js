const router = require('express').Router();
const AppointmentController = require('../controller/appointment');


router.get('/appointment', AppointmentController.getAll) 
router.get('/appointment/:id', AppointmentController.getById); 
router.post('/appointment', AppointmentController.create);
router.post('/appointment/:id', AppointmentController.updateById);
router.delete('/appointment/:id', AppointmentController.deleteById);




module.exports = router