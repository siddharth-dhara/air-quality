This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Below you will find some information on how to perform common tasks.<br>

## Table of Contents

- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
- [Formatting Code Automatically](#formatting-code-automatically)
- [Changing the Page `<title>`](#changing-the-page-title)
- [Installing a Dependency](#installing-a-dependency)
- [Importing a Component](#importing-a-component)
- [About project](#about-project)
- [Time taken vs Features](#time-taken-vs-features)
  - [Features Included](#features-included)
- [TODO](#todo)

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

## Supported Browsers

By default, the generated project supports all modern browsers.<br>
Support for Internet Explorer 9, 10, and 11 requires [polyfills](https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md).

### Supported Language Features

This project supports a superset of the latest JavaScript standard.<br>
In addition to [ES6](https://github.com/lukehoban/es6features) syntax features, it also supports:

- [Exponentiation Operator](https://github.com/rwaldron/exponentiation-operator) (ES2016).
- [Async/await](https://github.com/tc39/ecmascript-asyncawait) (ES2017).
- [Object Rest/Spread Properties](https://github.com/tc39/proposal-object-rest-spread) (ES2018).
- [Dynamic import()](https://github.com/tc39/proposal-dynamic-import) (stage 3 proposal)
- [Class Fields and Static Properties](https://github.com/tc39/proposal-class-public-fields) (part of stage 3 proposal).
- [JSX](https://facebook.github.io/react/docs/introducing-jsx.html) and [Flow](https://flow.org/) syntax.

Learn more about [different proposal stages](https://babeljs.io/docs/plugins/#presets-stage-x-experimental-presets-).

While we recommend using experimental proposals with some caution, Facebook heavily uses these features in the product code, so we intend to provide [codemods](https://medium.com/@cpojer/effective-javascript-codemods-5a6686bb46fb) if any of these proposals change in the future.

Note that **this project includes no [polyfills](https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md)** by default.

If you use any other ES6+ features that need **runtime support** (such as `Array.from()` or `Symbol`), make sure you are [including the appropriate polyfills manually](https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md), or that the browsers you are targeting already support them.

### Visual Studio Code

You would need to have the latest version of [VS Code](https://code.visualstudio.com) and VS Code [Chrome Debugger Extension](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) installed.

Then add the block below to your `launch.json` file and put it inside the `.vscode` folder in your app’s root directory.

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Chrome",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceRoot}/src",
      "sourceMapPathOverrides": {
        "webpack:///src/*": "${webRoot}/*"
      }
    }
  ]
}
```

> Note: the URL may be different if you've made adjustments via the [HOST or PORT environment variables](#advanced-configuration).

Start your app by running `npm start`, and start debugging in VS Code by pressing `F5` or by clicking the green debug icon. You can now write code, set breakpoints, make changes to the code, and debug your newly modified code—all from your editor.

Having problems with VS Code Debugging? Please see their [troubleshooting guide](https://github.com/Microsoft/vscode-chrome-debug/blob/master/README.md#troubleshooting).


## Formatting Code Automatically

Prettier is an opinionated code formatter with support for JavaScript, CSS and JSON. With Prettier you can format the code you write automatically to ensure a code style within your project. See the [Prettier's GitHub page](https://github.com/prettier/prettier) for more information, and look at this [page to see it in action](https://prettier.github.io/prettier/).

To format our code whenever we make a commit in git, we need to install the following dependencies:

```sh
npm install --save husky lint-staged prettier
```

Alternatively you may use `yarn`:

```sh
yarn add husky lint-staged prettier
```

## Changing the Page `<title>`

You can find the source HTML file in the `public` folder of the generated project. You may edit the `<title>` tag in it to change the title from “React App” to anything else.

Note that normally you wouldn’t edit files in the `public` folder very often. For example, [adding a stylesheet](#adding-a-stylesheet) is done without touching the HTML.

If you need to dynamically update the page title based on the content, you can use the browser [`document.title`](https://developer.mozilla.org/en-US/docs/Web/API/Document/title) API. For more complex scenarios when you want to change the title from React components, you can use [React Helmet](https://github.com/nfl/react-helmet), a third party library.

If you use a custom server for your app in production and want to modify the title before it gets sent to the browser, you can follow advice in [this section](#generating-dynamic-meta-tags-on-the-server). Alternatively, you can pre-build each page as a static HTML file which then loads the JavaScript bundle, which is covered [here](#pre-rendering-into-static-html-files).

## Installing a Dependency

The generated project includes React and ReactDOM as dependencies. It also includes a set of scripts used by Create React App as a development dependency. You may install other dependencies (for example, React Router) with `npm`:

```sh
npm install --save react-router-dom
```

Alternatively you may use `yarn`:

```sh
yarn add react-router-dom
```

This works for any library, not just `react-router-dom`.

## Code Splitting

Instead of downloading the entire app before users can use it, code splitting allows you to split your code into small chunks which you can then load on demand.

This project setup supports code splitting via [dynamic `import()`](http://2ality.com/2017/01/import-operator.html#loading-code-on-demand). Its [proposal](https://github.com/tc39/proposal-dynamic-import) is in stage 3. The `import()` function-like form takes the module name as an argument and returns a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) which always resolves to the namespace object of the module.

Here is an example:

### `moduleA.js`

```js
const moduleA = 'Hello';

export { moduleA };
```

### `App.js`

```js
import React, { Component } from 'react';

class App extends Component {
  handleClick = () => {
    import('./moduleA')
      .then(({ moduleA }) => {
        // Use moduleA
      })
      .catch(err => {
        // Handle failure
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Load</button>
      </div>
    );
  }
}

export default App;
```

This will make `moduleA.js` and all its unique dependencies as a separate chunk that only loads after the user clicks the 'Load' button.

You can also use it with `async` / `await` syntax if you prefer it.

**This is not required for React** but many people find this feature convenient. You can read about the benefits of this approach [here](https://medium.com/seek-blog/block-element-modifying-your-javascript-components-d7f99fcab52b). However you should be aware that this makes your code less portable to other build tools and environments than Webpack.

In development, expressing dependencies this way allows your styles to be reloaded on the fly as you edit them. In production, all CSS files will be concatenated into a single minified `.css` file in the build output.

If you are concerned about using Webpack-specific semantics, you can put all your CSS right into `src/index.css`. It would still be imported from `src/index.js`, but you could always remove that import if you later migrate to a different build tool.


### Changing the HTML

The `public` folder contains the HTML file so you can tweak it, for example, to [set the page title](#changing-the-page-title).
The `<script>` tag with the compiled code will be added to it automatically during the build process.


## Time taken vs Features

It took me around 5-6 hours to finish whatever I have committed here in the repo.


### Features included

- Fetch response using web-socket from the API given
  `wss://demos.kaazing.com/echo`
- Display websocket connection status  
- Rendered the data as per wesocket updates
- Use color coding to differentiate the air quality index
- Used `material-ui` for some rich look and feel
- Used `advanced JSX styling` concepts instead of less/SAAS
- Provision to start and stop websocket connection (WIP)


## TODO

There are still following features pending from my side as per what I had in my mind. These features I was not able to complete due to time contraints.

- Work is in progress for websocket close/start feature
- Usage of chart to display live and past data for any city 
