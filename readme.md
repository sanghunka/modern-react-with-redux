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
