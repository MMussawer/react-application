import React from "react";
// import React, { Component } from "react";
import logo from "./logo.svg";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponent";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div class name="container">
          <NavbarBrand href="/">Restaurant</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

// class App extends Component {
//   render() {
//     return <div className="App"></div>;
//   }
// }

export default App;
