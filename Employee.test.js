
const Employee = require("../lib/Employee");

test("Can startup Employee object", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Able to set name through constructor", () => {
  const name = "Alice";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Able to set the id through constructor", () => {
  const testValue = 25;
  const e = new Employee("Foo", testValue);
  expect(e.id).toBe(testValue);
});

test("Able to set email through a costructor", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name through the getName() function", () => {
  const testValue = "Alice";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id through the getID() function", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.getID()).toBe(testValue);
});

test("Can get email through the getEmail() function", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Alice", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});