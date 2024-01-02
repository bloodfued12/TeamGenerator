// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./lib/Employee.js');
class Engineer extends Employee {
    constructor(github, getGithub, getRole) {
        this.github = github;
        this.getGithub = function (){
            console.log(`${github}`);
        };
        this.getRole = "Engineer"
        super(id,name, email, getName, getId, getEmail, getRole);
    }
};