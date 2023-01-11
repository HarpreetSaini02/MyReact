# GENERAL

- Why react fast? React 
- Create-react-app uses webpack and babel 
- Parcel is a bundler. It is known as a package. Package is kind of like a module, some code of javascript.
- If we want to use a package, we have to use a package manager.
- We will use NPM as a package manager. NPM doesn't stand for node package manager
- Dependency is all the packages that our project uses.
- When we installed react using npm after that we need to add type="module" attr in <script type="model" src="App.js">. Because normal browser dont understant "import" keyword, we need to tell the browser that it is not normal js file, it is module

- TRANSITIVE DEPENDENCY - Inception of dependencies, one dependency is dependent on another is called transitive dependency.
- We have our package manager which handles and takes care of our transitive dependency of our code. 

- BABEL does polyfill. https://babeljs.io/
- POLYFILL - A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it. Simply, it took our modern code and convert it to older version code so that all old browser will support our code.

# PARCEL

- Parcel is also a dependency. 
- Parcel gives us local server
- Parcel creates dev build , dist, cache
- node_modules is like a database of our npm. there are so many helper functions. Always add it to .gitignore. 

# BROWSERLIST

- go to officla website of browserlist, copy given code and paste in package.json.
"browserlist": [
    ""
]
- go to browserlist.dev. This will show what to put in the above array

# NPM

- NPM is used to manage our packages
- Why use npm? Because we need so many packages in our app. package manager manages all these things.
- Our react app is powered by  a lot of things a lot of packages, suppose we have minify, bundle, optimize, etc. for that we need a lot of helper packages and those helper packages come inside npm
- -D/--save-dev = dev dependency, not add in production, only install in deployment
- npx = execute using npm

# NPM steps

- npm init (npm init -y = -y skips many things)
- npm install -D parcel (dev dependency)
- npm i react (global dependency)
- npm i react-dom (global dependency)
- npx parcel index.html (npm bundlerName entryPoint)