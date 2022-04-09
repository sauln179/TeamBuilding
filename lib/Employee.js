//Employee class, from which the other classes will inherit from.
//All functions below returns its corresponding item.
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee"
    }
    getName() {
        return this.name;
    }
    getID() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole(){
        return this.role;
    }

}
module.exports = Employee;
