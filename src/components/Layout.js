import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
import GlobalStyle from './GlobalStyle'
// import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import "@fontsource/dancing-script"

const Layout = ({children}) => {
    const data = useStaticQuery(graphql`
        query SiteUrlQuery {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `)


    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{data.site.siteMetadata.title}</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <GlobalStyle />
            <Nav />
                <div>
                    {children}
                </div>
            <Footer />
        </div>
    )
}

export default Layout