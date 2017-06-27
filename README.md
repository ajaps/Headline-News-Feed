### Headline News - A user friendly news app!

[![Build Status](https://travis-ci.org/framky007/Headline-News-Feed.svg?branch=master)](https://travis-ci.org/framky007/Headline-News-Feed) 
[![Coverage Status](https://coveralls.io/repos/github/framky007/Headline-News-Feed/badge.svg?branch=master)](https://coveralls.io/github/framky007/Headline-News-Feed?branch=master)
[![Code Climate](https://codeclimate.com/github/framky007/Headline-News-Feed/badges/gpa.svg)](https://codeclimate.com/github/framky007/Headline-News-Feed) 

----
## Description

This is a news feed application that enables you view news headlines from over 70 news sources.
The news sources and articles are gotten from [here](https://newsapi.org)

## Features 
  *  Login via Google
  *  Allows users to select news sources
  *  Allows users to select view news sources based on a category e.g.Sport
  *  Allows users to sort news article based on the sorting parameter available
  *  Sorting can either be by -
    *  Top
    *  Latest
    *  Popular


## Dependencies

### Development Dependencies
*  The following depencies are required by the app during developmment
  *  **[Babel-register](https://www.npmjs.com/package/babel-register)** - This framework helps to compile from es6 to es5
  *  **[css-loader](https://www.npmjs.com/package/css-loader)** - The  css-loader is used with webpack and it interprets @import and url() like import/require()
  *  **[enzyme](https://www.npmjs.com/package/enzyme)** - Enzyme is used together with mocha, chai and expect.js to test this application
  *  **[eslint](https://www.npmjs.com/package/eslint)** - This is a javascript syntax highlighter used to highligh syntax error during the development of this app
  *  **[eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)**, **[eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)**, **[eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)**, **[eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)**  - These are ESlint packages containing all of eslint rules and they are used in this application to define rules and highligh errors
  *  **[extract-text-webpack-plugin](https://www.npmjs.com/package/extract-text-webpack-plugin)** - It's used to move all the css imported into the application into a separate file.
  *  **[file-loader](https://www.npmjs.com/package/file-loader)** - It enables the app to load files directly into scripts
  *  **[sinon](https://www.npmjs.com/package/sinon)** - Used with mocha and enzyme for mocking React components during test
  *  **[url-loader](https://www.npmjs.com/package/url-loader)** - It enables the app to use background images in the scss files

### Dependencies
*  **[babel-core](https://www.npmjs.com/package/babel-core)** - It compiles es6 used in the app to es5
*  **[babel-eslint](https://www.npmjs.com/package/babel-eslint)** - Used with ESlint to lint syntax errors
*  **[babel-loader](https://www.npmjs.com/package/babel-loader)** - Used with Webpack to transpile javascript codes
*  **[babel-plugin-react-html-attrs](https://www.npmjs.com/package/babel-plugin-react-html-attrs)** - It help convert JSX `class` attribute into `className` 
*  **[coveralls](https://www.npmjs.com/package/coveralls)** - Display test coverage
*  **[express](https://www.npmjs.com/package/express)** - Used as the web server for this application
*  **[extract-text-webpack-plugin](https://www.npmjs.com/package/extract-text-webpack-plugin)** - Moves the app's css into a separate file
*  **[flux](https://www.npmjs.com/package/flux)** - It enables the app to implement the flux architecture
*  **[history](https://www.npmjs.com/package/history)** - Allows the app to implement history in routes.
*  **[react](https://www.npmjs.com/package/react)** - It enables the app to use the React architecture
*  **[react](https://www.npmjs.com/package/react)** - Used with **[react-dom](https://www.npmjs.com/package/react-dom)** enables the app to use the React architecture
*  **[react-router-dom](https://www.npmjs.com/package/react-router-dom)** - Used to perform app routing
*  **[webpack](https://www.npmjs.com/package/react-router-dom)** - Used to bundle the app's js and scss files for usage in the browser


## Technology

This project uses a host of modern technologies. The core ones are:

- ECMAScript 6: Also known as ES2015, this is the newest version of Javascript with next-generation features like arrow functions, generators, enhanced object literals, 
spread operators and more. See [this link](https://en.wikipedia.org/wiki/ECMAScript) for details.

- [NodeJS](https://nodejs.org): NodeJS is a server-side JavaScript runtime engine built 
on Chrome's V8 JavaScript engine. It is lightweight, efficient and greatly used in building web apps. Please visit [this link](https://nodejs.org) for more details.

- [React](https://facebook.github.io/react/) and [ReactDOM](https://facebook.github.io/react/docs/react-dom.html): 
These were developed by Facebook and are used for building web pages that are structured as a collection of components. These components are kept as independent as possible. See [this link](https://facebook.github.io/react/).

- [The Flux architecture](https://facebook.github.io/flux/): This is a design architecture for building stable web apps with, among other things, a unidirectional flow of data. See [this link](https://facebook.github.io/flux/) 
for details.


## Installation and setup

Here are the steps you need to follow to run this project on your computer:
- **Install NodeJS**: You may visit [this link](https://nodejs.org/en/download/) for complete 
instructions on installing NodeJS on your computer.

- **In the terminal/command prompt** of your computer, navigate to your preferred location.

- **Clone this repo**: Enter this command in the terminal:

``` bash
git clone  https://github.com/framky007/Headlines
```

- **Install dependencies** : By running the command below into your terminal:

``` bash
npm install
```

- **create a firebase account for authenticating users** : Go to Google firebase console page, create a project and add the config variables into a .env file in the root of the page:
Use the variable names given by Google but convert it to caps - e.g AUTH_DOMAIN=headlines-rss-feed.firebaseapp.com


- **Run the project**: This command below will compile and load the application:

``` bash
npm start
```

- **Open a web browser of your choice and visit the link provided in the terminal e.g. `http://localhost:3002`.**


----
## Contribute

If you are interested in contributing to development of News-feed-app, follow the instructions below to contribute.

- Fork the repository

- Make your change

- Commit your change to your forked repository 

- Provide a detailed commit description 

- Create a pull request

## Limitations

- Users can only view news from 70 sources
- Users can only view news from only 2 languages
- Users can only view a finite amount of artiles per news source.
- There is no provision to view old articles.
- The Articles currently don't have their authors' displayed because the API is returning a URl instead of a string containg the author

## FAQ

- **What if I want to use another port?**

In the root of the project. create a file named `.env` and add the following line to it:

``` bash
PORT=<your_desired_port>
```

where <your\_desired\_port> is the port you want to use. So, if you want to use port `8080`, you will write:

``` bash 
PORT=8080
```

## License
This project is authored by [Ajaps Franklin]() and is licensed 
for your use, modification, and distribution under [the MIT license](https://en.wikipedia.org/wiki/MIT_License).