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
    text-align: center;
    position: relative;
    padding: 10px;
    
    @media(min-width: 768px) {
        padding: 0px;
        width: 250px;
        position: absolute;
        left: 10px;
        top: 10vh;
        list-style: none;
        text-align: start;
    }
    
    
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

    // const handleClick = () => setClick(!click)
    const handleClick = () => setClick(false)

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