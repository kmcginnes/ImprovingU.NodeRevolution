# Node Revolution

This class will not be about the language or handling web requests or making database calls. This class will be about what makes Node special. We'll discover how a single product is revolutionizing the software world and permeating every facet of our development experience.

Most popular languages can be used in many ways: server app, desktop app, console app, build script, REPL, etc. What makes Node different is that it can do one thing the others can't: run in the browser. This is not one more bullet on the feature list, this is a revolution. Let's discover why, together.

## What to expect

- History of Node
- How it works
- Build a complete app

## Buzzwords

- Gulp, Grunt
- Express, React, Isomorphic
- Realtime, WebSockets
- MongoDb, OAuth
- Elektron
- Github, TravisCI

## What it's not

- Intro to coding
- Intro to JavaScript
- Opinion free
- Slow paced
- Lecture

## Environment setup

On OS X things are pretty simple. We'll use [Homebrew](http://brew.sh) and [Node Version Manager]() (or nvm) to do the heavy lifting.

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
