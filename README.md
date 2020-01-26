# Design system exploration

Exploring the use of a monorepo to contain a design system _and_ a collection
of projects that depend on it.

The primary motivation for this structure is to allow us to build our design
system in tandem with other projects, while still allowing the design system
to be published independently if required.

***

## Getting started

This project uses [Yarn 1](https://legacy.yarnpkg.com/en/), primarily for its
[workspaces](https://legacy.yarnpkg.com/lang/en/docs/workspaces/) feature.

Before you get started, make sure you have Yarn installed:

```
npm i -g yarn
```

To install all dependencies required:

```
yarn
```

Run this command from the project root to install dependencies in all workspaces.

## Project structure
