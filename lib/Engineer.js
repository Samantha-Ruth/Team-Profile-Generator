const Employee = require('./Employee')

class Engineer extends Employee {

    constructor(name, id, email, gitHub, role) {
        super(name, id, email);

    this.gitHub = gitHub;
    this.role = "engineer";
    }

getGitHub () {
    return this.gitHub
    }

getRole () {
    return this.role; 
    }
}

module.exports = Engineer

