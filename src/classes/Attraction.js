const uuidv4 = require("uuid/v4");

class Attraction {
  constructor(name, date_installation, price) {
    // invokes the setter
    this.id = uuidv4();
    this.name = name;
    this.date_installation = date_installation;
    this.price = price;
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
  getPrice() {
    return this.price;
  }
  getAttributes() {
    const obj = {
      id: this.id,
      name: this.name,
      date_installation: this.date_installation,
      price: this.price
    };
    return obj;
  }

  /// SETTERS
  setName(value) {
    this.name = value;
  }
  setDate(value) {
    this.date_installation = value;
  }
  setPrice(value) {
    this.price = value;
  }
}

export default Attraction;
