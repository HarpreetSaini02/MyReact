CHAPTER 1
Q. What is CDN?

CDN is a network of servers all around the world. It gives speed, security and relaibility to the website.

Q. What is crossorigin attribiute?

CORS - Cross Origin Resource Sharing CORS enables us to share resources from different origins. The steps are:

Client sends Preflight request
Servers verifies Preflight Request
Client sends Main request
Server Provides the requested resources
crossorigin attribute has these values - anonymous(default), use-credentials.

Q. Difference between ASYNC and DIFFER?

Without async or differ: When browser encounters a script the HTML parsing stops and browser fetches the script then executes the script. After that HTML parsing continues.
ASYNC: When browser encounters a script the HTML parsing stops and browser fetches the script. After that HTML parsing continues and script executes simultaneously (asynchronuosly).
DIFFER: When browser encounters a script, it fetches the script along with HTML parsing. But the script starts executing only after HTML parsing has completed.

Q. Difference between LIBRARY and FRAMEWORK?

LIBRARY	FRAMEWORK
it provides ready made functions, methods, pre-written code, etc. We can call them to code faster	it provides a skeleton like structure where it call our code to fill the skeleton. Framework is a collection of many libraries
A library is like building your home from scratch, you have the choice to make your house as you wish, with any architecture you like, you can sort your rooms in the way you like	On the other hand, Framework is like buying a new house, you don't have to deal with building problems, but you can't choose how to sort your rooms because the house is already built

Q. Why react is called react?

React is made for front-end applications which reacts instantly upon user interaction.

Q. What is diference between React and ReactDOM?

In order to work with React in the browsers, we need to include 2 libraries: React and ReactDOM
React library is responsible for creating views
ReactDOM library is responsible to actually render UI in the browser.

Q. What is difference between react.development.js and react.production.js files via CDN?

Development files can be used during development process.
Production files are just minified and optimized version of development files.