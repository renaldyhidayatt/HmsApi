const AppointmentService = require("../service/appointment");

class AppointmentController {
  getAll(req, res) {
    return AppointmentService.getAll()
      .then((spe) => {
        res.send(spe);
      })
      .catch((err) => {
        return res.status(500).json({
          message: err,
        });
      });
  }
  getById(req, res) {
    return AppointmentService.getById(req.params.id)
      .then((spe) => {
        res.send(spe);
      })
      .catch((err) => {
        return res.status(500).json({
          message: err,
        });
      });
  }
  create(req, res) {
    const apo = {
      doctorSpecialization: req.body.doctorSpecialization,
      consultancyFees: req.body.consultancyFees,
      appointmentDate: req.body.appointmentDate,
      appointmentTime: req.body.appointmentTime,
      userStatus: req.body.userStatus,
      UserId: req.body.userId,
      DoctorId: req.body.doctorId,
      doctorStatus: req.body.doctorStatus,
    };

    return AppointmentService.create(apo)
      .then((apo) => {
        return res.send(apo);
      })
      .catch((err) => {
        return res.json({
          message: err,
        });
      });
  }

  updateById(req, res) {
    const apot = {
      doctorSpecialization: req.body.doctorSpecialization,
      consultancyFees: req.body.consultancyFees,
      appointmentDate: req.body.appointmentDate,
      appointmentTime: req.body.appointmentTime,
      userStatus: req.body.userStatus,
      userId: req.body.userId,
      doctorId: req.body.doctorId,
      doctorStatus: req.body.doctorStatus,
    };
    return AppointmentService.updateById(apot, req.params.id)
      .then((apo) => {
        return res.json({
          apo,
        });
      })
      .catch((err) => {
        res.json({
          err: err,
        });
      });
  }

  deleteById(req, res) {
    return AppointmentService.deleteById(req.params.id)
      .then((apo) => {
        return res.json({
          message: "Success",
          appointment: apo,
        });
      })
      .catch((err) => {
        return res.json({
          err: err,
        });
      });
  }
}

module.exports = new AppointmentController();
