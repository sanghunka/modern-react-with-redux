# Section 1:Let's Dive In!

## 5. Critical Questions

### 1. So what's React all about?

    React (1) displays HTML and (2) changes that HTML when the user does something.

- How do we tell React to show HTML? `JSX`
- React Components
    - Functions that return JSX (stuff that looks like HTML)
    - Tells React what to show on the screen
    - A project can have many components that work together

JSX(The stuff that looks like HTML) tells React to...
- Tell React to create a normal HTML element
    - `<div></div>`
    - `<button>Click</button>`
    - `<input type="text" />`
- Tell React to show another componet
    - `<Field />`
    - `<Languages />`
    - `<Translate />`

## 6. A Few More Critical Questions

### 2. How does a React app start up?

1. All of your project's JS files are 'bundled' together into a single file, then placed onto a server
2. User makes a request to the server and gets an HTML file + the bundle
3. User's browser executes your code

- React Startup Process
    1. Find the div with id of 'root' in the DOM
    2. Tell React to take control of that element
    3. Tell React to get JSX from the App component, turn it into HTML, and show it in the root

### 3. What were the 'useState' functions?

- `useState` is a function that works with React's "state" system
- State is like a variable in React
- State is used to store data that changes over time
- Whenever state changes, React automatically updates content on the screen

### 4. How did the text get translated to another language?

- Google Translate API

## 8. Creating a React Project

`npx create-react-app <project name>`

- To start your project up
    - Change into your project folder
    - Run `npm start`
- To view your project
    - Open your browser and navigate to `localhost:3000`
- To stop your project
    - Press `Control + C`

```
  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!
```

## 9. What is Create React App?

```
Why are we running something at our terminal?
What are all these files and folders?
```

- Files(index.js, App.js, reportWebVitals.js) that contain code that a browser doesn't know how to execute.
- JSX is not valid javascript code. In other words, your browser does not know how to execute JSX.
- We only make use of JSX in react projects because it is convenient and it makes it really easy for us to make components.
- Because your browser does not know how to execute JSX, we have to trans file before we try to run our components.
- The term transfile means we are taking one form of code and kind of changing it automatically into another form of code.

`index.js, App.js, reportWebVitals.js` --`Babel`--> --`Webpack`--> `bundle.js`

- Babel: Tool to turn JSX into normal JS code
- Webpack: Tool to merge all project files into a single file

**Only about five are actually required to run**

- index.js: First file that gets executed when our app runs
- index.html: Skeleton for the React app
- package.json: Lists dependencies our app needs
- package-lock.json: Lists dependencies our app needs
- node-modules: Contains dependencies our app needs
