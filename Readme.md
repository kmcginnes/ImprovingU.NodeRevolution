# Node Revolution

This class will **not** be about the language or handling web requests or making database calls. This class will be about what makes Node special. We'll discover how a single product is revolutionizing the software world and permeating every facet of our development experience.

Most popular languages can be used in many ways: server app, desktop app, console app, build script, REPL, etc. What makes Node different is that it can do one thing the others can't: run in the browser. This is not one more bullet on the feature list, this is a revolution. Let's discover why, together.

### What to expect

- History of Node
- How it works
  - Node Package Manager vs NuGet
  - Dependency management
  - Package.json
  - Callbacks vs Promises
- Build a complete app

### Buzzwords

- Gulp, Grunt
- Express, React, Isomorphic
- Realtime, WebSockets
- MongoDb, OAuth
- Elektron
- Github, TravisCI

### What it's not

- Intro to coding
- Intro to JavaScript
- Opinion free
- Slow paced
- Lecture

## Environment setup

We will be using NodeJS v4, which was release very recently. It's the merging of Node and Io.js. This means Node now has official support for ES6, which we will use exclusively.

### Mac OS X

On OS X things are pretty simple. We'll use [Homebrew](http://brew.sh) and [Node Version Manager]() (or nvm) to do the heavy lifting.

I lifted many of these instructions from this [great article](http://michael-kuehnel.de/node.js/2015/09/08/using-vm-to-switch-node-versions.html).

First, let's install Homebrew if you don't have it already.

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Then let's get nvm.

```
brew install nvm
```

We'll need to make a few small edits to our `~/.bash_profile`, `~/.zshrc`, or `~/.profile`.

```
export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh
```

Now we can get the latest version of Node.

```
nvm install 4.0
```

### Windows

TODO - I'll need to figure out the best way to install the latest in Windows. I'm guessing Chocolatey will be my best bet.

* Visual Studio extension

### Essential tools

* npm - Node Package Manager
* nvm - Node Version Manager
* webpack - bundling, transpiling, minifying, linting, etc

## Day One

I'll go over the history of Node and how it came to be. Then describe where it is now and where it's going next. I'll talk about the split into Io.js and their recombination.

I'll talk about what Node is capable of and why it matters.

At the end of the lesson we'll build a simple app.

Check out [the slides](slides-day-one.md).

## Day two

Talk about isomorphic web development and why it's the future.

### Progression of web development styles

* Server rendered pages
* Server rendered partials
* Client rendered pages (SPAs)
* Isomorphic 

#### Server rendered pages

* Easy to reason about
* Access to server side data and behavior
* Every action is a full page refresh
* Poor user experience for dynamic apps

#### Server rendered partials

* Uses AJAX strategically
* Better than a full page refresh
* Code is more complex
* Coupling client side and server side

#### Client rendered pages (SPAs)

* JavaScript manages rendering HTML
* Server only sends data (JSON)
* No full page refresh
* No content before the JS loads
* SEO is a PITA
* Don't press the back button!!
* Infamous spinner

#### Isomorphic 

No more conceptual divide between the server and the client.

Flow:
1. Request from user (HTTP)
2. Render on server with JavaScript
3. Respond with HTML
4. Load the same JavaScript on client
5. //Hook// into the rendered app

### Mapping the nomenclature

I stole this slide from Shawn Wildermouth's great Node.js course on PluralSight. I highly recomend checking it out. It influenced a lot of what you are learning here.

IIS => Node.exe
C#/VB => JavaScript
EF/SQL Server => MongoDB or other database
ASP.Net Web Forms => Express + EJS
ASP.Net MVC/Razor => Express + Jade/Razor
ASP.Net Web API => Express
Angular/Ember/KnockoutJS => Angular/Ember/KnockoutJS
SignalR => WebSockets/Socket.io

### Dependency managment

* Like RequireJS but different
* The `require` keyword takes a path to a file
* Uses `exports` as the returned object
* Executes module code once and caches
* When assigning a function to `exports` you must use `module.exports`


## Domain

We need something to strive for in our application. A driving vision of functionality. Something where using Node, React, MongoDb, etc makes sense.

We can go with something fictional and just make everything up. But I would rather build something that would be useful to everyone taking the class. Maybe we can use [Intuit's API](https://developer.intuit.com/docs/api/accounting/timeactivity) to build a better time tracker for Improver's to use.

## Sources of information

__Node.js and V8 History__

[Ryan Dahl gives his account of how Node got started.](http://nodegeek.net/2013/12/18/nodejs-v8-history/)

__NDC 2015 - Building Isomorphic Applications in JavaScript - Eirik Langholm Vullum__

[Great video on the why and how of isomorphic JavaScript apps.](https://vimeo.com/131640205)
[The simple code from his video](https://github.com/eiriklv/ndc-isomorphic)
[The complex code from his video](https://github.com/eiriklv/ndc-isomorphic-flux)
