import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FaTimes, FaBars } from 'react-icons/fa'
import { AiFillCaretDown as Caret } from 'react-icons/ai'
import Dropdown from './dropdown'

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    height: 10vh;
    padding: 30px;

    @media(min-width: 768px){
        padding: 0 40px;        
    }
`;

const Logo = styled.div`
     letter-spacing: -1px;
     font-size: 36px;
`;

const LinksList = styled.ul`
    display: flex;
    position: absolute;
    top: 10vh;
    left: -100%;
    flex-direction: column;
    justify-content: start;
    width: 100%;
    height: 90vh;
    margin: 0;
    padding: 0;
    background: #fafafa;
    font-size: 16px;
    font-weight: lighter;
    color: #595959;
    opacity: 0;
    transition: all 600ms ease;
    
    @media(min-width: 768px){
        opacity: 1;
        height: 100%;
        justify-content: space-around;
        position: static;
        width: auto;
        flex-direction: row;
    }
    
    &.active {
        left: 0;
        opacity: 1;
        /* z-index: 1; */
    }
`;

const ListItem = styled.li`
    transition: 0.5s;
    padding: 4vh 20px;
    align-items: center;
    text-transform: uppercase;
    justify-content: center;
    background: #fafafa;
    height: 80px;
    display: flex;
    
    @media(min-width: 768px) {
        height: 100%;
    }
    &:hover {
        background-color: #E9E9E9;
    }
`;

const DropdownLinkContainer = styled.div``;

const DropdownListContainer = styled.div`
    position: relative;
    max-height: 0;
    transition: max-height 600ms ease-out;
    
    @media(min-width: 768px) {
        bottom: 10vh;
        right: 10px;
    }

    &.active {
        max-height: 1000px;
    }
`;

const HamburgerIcon = styled.div`
    cursor: pointer;
    color: #595959;
    transform: scale(1.2);

    // media query for desktop view
    @media(min-width: 768px){
        display: none;
    }
`;

const Nav = () => {
    const [ click, setClick ] = useState(false)
    const [ dropdown, setDropdown ] = useState(false)

    const handleClick = () => setClick(!click)  // toggle hamburger menu icon
    const closeMobileMenu = () => setClick(false)

    const onMouseEnter = () => {
        if (window.innerWidth < 768) {
            setDropdown(true) // mobile
        } else {
            setDropdown(true) // desktop
        }
    }

    const onMouseLeave = () => {
        if (window.innerWidth < 768) {
            setDropdown(false) // mobile
        } else {
            setDropdown(false) // desktop
        }
    }
    return (
        <NavBar>
            <Logo>
                <Link onClick={closeMobileMenu} to="/">M. Arthur</Link>
            </Logo>    
            <HamburgerIcon onClick={handleClick}> 
                {click ? <FaTimes/> : <FaBars/>}
            </HamburgerIcon>

            <LinksList className={click ? 'active' : ''}>

                <Link onClick={closeMobileMenu} to="/" activeStyle={{color: "#000", fontWeight: "bolder"}}>
                    <ListItem>Home</ListItem>
                </Link>

                <Link onClick={closeMobileMenu} to="/gallery" activeStyle={{color: "#000", fontWeight: "bolder"}}>
                    <ListItem>Gallery</ListItem>
                </Link>

                <DropdownLinkContainer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Link to="/gallery" activeStyle={{color: "#000", fontWeight: "bolder"}} onClick={closeMobileMenu}>
                        <ListItem>
                            Artists &nbsp;<Caret/>
                        </ListItem>
                    </Link>
                    <DropdownListContainer className={dropdown ? 'active' : ''}>
                        {dropdown && <Dropdown/>}
                    </DropdownListContainer>
                </DropdownLinkContainer>

                <Link onClick={closeMobileMenu} to="/contact" activeStyle={{color: "#000", fontWeight: "bolder"}}>
                    <ListItem>Contact</ListItem>
                </Link>

            </LinksList>

        </NavBar>
    )
}

export default Nav