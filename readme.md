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

# Section 2:Building Content with JSX

## 10. Showing Basic Content

- React: Library that defines what a component is and how multiple components work together
- ReactDOM: Library taht knows how to get a component to show up in the browser

## 11. So... Waht is JSX?

- `https://babeljs.io/repl`
    - Tool to show you what your JSX is turned into

```
<h1>Hi there</h1>
```
- Writing this doesn't make anything show up in the browser automatically
- This creates an instruction for React, telling it to make en element
- We have to return it from a component for React to use it

## 12. Printing JavaScript Variables in JSX

- We most often use curly braces to show strings or numbers
- Common Error: React cannot show an object as text content (e.g. Json, Boolean)

## Quiz 2:Showing Simple Content

- Question 1:
    - What is the difference between the `React` and `ReactDOM` libraries?
        - React defines what a component is and how it works
        - ReactDOM is used to show components specifically in a browser environment

## 17. Customizing Elements with Props

```ts
return <input type="{inputType}" min={minValue} max={maxValue}/>;
```

```ts
return (
    <input
        type="number"
        min={5}
        max={10}
        list={[1,2,3]}
        style={{ color: 'red' }} // ????
        alt={message}
    />
)
```

- Props: Customizes an element
- Props can refer to a variable using the same curly braces syntax
- Props don't have to be defined as variables

```ts
const config = { color: 'red' }
return (
    <div>
        <h1>{config}</h1>    // Trying to display an object. Doesn't work! 

        <input abc={config}> // Trying to provide an object as a prop. OK!
    </div>
)
```

## 18. Converting HTML to JSX
## 19. Applying Styling in JSX

- Names/Values of attributes that you provide to elements in HTML are slightly different when writing JSX
- Converting HTML to JSX
    1. All prop names follow camelCase
    2. Number attributes use curly braces
    3. Boolean 'true' can be written with just the property name. 'False should be written with curly braces
    4. The 'class' attribute is written as 'className'
    5. In-line styles are provided as object
            ```
            // HTML
            <a style="text-decoration: 'none'; padding: '5px'; />

            // Equivalent JSX
            <div style={{ textDecoration: 'none', padding: '5px' }}/>
            ```

# Section 3:Communicating with Props

## 21. Three Tenets of Components

- Component Nesting
    - A Component can be shown inside of another
- Component Reusability
    - We want to make components that can be easily reused through out application
- Component Configuration
    - We should be able to configure a component when it is created

## 29. Extracting JSX to New Components

Creating a Reusable, Configurable Component
- Identify the JSX that appears to be duplicated
- What is the purpose of that block of JSX? Think of a descriptive name for what it does
- Create a new file to house this new component - it should have the same name as the component
- Create a new component in the new file, paste the JSX into it
- Make the new component configurable by using React's 'props' system

## 30. Component Nesting

We just spoke about JSX and we had said that if we want to refer to javascript variables, we're going to use those curly braces like `{CommentDetail}`.
Components are the one exception to that rule. If we want to show one component inside of another, we're going to treat it as though it was just a JSX tag instead. `<CommentDetail />`

## 31. React's Props System

**Props** (properties)

- System for passing data from a parent component to a child component
- Goal is to customize or configure a child component

## 32. Passing and Receiving Props

`<CommentDetail author="Sam" />`

- `author=`: Name of the prop
- `"Sam"`: Value of the prop

# Section 4: Structuring Apps with Class-Based Components

## 44. Class-Based Components

A component is a [Function or Class]
that produces HTML to show the user (using JSX)
and handles feedback from the user (using event handlers)

### How React Used to Be
- Functional Components
    - Can produce JSX to show content to the user

- Class Components
    - Can produce JSX to show content to the user
    - Can use the Lifecycle Method system to run code at specific points in time
    - Can use the 'state' system to update content on the screen

- Hooks System, Function Components
    - Can produce JSX to show content to the user
    - Can use Hooks to run code at specific points in time
    - Can use Hooks to access state system and update content on screen

With hook system, the React team have given many more capabilities to function components and through the use of this hook system, function components can now execute code at specific points in time, which is roughly equivalent to the lifecycle method system tied to class components.
In addition, function components can make use of the state system.

So really today with react components are largely now much more similar to class components.

So which one should we use?
- Companies with established projects are using Class-based components
- Companies with newer projects may be using Class-based or Function-based components

## 45. Application Overview

### Benefits of Class Components
- Easier code organization
- Can use 'state'(another React system)
    - Easier to handle user input
- Understands lifecycle events
    - Easier to do things when the app first starts
