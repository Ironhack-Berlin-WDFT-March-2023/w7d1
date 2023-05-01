import "./App.css";
import ironhackLogo from "./assets/ironhack-logo.png";

// JSX expressions like the one below are converted to JS by Babel:
// => var element = React.createElement('h1', null, 'Hello, world!');
const heading = <h1>React is cool! 🎉🎉🎉</h1>;

const student = {
  firstName: "ana",
  lastName: "martinez",
};

const { firstName, lastName } = student;

function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

const theId = "home";
const divElement = <div id={theId}></div>;

// Comments in JS part:
// This is a comment in JS

// Challenge:
const myName = "Marco"
function displayMessage(name) {
  return `My name is ${name} and I'm learning React!`
}

function App() {
  return (
    <div className="App">
      {/* Embed variables */}
      {heading}
      
      <h3>Hi, {firstName} {lastName}</h3>

      {/* Embed functions */}
      <h4>In uppercase: {firstName.toUpperCase()} {lastName.toUpperCase()}</h4>

      {/* Embed function execution */}
      <h4>Capitalized: {capitalizeFirstLetter(firstName)} {capitalizeFirstLetter(lastName)}</h4>

      {/* Embed attribute value */}
      {divElement}

      {/* Embed images */}
      <img src={ironhackLogo} alt="ironhack logo" />

      <hr />
      
      {/* Attribute names are camelCased */}
      <label htmlFor="username" className="control-label">Username</label>

      {/* Comments in HTML part: */}
      {/* This is a comment in HTML */}  

      {/* Challenge: */}
      {/* Create a variable "myName" with your name */}
      {/* Create a function "displayMessage" that receives this name and displays: "My name is <your name> and I'm learning React!" */}
      {/* Embed the function and render the sentence in the view */}
      <h4>{displayMessage(myName)}</h4>
    </div>
  );
}

export default App;
