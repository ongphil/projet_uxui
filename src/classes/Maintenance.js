const uuidv4 = require('uuid/v4');

class Maintenance {

  constructor(last_date, next_date, attraction, technicien) {
    // invokes the setter
    this.id = uuidv4();
    this.last_date = last_date;
    this.next_date = next_date;
    this.attraction = attraction;
    this.technicien = technicien;
  }

  /// GETTERS
  getId() {
    return this.id;
  }
  getLastDate() {
    return this.last_date;
  }
  getNextDate() {
    return this.next_date;
  }
  getAttraction() {
    return this.attraction;
  }
  getTechnicien() {
    return this.technicien;
  }

  /// SETTERS
  setLastDate(value) {
    this.last_date = value;
  }
  setNextDate(value) {
    this.next_date = value;
  }
  setAttraction(value) {
    this.attraction = value;
  }
  setTechnicien(value) {
    this.technicien = value;
  }

}

export default Maintenance;
