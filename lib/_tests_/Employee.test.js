const Employee = require('../Employee');

test('Creates an employee object', () => {
    const employee = new Employee('Dave');

    expect(employee.name).toBe('Dave');
    expect(employee.ID).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

})

// test("Gets name as an object", () => {
//     const employee = new Employee("Dave");

//     expect(employee.getName()).toHaveProperty("name");
// });

// test("Gets employee's ID as an object", () => {
//     const employee = new Employee("Dave");

//     expect(employee.getID()).toHaveProperty("ID");
// })

// test("Get employee's email as a string", () => {
//     const employee = new Employee("Dave");

//     expect(employee.getEmail()).toEqual(expect.any(String));
// })