import React from 'react';
import { FaBars } from 'react-icons/fa'; 
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLinks} from './NavbarElements';

const index = () => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>dolla</NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='discover'>Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='services'>Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='signup'>Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLinks to='/signin'>Sign In</NavBtnLinks>
                </NavBtn>
            </NavbarContainer>
        </Nav> 
    </>
  )
}

export default index