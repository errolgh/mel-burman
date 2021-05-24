import React from "react"
import Gallery from "../components/Gallery"
import Layout from '../components/Layout'
import Seo from '../components/Seo'



/*

TODO:

finish layout, finish Seo, finish the graqhql query. read the docs on useStaticQuery.

seems like I have to download graphql

*/










export default function Home() {
  return (
    <Layout>
      <Seo 
        title="The Home Page"
        description="You can customize SEO text here"
        image='/logo.png'
        pathname='/'
        // Boolean indicating whether this is an article:
        // article
      />
      <Gallery/>
    </Layout>
  )
}
