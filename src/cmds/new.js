/**
 * Copyright (c) 2020 Aleix Morgadas <aleix.mp@protonmail.com>
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
const inquirer = require('inquirer');
const calk = require('chalk');

exports.command = 'new [profile-name] [--name] [--email]'
exports.desc = 'Create a new profile'
exports.builder = {
}

exports.handler = async function (argv) {
    const questions = [];
    if(argv.profileName === undefined) {
        questions.push({
            type: 'string',
            name: 'profileName',
            message: 'profile name'
          });
    }
    if(argv.name === undefined) {
        questions.push({
            type: 'string',
            name: 'name',
            message: 'git name'
          });
    }
    if(argv.email === undefined) {
        questions.push({
            type: 'string',
            name: 'email',
            message: 'git email'
          });
    }
    const answers = await inquirer.prompt(questions);
    const options = {
        profileName: argv.profileName || answers.profileName,
        name: argv.name || answers.name,
        email: argv.email || answers.email,
    }
    try {
        newCommand(options);
    } catch(err) {
        console.log(calk.red.bold('ERROR: ') + err)
    }
}

function newCommand(options) {
    console.log(options);
    const { profileName } = options;
    if (profileName === undefined || profileName === '') {
        throw 'profile-name must be defined';
    }
    if (profileName.includes(" ")) {
        throw 'profile-name cannot contain spaces';
    }
};

exports.newCommand = newCommand;