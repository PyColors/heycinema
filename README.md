# heycinema [![Build Status](https://travis-ci.org/PyColors/heycinema.svg?branch=master)](https://travis-ci.org/PyColors/heycinema)

![N|Solid](http://www.pycolors.com/v2/git/heycinema/heycinema-pycolors-screenshot)

🎞️ heycinema isa search app from the OMDb API RESTful web service to obtain movie pieces of information, with All Best Practices.

### [Demo online](http://heycinema.surge.sh)

### Tech

heycinema uses a number of open source projects to work properly and has been deployed on [surge]:

* [React] - A JavaScript library for building user interfaces
* [React Loadable] - A higher order component for loading components with promises
* [Redux] - Predictable state container for JavaScript apps
* [redux-saga] - An alternative side effect model for Redux apps
* [Jest] - Delightful JavaScript Testing
* [Enzyme] - JavaScript Testing utilities for React
* [prop-types] - Runtime type checking for React props and similar objects
* [history] - Manage session history with JavaScript
* [lodash] - A modern JavaScript utility library delivering modularity, performance, & extras
* [express] - Fast, unopinionated, minimalist web framework for node
* [IP] - IP address tools for node.js
* [cross-env] - Cross platform setting of environment scripts
* [MUI] - A lightweight CSS framework 
* [Webpack] - Bundle assets scripts
* [Eslint] - Pluggable JavaScript linter
* [Babel] - The compiler for writing next generation JavaScript

And of course heycinema itself is open source with a [public repository][dill]
 on GitHub.

### Installation

heycinema requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies.

```sh
$ cd to heycinema
$ yarn
```

### Start the node server

```sh
yarn start
```
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### Test

```sh
yarn test
```

### Launches the test runner

```sh
yarn jest --watch
```

Launches the test runner in the interactive watch mode.

### For production

```sh
$ yarn build
```

Builds the app for production to the `build`.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Ready to be deployed!


[//]: # 
   [dill]: <https://github.com/PyColors/heycinema>
   [git-repo-url]: <https://github.com/PyColors/heycinema>
   [React]: <https://github.com/facebook/react>
   [surge]: <https://github.com/sintaxi/surge>
   [React Loadable]: <https://github.com/jamiebuilds/react-loadable>
   [Redux]: <https://github.com/reduxjs/redux>
   [redux-saga]: <https://github.com/redux-saga/redux-saga>
   [Jest]: <https://github.com/facebook/jest>
   [Enzyme]: <https://github.com/airbnb/enzyme>
   [prop-types]: <https://github.com/facebook/prop-types>
   [history]: <https://github.com/ReactTraining/history>
   [lodash]: <https://github.com/lodash/lodash>
   [express]: <https://github.com/expressjs/express>
   [IP]: <https://github.com/indutny/node-ip>
   [cross-env]: <https://github.com/kentcdodds/cross-env>
   [MUI]: <https://github.com/muicss/mui>
   [Webpack]: <https://github.com/webpack/webpack>
   [Eslint]: <https://eslint.org/>
   [Babel]: <https://babeljs.io/>
