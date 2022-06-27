const Employee = require('../Employee');

test('Creates an employee object', () => {
    const employee = new Employee('Dave', '17', 'email');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
})


test("Gets name as an object", () => {
    const employee = new Employee("Dave", '17', 'email');

     expect(employee.getName()).toBe("Dave");
 });

test("Gets employee's ID as an object", () => {
    const employee = new Employee("Dave", '17', 'email');

    expect(employee.getID()).toBe("17");
});

test("Get employee's email as a string", () => {
    const employee = new Employee("Dave", '17', 'email');

    expect(employee.getEmail()).toBe("email");
});

test("Get employee's role", () => {
    const employee = new Employee("Dave", '17', 'email');

    expect(employee.getRole()).toBe("employee");
});