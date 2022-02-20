const DB = require("../database/models");
const Doctor = DB.Doctor;

class DoctorService {
  getAll() {
    return Doctor.findAll();
  }
  getById(id) {
    return Doctor.findByPk(id);
  }
  create(doctor){
      return Doctor.create(doctor);
  }

  updateById(doctor, id) {
    return Doctor.update(doctor, {
      where: {
        id: id,
      },
    });
  }
  deleteById(id) {
    return Doctor.destroy({
      where: {
        id: id,
      },
    });
  }
}

module.exports = new DoctorService();
