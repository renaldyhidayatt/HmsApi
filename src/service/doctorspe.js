const DB = require("../database/models");
const DoctorSpe = DB.DoctorSpecialists;

class DoctorSpecService {
  getAll() {
    return DoctorSpe.getAll();
  }
  getById(id) {
    return DoctorSpe.findByPk(id);
  }
  create(body) {
    return DoctorSpe.create(body);
  }
  updateById(doctor, id) {
    return DoctorSpe.update(doctor, {
      where: {
        id: id,
      },
    });
  }
  deleteById(id) {
    return DoctorSpe.destroy({
      where: {
        id: id,
      },
    });
  }
}

module.exports = new DoctorSpecService();
