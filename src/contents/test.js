import React, { Component } from 'react'
import Nav from "./nav";
import Contact from "../components/contact"


class Test extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (
      <>
        <Nav 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />

       

       
      </>
    )
  }
}

export default Test