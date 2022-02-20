const DoctorService = require("../service/doctor");

class DoctorController {
  getAll(req, res) {
    return DoctorService.getAll()
      .then((doctor) => {
        res.send(doctor);
      })
      .catch((err) => {
        return res.status(500).json({
          message: err,
        });
      });
  }
  getById(req, res) {
    return DoctorService.getById(req.params.id)
      .then((doctor) => {
        res.send(doctor);
      })
      .catch((err) => {
        return res.status(500).json({
          message: err,
        });
      });
  }
  create(req, res) {
    const doctor = {
      doctorName: req.body.doctorName,
      specilization: req.body.specilization,
      address: req.body.address,
      docFees: req.body.docFees,
      contactno: req.body.contactno,
      docEmail: req.body.docEmail,
    };

    return DoctorService.create(doctor)
      .then((doctor) => {
        return res.send(doctor);
      })
      .catch((err) => {
        return res.json({
          message: err,
        });
      });
  }

  updateById(req, res) {
    const doctor = {
      doctorName: req.body.name,
      specilization: req.body.specilization,
      address: req.body.address,
      docFees: req.body.docFees,
      contactno: req.body.contactno,
      docEmail: req.body.docEmail,
    };
    return DoctorService.updateById(doctor, req.params.id)
      .then((doctor) => {
        return res.json({
          doctor,
        });
      })
      .catch((err) => {
        res.json({
          err: err,
        });
      });
  }

  deleteById(req, res) {
    return DoctorService.deleteById(req.params.id)
      .then((doctor) => {
        return res.json({
          message: "Success",
          doctor: doctor,
        });
      })
      .catch((err) => {
        return res.json({
          err: err,
        });
      });
  }
}

module.exports = new DoctorController();
