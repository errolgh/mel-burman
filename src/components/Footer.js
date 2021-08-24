import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useStaticQuery, graphql } from 'gatsby'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

const FooterContainer = styled.footer`
    margin-top: 200px;
    padding: 25px 50px;
    color: white;
    background: #222222;
    background-position: cover;
    background-repeat: none;
    width: 100%;
    font-size: 16px;
`;

const LogoContainer = styled.div`
    font-size: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SiteNavContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

const FooterNavigationTitle = styled.p`
    font-size: 20px;
`;

const NavList = styled.ul`
        margin-left: -40px;
`;


const NavLinks = styled.li`
    text-align: center;
`;


const SocialContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`;

const SocialList = styled.div`
    display: flex;
    justify-content: space-between;
`;

const SocialIcon = styled.div`
    padding: 0 20px;
`;

const FirstFooterRow = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto 40px;
    max-width: 1200px;
    > * {
        text-align: center;
    }
`;

const SecondFooterRow = styled.div`
    text-align: center;
    border-top: 2px solid grey;
    width: 66%;
    margin: 0 auto;
    padding-top: 40px;
`;

const notify = () => {
    console.log("URL Copied!")
    toast(
        "Copied URL. Share!",
        {
            position: toast.POSITION.BOTTOM_CENTER
    })
}

const Footer = () => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    siteUrl
                }
            }
        }
    `)

    return (
        <FooterContainer>
            <FirstFooterRow>
                <LogoContainer>
                    <div>Melony Arthur</div>
                </LogoContainer>
                <SiteNavContainer>
                    <div>
                        <FooterNavigationTitle>Site Navigation</FooterNavigationTitle>
                        <NavList>
                            <NavLinks><Link to="/" activeStyle={{color: "PowderBlue"}} >Home</Link></NavLinks>
                            <NavLinks><Link to="/pics" activeStyle={{color: "PowderBlue"}} >Pics</Link></NavLinks>
                            <NavLinks><Link to="/contact" activeStyle={{color: "PowderBlue"}} >Contact</Link></NavLinks>
                            <NavLinks><Link to="/about" activeStyle={{color: "PowderBlue"}} >About</Link></NavLinks>
                        </NavList>
                    </div>
                </SiteNavContainer>
                <SocialContainer>
                    <SocialList>
                        <SocialIcon>
                            <Link to="https://www.instagram.com/s_melly_buds/" target="_blank">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </Link>
                        </SocialIcon>
                        <SocialIcon>
                            <Link href="mailto: melskibro@gmail.com" target="_blank">
                                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                            </Link>
                        </SocialIcon>
                        <SocialIcon>
                            <CopyToClipboard
                                style={{cursor: "pointer"}}
                                text={data.site.siteMetadata.siteUrl}
                                onCopy={ notify }
                                to="https://www.instagram.com/s_melly_buds/"
                                target="_blank">
                                    <FontAwesomeIcon icon={faShareAlt} size="2x" />
                            </CopyToClipboard>
                        </SocialIcon>
                    </SocialList>
                </SocialContainer>
            </FirstFooterRow>
            <SecondFooterRow>
                Developed By <span style={{color: "PowderBlue"}}><Link to="https://spectralwebdesigns.netlify.app/">Spectral Web Designs</Link></span><br/>
                &copy; {new Date().getFullYear()} Melony Arthur
            </SecondFooterRow>
        </FooterContainer>
    )
}

export default Footer