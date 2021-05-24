import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
import GlobalStyle from './GlobalStyle'
/*

the layout component queries data with the useStaticQuery hook

https://www.gatsby.com/docs/use-static-query/

*/
import { useStaticQuery, graphql } from 'gatsby'


const Layout = ({children}) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `)


    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{data.site.siteMetadata.title}</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <GlobalStyle />
            <Nav />
                {children}
            <Footer />
        </>
    )
}

export default Layout