/**
 * Copyright (c) 2020 Aleix Morgadas <aleix.mp@protonmail.com>
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

require('yargs')
  .commandDir('cmds')
  .demandCommand()
  .help()
  .argv