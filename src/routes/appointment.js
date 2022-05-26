const router = require('express').Router();
const AppointmentController = require('../controller/appointment');


router.get('/', AppointmentController.getAll) 
router.get('/:id', AppointmentController.getById); 
router.post('/', AppointmentController.create);
router.post('/:id', AppointmentController.updateById);
router.delete('/:id', AppointmentController.deleteById);




module.exports = router