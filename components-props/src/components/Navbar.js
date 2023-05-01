import React from "react";
import Button from './Button';

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <p>React - Components & props</p>
        <Button url="https://react.dev" content="React" />
        <Button url="https://www.ironhack.com" content="Ironhack"/>        
      </nav>
    );
  }
}

export default Navbar;