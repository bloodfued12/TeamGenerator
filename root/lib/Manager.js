// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./lib/Employee.js');
class Manager extends Employee {
    constructor(getRole){
        this.getRole = "Manager";
    super(id,name, email, getName, getId, getEmail, getRole);
    }
}
module.exports = Manager;