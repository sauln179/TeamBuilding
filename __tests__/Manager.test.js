const Manager = require("../lib/Manager");

test("Can get the office number through the constructor", () =>{
    const testValue = 12;
    const e = new Manager ("Mot",10,"Mot@gmail.com",testValue);
    expect(e.officeNumber).toBe(testValue);
});
test("With getRole(), it should return Manager", () => {
    const testRole = "Manager"
    const e = new Manager ("Mot",10,"Mot@gmail.com",7);
    expect(e.getRole()).toBe(testRole);
});

test("With getOffice(), it should return office number", () => {
    const testValue = 39
    const e = new Manager ("Mot",10,"Mot@gmail.com",39);
    expect(e.getOffice()).toBe(testValue);
    
});
