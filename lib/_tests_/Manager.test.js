const Manager = require('../Manager');

test('Creates an manager object', () => {
    const manager = new Manager('Dave');

    expect(manager.officeNumber).toEqual(expect.any(String));
    expect(manager.role).toEqual("manager");
});

test("Get manager's role", () => {
    const manager = new Manager("Dave");

    expect(manager.getRole()).toBe("manager");
});