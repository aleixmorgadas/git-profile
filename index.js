#!/usr/bin/env node
/**
 * Copyright (c) 2020 Contributors as noted in the AUTHORS file
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

clear();

console.log(
  chalk.yellow(
    figlet.textSync('git-profile', { horizontalLayout: 'full' })
  )
);