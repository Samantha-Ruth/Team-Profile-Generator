// what is required for this function? 

class Intern {
    constructor(school, role) {
    this.school = school;
    this.role = "intern";
    }
}

Intern.prototype.getSchool = function () {
    return this.school
}

Intern.prototype.getRole = function () {
    return this.role; 
}

module.exports = Intern