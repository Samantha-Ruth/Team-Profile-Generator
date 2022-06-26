const Intern = require('../Intern');

test('Creates an intern object', () => {
    const intern = new Intern('Henry', '23', 'henry23@gmail.com','Columbia');

    expect(intern.school).toEqual(expect.any(String));
    expect(intern.role).toEqual("intern");
});

test("Get intern's school", () => {
    const intern = new Intern('Henry', '23', 'henry23@gmail.com','Columbia');

    expect(intern.getSchool()).toBe("Columbia");
  });

test("Get intern's role", () => {
    const intern = new Intern("Columbia");

    expect(intern.getRole()).toBe("intern");
});