import React from 'react';
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    shrooms
                </NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">O grzybach</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="why">Czemu grzyby</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="fav">Ulubieńcy</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="nuh">Brzydale</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/contact'>Kontakt</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </>
    );
};

export default Navbar
