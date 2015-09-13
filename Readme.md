# Node Revolution

This class will not be about the language or handling web requests or making database calls. This class will be about what makes Node special. We'll discover how a single product is revolutionizing the software world and permeating every facet of our development experience.

Most popular languages can be used in many ways: server app, desktop app, console app, build script, REPL, etc. What makes Node different is that it can do one thing the others can't: run in the browser. This is not one more bullet on the feature list, this is a revolution. Let's discover why, together.

### What to expect

- History of Node
- How it works
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


## Domain

We need something to strive for in our application. A driving vision of functionality. Something where using Node, React, MongoDb, etc makes sense.

We can go with something fictional and just make everything up. But I would rather build something that would be useful to everyone taking the class. Maybe we can use [Intuit's API](https://developer.intuit.com/docs/api/accounting/timeactivity) to build a better time tracker for Improver's to use.
