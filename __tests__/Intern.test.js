const intern = require("../lib/Intern");

test("Can get School through the constructor", () =>{
    const testSchool = "SF State";
    const e = new intern ("Maxie",45,"Maxie@gmail.com",testSchool);
    expect(e.school).toBe(testSchool);
});
test("With getRole(), it should return intern", () => {
    const testRole = "Intern"
    const e = new intern ("Maxie",45,"Maxie@gmail.com","SF State");
    expect(e.getRole()).toBe(testRole);
});

test("With getSchool(), it should return school", () => {
    const testSchool = "UCLA"
    const e = new intern ("Maxie",45,"Maxie@gmail.com","UCLA");
    expect(e.getSchool()).toBe(testSchool);
    
});
