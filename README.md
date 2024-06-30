# Vite Components

Components created with React + TypeScript + Vite

## Understanding the Codebase

This repository is a simple React + TypeScript project that uses Vite as the build tool.  The project is setup to allow you to create new React components and test them out in a local development environment.

The project is setup with the following structure:

- `playground/*` - This directory contains a test web application that uses the components in the `lib/*` directory
- `lib/*` - This directory contains our React components; test them out using code in the `playground/*` directory
- `vitest/*` - This directory contains unit tests for the project written using Vitest

Think of all code inside the `playground` folder as a demo page.  The actual library code resides in another folder named `lib`. This is where you create your components.

The main entry point of your library will be a file named `main.ts` inside of `lib`. When installing the library you can import everything that is exported from this file.

## Getting Started

In order to get started with this repository, you will need to ensure you have prerequisite software; once that is complete, an initial setup will need to be performed.

### Prerequisites

Working in this repository primarily requires Node to build the javascript and TypeScript code.  IDE of preference is VSCode.

- [Node.js](https://nodejs.org/en)
- [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)
- [VSCode](https://code.visualstudio.com/)

### Setup

1. Ensure the correct version of node is installed - `nvm use`
1. Install the required dependencies - `npm install`
1. Build the project - `npm run build`
1. Run the local dev environment to test out your components - `npm run dev`

## Implementing your own component

1. Create a new component in the [`lib/`](./lib/) directory following similar conventions to existing components
1. Export the component in the [`lib/index.ts`](./lib/index.ts) file
1. Import the component in the [`playground/App.tsx`](./playground/App.tsx) file to test it out
1. Run the local dev environment to test it for your own uses - `npm run dev`
1. Open your browser at [`http://localhost:3000`](http://localhost:3000) to see your component in action

## Using the components in your own project

Since this is a private repository, you will need to setup your personal `~/.npmrc` file (in your user directory) to include the following lines:

    @erjdev:registry=https://npm.pkg.github.com
    //npm.pkg.github.com/:_authToken=ghp_...

The auth token is a personal access token that you can generate from your github account.  This will give you personal access to any private repositories that you have access to.

1. Build the project - `npm run build`
1. Install the library in your own project - `npm install @erjdev/vite-react-components`
1. Import the components in your project and use them as needed

If you intend to use the library in a CI/CD pipeline, you will need to setup your CI/CD pipeline to have the credentials to download this library as a package.

1. Setup your github workflow to use the library as a package - see [WebFactory's SSH Agent](https://github.com/webfactory/ssh-agent)

## References

- <https://stackoverflow.com/a/73521732>
