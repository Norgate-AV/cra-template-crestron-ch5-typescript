# cra-template-crestron-ch5-typescript

<div align="center">
	<img src="./template/src/logo.svg" alt="react-logo" width="200" />
	<img src="./template/src/assets/crestron-ch5-logo.png" alt="ch5-logo" width="200" />
</div>

---

[![CI](https://github.com/Norgate-AV-Solutions-Ltd/cra-template-crestron-ch5-typescript/actions/workflows/main.yml/badge.svg?branch=develop)](https://github.com/Norgate-AV-Solutions-Ltd/cra-template-crestron-ch5-typescript/actions/workflows/main.yml)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![GitHub contributors](https://img.shields.io/github/contributors/Norgate-AV-Solutions-Ltd/cra-template-crestron-ch5-typescript)](#contributors)
[![NPM](https://img.shields.io/npm/v/@norgate-av/cra-template-crestron-ch5-typescript.svg)](https://www.npmjs.com/package/@norgate-av/cra-template-crestron-ch5-typescript)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

This is an unofficial third party TypeScript template for [Create React App](https://github.com/facebook/create-react-app) and [Crestron CH5](https://www.npmjs.com/package/@crestron/ch5-crcomlib)

The template is setup to work with Crestron CH5 out of the box so you can get up and running quickly. It also provides packages for page routing, styling using [CSS-in-JS](https://en.wikipedia.org/wiki/CSS-in-JS) (you can still use regular CSS or SCSS 😄), a wide variety of icons, mobile browser console, linting and more... 🚀 🚀 🚀

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

**NOTE**

To use the Husky Git Hooks feature provided by this template you must manually run the following command within the project directory after the bootstrap completes.

```sh
npm run husky:install

# or

yarn husky:install
```

To use this template, add `--template @norgate-av/crestron-ch5-typescript` when creating a new app.

For example:

```sh
npx create-react-app my-app --template @norgate-av/crestron-ch5-typescript

# or

yarn create react-app my-app --template @norgate-av/crestron-ch5-typescript
```

## What does this template provide?

-   [Crestron CH5 CrComLib](https://www.npmjs.com/package/@crestron/ch5-crcomlib)
-   [Crestron CH5 WebXPanel](https://www.npmjs.com/package/@crestron/ch5-webxpanel)
-   [Crestron CH5 CLI](https://www.npmjs.com/package/@crestron/ch5-utilities-cli)
-   [Crestron CH5 Helper](https://www.npmjs.com/package/@norgate-av/crestron-ch5-helper)
-   [Typescript](https://www.typescriptlang.org/)
-   [React Router](https://reactrouterdotcom.fly.dev/)
-   [Redux](https://redux.js.org/)
-   [React Redux](https://react-redux.js.org/)
-   [Redux Toolkit](https://redux-toolkit.js.org/)
-   [Styled Components](https://styled-components.com/)
-   [React Icons](https://react-icons.github.io/react-icons/)
-   [React Crestron CH5 Hooks](https://www.npmjs.com/package/@norgate-av/react-crestron-ch5-hooks)
-   [Rooks](https://react-hooks.org/)
-   [Eruda](https://eruda.liriliri.io/)
-   [Axios](https://axios-http.com/)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [Husky](https://typicode.github.io/husky/#/)
-   [Lint-Staged](https://github.com/okonet/lint-staged)
-   [Commitizen](https://commitizen-tools.github.io/commitizen/)
-   [commitlint](https://commitlint.js.org/#/)
-   [GitHub Actions CI](https://github.com/features/actions)
-   [VSCode Workspace Config](https://code.visualstudio.com/docs/getstarted/settings#_workspace-settings)
-   [EditorConfig](https://editorconfig.org/)
-   [Docker Support](https://www.docker.com/)
    -   **Requires** [Docker](https://docs.docker.com/get-docker/) and [Docker-Compose](https://docs.docker.com/compose/install/) to be installed on your local machine. [Portainer](https://www.portainer.io/) is also recommended as a front end for managing Docker containers. It is free and open-source.

## Project Setup

To upload to a Crestron touchscreen or control system, you must add the IP address or hostname to the project properties in `package.json`.

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

For more information, please refer to:

-   [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
-   [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.
-   [Crestron CH5 Documentation](https://sdkcon78221.crestron.com/sdk/Crestron_HTML5UI/Content/Topics/Home.htm)
