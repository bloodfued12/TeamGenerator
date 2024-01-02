// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./lib/Employee.js");
class Intern extends Employee {
  constructor(school, getSchool, getRole) {
    this.school = school;
    this.getSchool = function () {
      console.log(`${school}`);
    };
    this.getRole = "Intern";
    super(id, name, email, getName, getId, getEmail, getRole);
  }
}
module.exports = Intern;