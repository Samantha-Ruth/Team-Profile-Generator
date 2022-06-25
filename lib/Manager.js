// what is required for this function? 

class Manager {
    constructor(officeNumber, role) {
    this.officeNumber = officeNumber;
    this.role = "manager";
    }
}

Manager.prototype.getRole = function () {
    return this.role; 
}

module.exports = Manager