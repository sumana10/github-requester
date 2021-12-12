import React,  {useState, useContext} from 'react'

import{
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav, NavItem, NavLink, NavbarText
} from 'reactstrap'

import {Link} from 'react-router-dom'
import { UserContext } from '../context/UserContext'


export default function Header() {
  //context contains whatever whatever in UserContext.Provider in app.js
  const context = useContext(UserContext)

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen)

//style={{backgroundColor:"#FF6666"}}
  return (
    <Navbar  light expand="md" style={{backgroundColor:"#1a73e8"}}>
      <NavbarBrand>
      <Link to="/" className="text-white"> Git Fire App</Link>
      
     </NavbarBrand>
     <NavbarText className="text-white">
     {/* user itself an object for further drilling down and get the info ? use here*/}
     {context.user?.email ? context.user.email : ""}
     </NavbarText>
     <NavbarToggler onClick = {toggle}/>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" style={{marginLeft:"auto"}}navbar>
        {
          context.user ? (<NavItem>
          <NavLink style={{cursor:"pointer"}} onClick={()=>context.setUser(null)} className="text-white">LogOut</NavLink>
          </NavItem>) : (
            <>
            <NavItem>
            <NavLink tag={Link} to="/signin" className="text-white" >SignIn</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/signup" className="text-white">SignUp</NavLink>
          </NavItem>
          </>
          )
          
        }
        </Nav>
      </Collapse>

    </Navbar>
  )
}
