const uuidv4 = require("uuid/v4");

class Employe {
  constructor(last_name, first_name, age, job, salary) {
    // invokes the setter
    this.id = uuidv4();
    this.last_name = last_name;
    this.first_name = first_name;
    this.age = age;
    this.job = job;
    this.salary = salary;
  }

  /// GETTERS
  getId() {
    return this.id;
  }
  getLastName() {
    return this.last_name;
  }
  getFirstName() {
    return this.first_name;
  }
  getAge() {
    return this.age;
  }
  getJob() {
    return this.job;
  }
  getSalary() {
    return this.salary;
  }
  getAttributes() {
    let obj = {
      id: this.id,
      last_name: this.last_name,
      first_name: this.first_name,
      age: this.age,
      job: this.job,
      salary: this.salary
    };
    return obj;
  }

  /// SETTERS
  setLastName(value) {
    this.last_name = value;
  }
  setFirstName(value) {
    this.first_name = value;
  }
  setAge(value) {
    this.age = value;
  }
  setJob(value) {
    this.job = value;
  }
  setSalary(value) {
    this.salary = value;
  }
}

export default Employe;
