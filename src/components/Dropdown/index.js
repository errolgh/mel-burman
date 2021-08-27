import React, { useState } from 'react'
// import { MenuItems } from './MenuItems'
import { Link } from 'react-router-dom'

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

function Dropdown () {
    const [ click, setClick ] = useState(false)

    const handleClick = () => setClick(true)

    return (
        <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            {arrOfArtists.map((item, index) => {
                return (
                    <li key={index}>
                        <Link onClick={() => setClick(false)} to={item.path} className={item.cName}>{item.title}</Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default Dropdown