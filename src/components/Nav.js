import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FaTimes, FaBars } from 'react-icons/fa'

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    padding: 0 40px;
    margin: 0 auto;
    width: 100%;
    align-items: center;
`;

const LinksList = styled.ul`
    display: flex;
    justify-content: space-around;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-weight: lighter;
    color: #595959;
    `;

const ListItem = styled.li`
    transition: 0.7s;
    padding: 4vh 26px;
    &:hover {
        background-color: #E9E9E9;
    }
`;

const HamburgerIcon = styled.div`
    /* display: none; */
    color: #595959;
`;

const Nav = () => {
    const [ click, setClick ] = useState(false)
    const [ dropdown, setDropdown ] = useState(false)

    const handleClick = () => setClick(!click)  // toggle hamburger menu icon
    const closeMobileMenu = () => setClick(false)

    const onMouseEnter = () => {
        // if (window.innerWidth < 960) {
        //     setDropdown(false)
        // } else {
            setDropdown(true)
        // }
    }

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    }
    return (
        <NavBar>
            {/* <div> */}
                <Link style={{letterSpacing: -1, fontSize: 36}} to="/">
                    <div>M. Arthur</div>
                </Link>
                <HamburgerIcon onClick={handleClick}> 
                   {
                       click ? <FaTimes/> : <FaBars/>  //"menu-icon" class in brian design videos
                   }
                </HamburgerIcon>
                <LinksList>
                    <Link to="/" activeStyle={{color: "#000", fontWeight: "bolder"}}>
                        <ListItem>Home</ListItem>
                    </Link>
                    <Link to="/gatsby" activeStyle={{color: "#000", fontWeight: "bolder"}}>
                        <ListItem>Gallery</ListItem>
                    </Link>
                    <Link to="/artists" activeStyle={{color: "#000", fontWeight: "bolder"}}>
                        <ListItem>Artists</ListItem>
                    </Link>
                    <Link to="/contact" activeStyle={{color: "#000", fontWeight: "bolder"}}>
                        <ListItem>Contact</ListItem>
                    </Link>
                </LinksList>
            {/* </div> */}
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