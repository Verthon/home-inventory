# Home inventory

Goal: application that allow users to manage the home storage in one application, that runs on any mobile device.

![Build status](https://github.com/verthon/home-inventory/actions/workflows/nodejs.yml/badge.svg)
![Vercel](https://home-inventory-alpha.vercel.app/?app=therealsujitk-vercel-badge)

## Tech stack
The application is [PWA](https://web.dev/progressive-web-apps/) and is developed with [TDD](https://martinfowler.com/bliki/TestDrivenDevelopment.html).
It comes with automated process for deployment and checks the code quality via Github pipelines (lint, test, build).

* [React with RSBuild](https://rsbuild.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Mantine](https://mantine.dev/getting-started/)
* [Supabase](https://supabase.com/)

## Setup

Set correct node version using nvm, navigate 

`nvm use`

Install deps

`npm install`

Next set the environment variables:

```
cp .env.example .env.local
cp .env.local .env.test
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

If you wish to run this app on mocked API set .env.local `PUBLIC_API_MOCK` to true

### `npm test:unit`

Launches the test runner\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Learn More

You can learn more in the [RSBuild documentation](https://rsbuild.dev/guide/start/index).

To learn React, check out the [React documentation](https://reactjs.org/).

