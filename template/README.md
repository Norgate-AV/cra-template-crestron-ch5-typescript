# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

## Contents 📖

-   [Features :white_check_mark:](#features-white_check_mark)
-   [Inside the Box :package:](#inside-the-box-package)
-   [Enable Husky Git Hooks :dog:](#enable-husky-git-hooks-dog)
-   [Project Configuration :zap:](#project-configuration-zap)
-   [Available Scripts :rocket:](#available-scripts-rocket)
    -   [Create React App](#create-react-app)
        -   [`yarn start`](#yarn-start)
        -   [`yarn test`](#yarn-test)
        -   [`yarn build`](#yarn-build)
        -   [`yarn eject`](#yarn-eject)
    -   [Crestron CH5](#crestron-ch5)
        -   [`yarn build:archive`](#yarn-buildarchive)
        -   [`yarn build:deploy:touchscreen`](#yarn-builddeploytouchscreen)
        -   [`yarn build:onestep:touchscreen`](#yarn-buildonesteptouchscreen)
        -   [`yarn build:deploy:web`](#yarn-builddeployweb)
        -   [`yarn build:onestep:web`](#yarn-buildonestepweb)
    -   [Docker](#docker)
        -   [`yarn build:docker`](#yarn-builddocker)
    -   [Electron](#electron)
        -   [`yarn build:electron`](#yarn-buildelectron)
        -   [`yarn electron:dev`](#yarn-electrondev)
    -   [General](#general)
        -   [`yarn clean:all`](#yarn-cleanall)
        -   [`yarn commit`](#yarn-commit)
        -   [`yarn lint`](#yarn-lint)
        -   [`yarn lint:fix`](#yarn-lintfix)
        -   [`yarn pretty:fix`](#yarn-prettyfix)
-   [Learn More :books:](#learn-more-books)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Features :white_check_mark:

-   ✅ Works with [Crestron CH5 CrComLib](https://www.npmjs.com/package/@crestron/ch5-crcomlib) out of the box.
    -   No need to manually edit the CrComLib `package.json` 👍
-   ✅ React v18 Ready
-   ✅ Eruda Setup
-   ✅ Basic Redux Setup
-   ✅ Basic GitHub Actions CI
-   ✅ Multiple Build Options
    -   ✅ React App
    -   ✅ Crestron CH5 Archive (`.ch5z`)
    -   ✅ Docker Image
    -   ✅ Electron App

## Inside the Box :package:

-   [Crestron CH5 CrComLib](https://www.npmjs.com/package/@crestron/ch5-crcomlib)
    -   Crestron HTML5 (CH5) Components Library
-   [Crestron CH5 WebXPanel](https://www.npmjs.com/package/@crestron/ch5-webxpanel)
    -   Browser control of ch5 components library
-   [Crestron CH5 CLI](https://www.npmjs.com/package/@crestron/ch5-utilities-cli)
    -   Crestron CH5 utilities
-   [Crestron CH5 Helper](https://www.npmjs.com/package/@norgate-av/crestron-ch5-helper)
    -   A helper collection of Crestron CH5 constants 😀
-   [Typescript](https://www.typescriptlang.org/)
    -   A superset of JavaScript that compiles to clean JavaScript output
-   [React Router](https://reactrouterdotcom.fly.dev/)
    -   Declarative routing for React
-   [Redux](https://redux.js.org/)
    -   Predictable state container for JavaScript apps
-   [React Redux](https://react-redux.js.org/)
    -   Official React bindings for Redux
-   [Redux Toolkit](https://redux-toolkit.js.org/)
    -   The official, opinionated, batteries-included toolset for efficient Redux development
-   [Styled Components](https://styled-components.com/)
    -   Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps 💅
-   [TailwindCSS](https://tailwindcss.com/)
    -   A utility-first CSS framework for rapid UI development
-   [clsx](https://www.npmjs.com/package/clsx)
    -   A tiny (228B) utility for constructing className strings conditionally
-   [React Icons](https://react-icons.github.io/react-icons/)
    -   svg react icons of popular icon packs
-   [React Crestron CH5 Hooks](https://www.npmjs.com/package/@norgate-av/react-crestron-ch5-hooks)
    -   A collection of Crestron CH5 hooks ⚓ for React 😀
-   [Rooks](https://react-hooks.org/)
    -   Essential React custom hooks ⚓ to super charge your components!
-   [Eruda](https://eruda.liriliri.io/)
    -   Console for mobile browsers
-   [Axios](https://axios-http.com/)
    -   Promise based HTTP client for the browser and node.js
-   [ESLint](https://eslint.org/)
    -   Find and fix problems in your JavaScript code
-   [Prettier](https://prettier.io/)
    -   An opinionated code formatter
-   [Husky](https://typicode.github.io/husky/#/)
    -   Git hooks made easy 🐶 woof!
    -   **NOTE** This feature needs to be manually enabled. See [here](#enable-husky-git-hooks-dog) for more details.
-   [Lint-Staged](https://github.com/okonet/lint-staged)
    -   🚫💩 — Run linters on git staged files
    -   **Requires** [Husky](#enable-husky-git-hooks-dog) to be enabled.
-   [Commitizen](https://commitizen-tools.github.io/commitizen/)
    -   Create committing rules for projects 🚀 auto bump versions ⬆️ and auto changelog generation 📂
-   [commitlint](https://commitlint.js.org/#/)
    -   📓 Lint commit messages
    -   **Requires** [Husky](#enable-husky-git-hooks-dog) to be enabled.
-   [GitHub Actions CI](https://github.com/features/actions)
    -   Automate your workflow from idea to production
-   [VSCode Workspace Settings](https://code.visualstudio.com/docs/getstarted/settings#_workspace-settings)
-   [EditorConfig](https://editorconfig.org/)
-   [Docker Support](https://www.docker.com/)
    -   Build safer, share wider, run faster
    -   **Requires** [Docker](https://docs.docker.com/get-docker/) and [Docker-Compose](https://docs.docker.com/compose/install/) to be installed on your local machine. [Portainer](https://www.portainer.io/) is also recommended as a front end for managing Docker containers. It is free and open-source.
-   [Electron Support](https://electronjs.org/)
    -   Build cross-platform desktop apps with JavaScript, HTML, and CSS

## Enable Husky Git Hooks :dog:

Currently, to use the Husky Git Hooks feature provided by this template you must manually run the following command within the project directory after the bootstrap completes. This will update the local git configuration to use the hooks in the `.husky` directory.

```sh
npm run husky:install

# or

yarn husky:install
```

## Project Configuration :zap:

To upload to a Crestron touchscreen or control system using the scripts provided by this template, add the IP address or hostname to the project properties in `package.json`.

```json
{
    "crestron": {
        "project": {
            "touchscreen": {
                "url": "Enter IP/Hostname of Crestron Touchpanel here...",
                "type": "touchscreen"
            },
            "web": {
                "url": "Enter IP/Hostname of Crestron Processor here...",
                "type": "web",
                "config": {
                    "host": "localhost",
                    "ipId": "0x03",
                    "roomId": ""
                }
            }
        }
    }
}
```

## Available Scripts :rocket:

In the project directory, you can run:

### Create React App

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Crestron CH5

#### `yarn build:archive`

Builds a Crestron CH5 `.ch5z` archive file from the most recent build and outputs to the dist folder.

#### `yarn build:deploy:touchscreen`

Deploys the Crestron CH5 `.ch5z` archive file from the dist folder to a touchscreen.

#### `yarn build:onestep:touchscreen`

Executes the build, archive and deploy steps in sequence.

#### `yarn build:deploy:web`

Deploy the Crestron CH5 `.ch5z` archive file from the dist folder to a control system.

#### `yarn build:onestep:web`

Executes the build, archive and deploy steps in sequence.

### Docker

#### `yarn build:docker`

Builds the application into a lightweight Docker image.\
Creates a Docker container from the image running on the port specified in the `.env` file.\
The default port is `8080`.\
You can then view your application at [http://localhost:8080](http://localhost:8080).

### Electron

#### `yarn build:electron`

Builds the application into a standalone Electron desktop application and outputs to the app directory.

#### `yarn electron:dev`

Starts the Electron application in development mode.\
The page will reload if you make edits.\
You will also see any lint errors in the console.

### General

#### `yarn clean:all`

Deletes the `app`, `build` and `dist` directories.

#### `yarn commit`

Invokes the [Commitizen](https://commitizen-tools.github.io/commitizen/) CLI and walks you through a series of prompts to fill out the commit message in the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format.

#### `yarn lint`

Will run the linter on the project and report any errors.

#### `yarn lint:fix`

Will run the linter on the project and automatically fix any fixable errors.\
This script is run automatically by [Lint-Staged](https://github.com/okonet/lint-staged) on any files being committed to the Git repository if [Husky](https://typicode.github.io/husky/#/) is enabled. See [here](#enable-husky-git-hooks-dog) to enable Husky.

#### `yarn pretty:fix`

Applies the Prettier formatting rules to the project.\
This script is run automatically by [Lint-Staged](https://github.com/okonet/lint-staged) on any files being committed to the Git repository if [Husky](https://typicode.github.io/husky/#/) is enabled. See [here](#enable-husky-git-hooks-dog) to enable Husky.

## Learn More :books:

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

To learn Crestron CH5, check out the [Crestron CH5 documentation](https://sdkcon78221.crestron.com/sdk/Crestron_HTML5UI/Content/Topics/Home.htm).
