const DoctorSpecService = require("../service/doctorspe");

class DoctorSpecController {
  getAll(req, res) {
    return DoctorSpecService.getAll()
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
    return DoctorSpecService.getById(req.params.id)
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
    const doctor = {
      specilization: req.body.specilization
    };

    return DoctorSpecService.create(doctor)
      .then((specilization) => {
        return res.send(specilization);
      })
      .catch((err) => {
        return res.json({
          message: err,
        });
      });
  }

  updateById(req, res) {
    const doctor = {
      specilization: req.body.specilization
    };
    return DoctorSpecService.updateById(doctor, req.params.id)
      .then((spesialist) => {
        return res.json({
          spesialist,
        });
      })
      .catch((err) => {
        res.json({
          err: err,
        });
      });
  }

  deleteById(req, res) {
    return DoctorSpecService.deleteById(req.params.id)
      .then((spesialist) => {
        return res.json({
          message: "Success",
          spesialist: spesialist,
        });
      })
      .catch((err) => {
        return res.json({
          err: err,
        });
      });
  }
}

module.exports = new DoctorSpecController();
