const uuidv4 = require('uuid/v4');

class Batiment {

  constructor(name, date_installation) {
    // invokes the setter
    this.id = uuidv4();
    this.name = name;
    this.date_installation = date_installation;
  }

  /// GETTERS
  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getDate() {
    return this.date_installation;
  }

  /// SETTERS
  setName(value) {
    this.name = value;
  }
  setDate(value) {
    this.date_installation = value;
  }

}

export default Batiment;
