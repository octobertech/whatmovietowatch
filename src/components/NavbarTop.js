import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
//import { logoutFromFirebase } from '../actions/userActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-regular-svg-icons'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

class NavbarTop extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
     // this.renderLogIn = this.renderLogIn.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    // renderLogIn = () => (
        
    //     <NavItem>
    //         <NavLink><Link to="/login">Log In</Link></NavLink>
    //         <NavLink><Link to="/signup">Sign Up</Link></NavLink>
    //     </NavItem>
        
    // )
     

    renderUserMenu = () => (
    <div>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
            {this.props.user.username}
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            <NavLink><Link to="/favorites">Favorites</Link></NavLink>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <NavLink><Link to="/" onClick={this.logOut}>Log Out</Link></NavLink>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
    )

    logOut = () => this.props.logoutFromFirebase();

    render() {
      return (
        <div>
          <Navbar color="light" light expand="md" fixed="top">
            <NavbarBrand tag={Link} to="/">WhatMovieToWatch</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto mr-auto" navbar>
               
                <NavItem>
                  <NavLink tag={Link} to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/favorites">Favorites</NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Link to="/login">Log In</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/signup">Sign Up</Link></NavLink>
              </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }


//const mapStateToProps = state => ({ user: state.user })
        
//const mapDispatchToProps = dispatch => ({ logoutFromFirebase: () => dispatch(logoutFromFirebase()) });

export default NavbarTop