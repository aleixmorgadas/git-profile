/**
 * Copyright (c) 2020 Aleix Morgadas <aleix.mp@protonmail.com>
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

const { newCommand } = require("../../src/cmds/new");

describe('new command', () => {
    test('not allow profiles with spaces', () => {
        const options = {
            profileName: 'profile with an space'
        };
        expect(() => newCommand(options)).toThrow('profile-name cannot contain spaces');
    });

    test('profileName be defined', () => {
        expect(() => newCommand({ profileName: undefined }))
            .toThrow('profile-name must be defined');
        expect(() => newCommand({ profileName: '' }))
            .toThrow('profile-name must be defined');
        expect(() => newCommand({}))
            .toThrow('profile-name must be defined');
    });

    test('name and email are required', () => {
        
    });
});
