const Employee = require("./Employee");
//Specifies what it is inheriting from employee, except for officenumber.
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.role = "Manager";
        this.officeNumber = officeNumber;
    };
    getOffice() {
        return this.officeNumber;
    }
};

module.exports = Manager;
