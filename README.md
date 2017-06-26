[![Build Status](https://travis-ci.org/framky007/Headlines.svg?branch=master)](https://travis-ci.org/framky007/Headlines) 
[![Coverage Status](https://coveralls.io/repos/github/framky007/Headlines/badge.svg?branch=master)](https://coveralls.io/github/framky007/Headlines?branch=master)
[![Code Climate](https://codeclimate.com/github/framky007/Headlines/badges/gpa.svg)](https://codeclimate.com/github/framky007/Headlines) 

----
## Description

This is a news feed application that enables you view news headlines from over 70 news sources.
The news sources and articles are gotten from [here](https://newsapi.org)


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