import React from "react";
// import React, { Component } from "react";
import logo from "./logo.svg";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div class name="container">
          <NavbarBrand href="/">I changed the text now</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

// class App extends Component {
//   render() {
//     return <div className="App"></div>;
//   }
// }

export default App;
