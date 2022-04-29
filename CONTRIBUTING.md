# Contributing ✨

Thank you for your interest in contributing to this project! Any contribution is welcome and invited! 🙌

If you are proposing a new feature, make sure to [open an issue](https://github.com/Norgate-AV-Solutions-Ltd/cra-template-crestron-ch5-typescript/issues/new/choose) to make sure it is inline with the project goals.

## Setup :technologist:

1.  Fork this repository to your own GitHub account and clone the development branch to your local device:

    ```bash
    git clone -b develop https://github.com/Norgate-AV-Solutions-Ltd/cra-template-crestron-ch5-typescript.git
    cd cra-template-crestron-ch5-typescript
    ```

2.  Install the dependencies:

    ```bash
    yarn
    ```

3.  Create a new branch and start working on it:

    ```bash
    git checkout -b my-feature
    ```

4.  Commit your changes:

    ```bash
    git commit -m "feat(my-feature): my feature description"
    ```

## Conventional Commits 📝

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)

This project enforces the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format for commits. If in doubt, you can use the `yarn commit` command to commit your changes. This will run the [Commitizen](https://commitizen-tools.github.io/commitizen/) CLI and walk you through a series of prompts to fill out the commit message in the correct format.

## Submitting a Pull Request 🚀

Be sure to run `yarn test` before you create your Pull Request to make sure you haven't broken anything.

## Add yourself as a Contributor 🙋‍♂️

This project follows the [all-contributors](https://allcontributors.org) specification. Contribution types are listed in the [emoji key](https://allcontributors.org/docs/en/emoji-key).

You can add yourself in one of two ways:

1.  Comment on the Pull Request, asking the @all-contributors bot to add you to the contributors list.

    ```
    @all-contributors please add @<username> for <contributions>
    ```

    > or

2.  Run the `yarn contrib:add` command to add yourself to the contributors list.

    ```bash
    yarn contrib:add <username> <contribution>,<contribution>,...
    ```
