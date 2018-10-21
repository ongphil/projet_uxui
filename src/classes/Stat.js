const uuidv4 = require("uuid/v4");

class Stat {
  constructor(date, nb_visitors, receipts) {
    // invokes the setter
    this.id = uuidv4();
    this.date = date;
    this.nb_visitors = nb_visitors;
    this.receipts = receipts;
  }

  /// GETTERS
  getId() {
    return this.id;
  }
  getDate() {
    return this.date;
  }
  getNbVisitors() {
    return this.nb_visitors;
  }
  getReceipts() {
    return this.receipts;
  }
  getAttributes() {
    let obj = {
      id: this.id,
      date: this.date,
      nb_visitors: this.nb_visitors,
      receipts: this.receipts
    };
    return obj;
  }

  /// SETTERS
  setDate(value) {
    this.date = value;
  }
  setNbVisitors(value) {
    this.nb_visitors = value;
  }
  setReceipts(value) {
    this.receipts = value;
  }
}

export default Stat;
