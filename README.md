# Template Express + TypeScript

## Introduction

Welcome to the **Template Express + Typescript** repository!

In here, you will find a **development** (not production, yet) ready template for you to use. This template also includes:

- **Nodemon:** watches for file changes to make development easier
- **Jest:** testing framework
- **EditorConfig:** configures your environment accordingly across devices
- **ESLint:** checks for linting errors
- **Prettier:** helps format the code automatically

Please, make sure to install the [recommended extensions](./.vscode/extensions.json) for this workspace.

## Known Issues

**nodemon won't restart the server on .js file changes**

The current [nodemon local configuration](./nodemon.json) only looks for `.ts` file changes since their default configuration uses your main file's extension (e.g. `index.ts` or `server.ts`) to determine what extensions to watch.

In addition, the `.json` extension files are also watched by default, but if you override the `ext` property on the configuration it will get overridden.

**Jest watches node_modules file changes**

We couldn't determine the cause of this issue neither how to solve it.