import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FaTimes, FaBars } from 'react-icons/fa'
import { AiFillCaretDown as Caret } from 'react-icons/ai'
import Dropdown from './dropdown'

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    align-items: center;
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
    flex-direction: column;
    justify-content: start;
    width: 100%;
    height: 90vh;
    font-size: 16px;
    font-weight: lighter;
    color: #595959;
    background: #fafafa;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 10vh;
    left: -100%;
    opacity: 0;
    transition: all 0.6s ease;
    
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
        z-index: 1;
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

const DropdownLinkContainer = styled.div`

`;

const DropdownListContainer = styled.div`
    position: relative;
    width: 100%;
    

    @media(min-width: 768px) {
        /* padding-top: 5px; */
        bottom: 10vh;
        right: 10px;
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
    // const [ dropdown, setDropdown ] = useState(false) /////// testing state
    const [ dropdown, setDropdown ] = useState(true)

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
                    <DropdownListContainer>
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


/*

.navbar {
    background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
  }
  
  .navbar-logo {
    color: #fff;
    justify-self: start;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
  }
  
  .fa-firstdraft {
    margin-left: 0.5rem;
    font-size: 1.6rem;
  }
  
  .nav-menu {
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: 70vw;
    justify-content: end;
    margin-right: 2rem;
  }
  
  .nav-item {
    display: flex;
    align-items: center;
    height: 80px;
  }
  
  .nav-links {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
  }
  
  .nav-links:hover {
    background-color: #1888ff;
    border-radius: 4px;
    transition: all 0.2s ease-out;
  }
  
  .fa-bars {
    color: #fff;
  }
  
  .nav-links-mobile {
    display: none;
  }
  
  .menu-icon {
    display: none;
  }
  
  @media screen and (max-width: 960px) {
    .fa-caret-down {
      display: none;
    }
    .NavbarItems {
      position: relative;
    }
  
    .nav-menu {
      display: flex;
      flex-direction: column;
      justify-content: start;
      width: 100%;
      height: 90vh;
      position: absolute;
      top: 80px;
      left: -100%;
      opacity: 1;
      transition: all 0.5s ease;
    }
  
    .nav-menu.active {
      background: #242222;
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    }
  
    .nav-links {
      text-align: center;
      padding: 2rem;
      width: 100%;
      display: table;
    }
  
    .nav-links:hover {
      background-color: #1888ff;
      border-radius: 0;
    }
  
    .navbar-logo {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(25%, 50%);
    }
  
    .menu-icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
    }
  
    .fa-times {
      color: #fff;
      font-size: 2rem;
    }
  
    .nav-links-mobile {
      display: block;
      text-align: center;
      padding: 1.5rem;
      margin: 2rem auto;
      border-radius: 4px;
      width: 80%;
      background: #1888ff;
      text-decoration: none;
      color: #fff;
      font-size: 1.5rem;
    }
  
    .nav-links-mobile:hover {
      background: #fff;
      color: #1888ff;
      transition: 250ms;
    }
  
    button {
      display: none;
    }
}

*/