# Vite Components

Components created with React + TypeScript + Vite

## Understanding the Codebase

This repository is a simple React + TypeScript project that uses Vite as the build tool.  The project is setup to allow you to create new React components and test them out in a local development environment.

The project is setup with the following structure:

- `src/*` - This directory contains a test web application that uses the components in the `lib/*` directory
- `lib/*` - This directory contains our React components; test them out using code in the `src/*` directory

Think of all code inside the `src` folder as a demo page.  The actual library code resides in another folder named `lib`. This is where you create your components.

The main entry point of your library will be a file named `main.ts` inside of `lib`. When installing the library you can import everything that is exported from this file.

## Getting Started

In order to get started with this repository, you will need to ensure you have all the required dependencies / software installed and need to run an initial setup.

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

1. Create a new component in the `lib/` directory following similar conventions to existing components
1. Import the component in the `src/main.tsx` file to test it out
1. Run the local dev environment to see your component in action - `npm run dev`

## References

- [Creating a library - dev.to](https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma)
