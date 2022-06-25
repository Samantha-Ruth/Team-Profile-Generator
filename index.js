const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')
const teamMembers = [];

const promptUser = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log("Please enter the team manager's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerID',
            message: "What is the team manager's ID?",
            validate: managerID => {
                if (managerID) {
                    return true;
                } else {
                    console.log("Please enter the team manager's ID.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the team manager's email address?",
            validate: managerEmail => {
                if (managerEmail) {
                    return true;
                } else {
                    console.log("Please enter the manager's email address.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: "What is the team manager's office number?",
            validate: managerOffice => {
                if (managerOffice) {
                    return true;
                } else {
                    console.log("Please enter the manager's office number.");
                    return false;
                }
            }
        }
    ])
    .then((answers) => {
        teamMembers.push(answers)
    })
};

const promptEmployee = () => {
    return inquirer
    .prompt([
    {
        type: 'list',
        name: 'newTeamMember',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
    }
    ])
    .then((answers) => {
        if (answers.newTeamMember === 'Engineer') {
            console.log(teamMembers)
            promptEngineer()
        }
        if (answers.newTeamMember === 'Intern') {
            console.log(teamMembers)
            promptIntern()
        }
    })
    .then((answers) =>(console.log(answers)));
}

const promptEngineer = engineerData => {

    console.log(`
    =======================
    ADD ANOTHER TEAM MEMBER
    =======================
    `)

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the engineer's name?",
                validate: name => {
                    if (name) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's name.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerID',
                message: "What is the engineer's ID?",
                validate: engineerID => {
                    if (engineerID) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's ID.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is the engineer's email address?",
                validate: engineerEmail => {
                    if (engineerEmail) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's email address.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerGitHub',
                message: "What is the engineer's gitHub username?",
                validate: engineerGitHub => {
                    if (engineerGitHub) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's gitHub username.");
                        return false;
                    }
                }
            }
        ])
        .then((answers) => {
        teamMembers.push(answers)
        console.log(answers)
        promptEmployee()
    })
};

const promptIntern = internData => {
    console.log(`
        =======================
        ADD ANOTHER TEAM MEMBER
        =======================
        `)
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: "What is the intern's name?",
                validate: internName => {
                    if (internName) {
                        return true;
                    } else {
                        console.log("Please enter the intern's name.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'internID',
                message: "What is the intern's ID?",
                validate: internID => {
                    if (internID) {
                        return true;
                    } else {
                        console.log("Please enter the intern's ID.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is the intern's email address?",
                validate: internEmail => {
                    if (internEmail) {
                        return true;
                    } else {
                        console.log("Please enter the intern's email address.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "What school is the intern currently attending?",
                validate: internSchool => {
                    if (internSchool) {
                        return true;
                    } else {
                        console.log("Please enter the intern's school.");
                        return false;
                    }
                }
            },
        ])
        .then((answers) => {
            teamMembers.push(answers)
            console.log(answers)
            promptEmployee()
        })
}

promptUser()
.then(promptEmployee)



