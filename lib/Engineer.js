// what is required for this function? 
class Engineer {
    constructor(gitHub, role) {
    this.gitHub = gitHub;
    this.role = "engineer";
    }
}

Engineer.prototype.getGitHub = function () {
    return this.gitHub
}

Engineer.prototype.getRole = function () {
    return this.role; 
}

module.exports = Engineer

