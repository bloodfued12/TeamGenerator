// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email, getName, getId, getEmail, getRole) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.getName =  function() { console.log(`${name}`)};
    this.getId =  function () { console.log(`${id}`)  };
    this.getEmail =  function () {console.log(`${email}`)   };
    this.getRole =  function () {console.log("Employee")};
}
};

module.exports = Employee;
