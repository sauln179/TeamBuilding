const Engineer = require("../lib/Engineer");

test("Can get GitHUB account through the constructor", () =>{
    const testGit = "GitTest";
    const e = new Engineer ("Willie",223,"Willie@gmail.com",testGit);
    expect(e.github).toBe(testGit);
});
test("With getRole(), it should return Engineer", () => {
    const testRole = "Engineer"
    const e = new Engineer ("Willie",230,"Willie@gmail.com","GitTest");
    expect(e.getRole()).toBe(testRole);
});

test("With getGitHub(), it should return office number", () => {
    const testGit = "GitTest"
    const e = new Engineer ("Willie",230,"Willie@gmail.com","GitTest");
    expect(e.getGithub()).toBe(testGit);
    
});
