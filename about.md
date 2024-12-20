# 1. Setup using React 18
- `npx create-react-app react-tutorial --use-npm`
- `cd react-tutorial`
- `npm install react@18 react-dom@18 web-vitals`
- `npm start`

# 2. Understanding the files and folders
1. React injects your app into **index.html** at this line:

- `<div id="root"></div>`

2. src folder
- index.js: The entry point of your app. React renders the root component (usually App).
- App.js: The main component of your React app. You’ll build your UI here.
- App.css: Basic styles for your app.
- reportWebVitals.js: For measuring performance (you can ignore it for now).

## First task: Clean up the boilerplate code

Delete unnecessary files: In the src/ folder, delete:

    App.test.js
    logo.svg
    reportWebVitals.js
    setupTests.js

- Update index.js: Remove references to reportWebVitals
- Update App.js: Replace the existing code with a simple Hello World:
- Remove unused styles in index.css and App.css if you like.


## create components
in app.js

## props
used to transfer data between parent and child components in React.

## state
What is State?

State allows components to manage their own data.

State is used for data that can change over time (like a button toggle, user input, etc.). When the state changes, React re-renders the component, updating the UI accordingly.

- State allows a component to track data that can change over time.
- The useState hook returns an array: the first element is the state value, and the second is the function to update it.
- When state changes, React re-renders the component to reflect the new state.

## TAILWIND SETUP
- `npm install -D tailwindcss postcss autoprefixer`
- `npx tailwindcss init`
- Update tailwind.css for:
- - `content: ['./src/**/*.{js,jsx,ts,tsx}'],`
- Add Tailwinds directives to src/index.css

@tailwind base;

@tailwind components;

@tailwind utilities;
