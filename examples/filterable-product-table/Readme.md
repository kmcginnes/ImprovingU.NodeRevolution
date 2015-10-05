# Filterable Product Table

This is my first React tutorial to act out. Here are my notes as I follow along to [this article](https://blog.risingstack.com/the-react-way-getting-started-tutorial/).

## Initial setup

I first created my root directory and setup some basic structure.

```
mkdir filterable-product-table && cd filterable-product-table
mkdir src && mkdir src/app && mkdir src/client && mkdir server
```

Then I run through the `npm init` setup. You can either answer the questions or hit `[enter]` through them all and then manually update the resulting `package.json` like I do.

```
npm init
```

## Bundling and ES6 support

In order to install babel on my El Capitan beta build of OS X I had to download the older [Command Line Tools for XCode v6.3.2](https://developer.apple.com/downloads/).

```
brew install apple-gcc42
```

```
npm install --save-dev webpack
npm install --save-dev babel
npm install --save-dev babel-loader
```
