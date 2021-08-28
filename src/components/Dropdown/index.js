import React, { useState } from 'react'
// import { MenuItems } from './MenuItems'
import styled from 'styled-components'
import { Link } from 'gatsby'

// this data will come from Strap CMS
const arrOfArtists = [
    {
        title: 'M. Arthur',
        path: '/marthur',
        cName: 'dropdown-link'
    },
    {
        title: 'artwhorrore',
        path: '/artwhorrore',
        cName: 'dropdown-link'
    },
    {
        title: 'eygja',
        path: '/eygja',
        cName: 'dropdown-link'
    },
]; 

const DropdownMenu = styled.ul`
    width: 250px;
    position: absolute;
    top: 10vh;
    list-style: none;
    text-align: start;
    
    
    &.clicked {
        display: none;
    }
`;

const DropdownItem = styled.li`
    background: #fafafa;
    cursor: pointer;
    padding: 5px;
    &:hover {
        background: #E9E9E9;
    }
`;

const DropdownLink = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #595959;
    padding: 16px;
`;

function Dropdown () {
    const [ click, setClick ] = useState(false)

    const handleClick = () => setClick(true)

    return (
        <DropdownMenu onClick={handleClick} className={click ? 'clicked' : ''}>
            {arrOfArtists.map((item, index) => {
                return (
                    <DropdownItem key={index}>
                        <Link onClick={() => setClick(false)} to={item.path}>
                            <DropdownLink>{item.title}</DropdownLink>
                        </Link>
                    </DropdownItem>
                )
            })}
        </DropdownMenu>
    )
}

export default Dropdown



/*
.dropdown-menu {
    width: 200px;
    position: absolute;
    top: 80px;
    list-style: none;
    text-align: start;
}

.dropdown-menu li {
    background: #1888ff;
    cursor: pointer;
}

.dropdown-menu li:hover {
    background: #5cabff;
}

.dropdown-menu.clicked {
    display: none;
}

.dropdown-link {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #fff;
    padding: 16px;
}

*/