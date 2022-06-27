const Engineer = require('../Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Dave', '17', 'email', 'Dave@gitHub');
  
    expect(engineer.gitHub).toEqual(expect.any(String));
    expect(engineer.role).toBe("engineer");
  });

test("Get engineer's gitHub username", () => {
    const engineer = new Engineer('Dave', '17', 'email', 'Dave@gitHub');

    expect(engineer.getGitHub()).toBe("Dave@gitHub");
  });

test("Get engineer's role", () => {
    const engineer = new Engineer("Dave@gitHub");

    expect(engineer.getRole()).toBe("engineer");
});


