const Employee = require ("./Employee");
//Specifies what it is inheriting from employee, except for school.
class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.role = "Intern"
        this.school = school;
    };
    getSchool(){
        return this.school;
    }
}
module.exports = Intern;
