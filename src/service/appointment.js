const DB = require("../database/models");
const Appointment = DB.Appointment;

class AppointmentService {
  getAll() {
    return Appointment.findAll({
        include: ["doctors", "users"]
    });
  }
  getById(id) {
    return Appointment.findByPk(id);
  }
  create(body) {
    return Appointment.create(body);
  }
  updateById(doctor, id) {
    return Appointment.update(doctor, {
      where: {
        id: id,
      },
    });
  }
  deleteById(id) {
    return Appointment.destroy({
      where: {
        id: id,
      },
    });
  }
}

module.exports = new AppointmentService();
