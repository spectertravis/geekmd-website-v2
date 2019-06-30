import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header";

const IndexPage = () => (
  <Layout>
    <SEO
        title="Home"
        description="Visit the Geek MD. We'd love to discuss opportunities to improve health IT solutions and infrastructure through collaboration and open source innovation."
        author="GeekMD"
    />
    <Header/>
  </Layout>
)

export default IndexPage
