const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')
const teamMembers = [];

const generateHtml = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site.js');

const promptUser = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name?",
            validate: managerName => {
                if (managerName) {
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
            promptEngineer()
        }
        if (answers.newTeamMember === 'Intern') {
            promptIntern()
        }
        if (answers.newTeamMember === "I don't want to add any more team members") {
            console.log(teamMembers);
            console.log(teamMembers[0].managerName);
            managerName => (teamMember[0].managerName);
            console.log(managerName);
            return
        }
    })
}

const promptEngineer = engineerData => {
    console.log(`
    =================
    ADD AN ENGINEER
    =================
    `)

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "What is the engineer's name?",
                validate: engineerName => {
                    if (engineerName) {
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
        promptEmployee()
    })
};

const promptIntern = internData => {
    console.log(`
        =============
        ADD AN INTERN
        =============
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
    // .then(employeeData => {
    //     return generateHtml(employeeData);
    //     })
    // .then(pageHTML => {
    //     return writeFile(pageHTML);
    //     })
    // .then(writeFileResponse => {
    //     console.log(writeFileResponse);
    //     return copyFile();
    //     })
    // .then(copyFileResponse => {
    //     console.log(copyFileResponse);
    // })
    // .catch(err => {
    //     console.log(err)
    // });



