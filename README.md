# git-profile

![](https://github.com/aleixmorgadas/git-profile/workflows/Node.js%20CI/badge.svg)

A command cli application to manage multiple git profiles.

## Installation

Requires nodejs 10.x or higher.

```text
$> npm i -g git-profile
```

## Usage

__Configuring a new profile__:

It will promp the profile name, your name and email for the new profile.

```text
$> git-profile new
```

__Using a profile in your git project__:

```text
$> git-profile use --profile=<profile_name>
```

## What does it under the hood

This command line only executes `git config user.email <your_email>` and `git config user.name <your_name>` based on the profile for now.

## Next possible enhancements

- [ ] [`git clone` based on profile and SSH Key](https://github.com/aleixmorgadas/git-profile/issues/1)
- [ ] Configure SSH key to current project

## License

Copyright (c) 2020 Aleix Morgadas <aleix.mp@protonmail.com>

Licensed under [MIT License](./LICENSE)