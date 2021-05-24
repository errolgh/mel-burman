import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    /* width: 100%; */
    padding: 0 20px;
    margin: 0 auto 120px;
    align-items: center;

    > div {
        font-size: 40px;
    }
`;

const LinksList = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 40%;
`;

const ListItem = styled.li`
`;

const Nav = () => {
    return (
        <NavBar>
            <div>Melony Arthur</div>
            <LinksList>
                <ListItem><Link to="/" >Home</Link></ListItem>
                <ListItem><Link to="/gallery" >Gallery</Link></ListItem>
                <ListItem><Link to="/shop" >Shop</Link></ListItem>
                <ListItem><Link to="/contact" >Contact</Link></ListItem>
                <ListItem><Link to="/about" >About</Link></ListItem>
            </LinksList>
        </NavBar>
    )
}

export default Nav