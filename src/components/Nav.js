import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavBar = styled.div`
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


const Nav = () => {
    const [ click, setClick ] = useState(false)
    const [ dropdown, setDropdown ] = useState(false)

    const handleClick = () => setClick(!click)
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
            <Link style={{letterSpacing: -1, fontSize: 36}} to="/"><div>M. Arthur</div></Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
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
        </NavBar>
    )
}

export default Nav