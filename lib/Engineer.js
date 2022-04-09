const Employee = require ("./Employee");
//Specifies what it is inheriting from employee, except for GitHub.
class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.role = "Engineer"
        this.github = github;
    };
    getGithub(){
        return this.github;
    }
}
module.exports = Engineer;
