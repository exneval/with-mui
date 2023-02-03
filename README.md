# Turborepo starter

This is a pnpm turborepo Next.js with Material UI.

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `web`: another [Next.js](https://nextjs.org/) app with [Material UI](https://mui.com/core/)
- `eslint-config-custom`: `eslint` configurations
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Build

To build all apps and packages, run the following command:

```
cd my-app
pnpm run web:build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-app
pnpm run web:dev
```
