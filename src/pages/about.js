import React from 'react'
import Layout from '../components/Layout'
import melWithMug from '../../static/melwithmug.jpg'


const About = () => {

    return(
        <Layout>
            <div>
                This is deadass an about page
            </div>
            <div>
                <img
                    src={melWithMug}
                    alt=""
                />
            </div>
        </Layout>
    )
}

export default About