import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div className="page-404">
        <SEO
            title="404 Error: Page Not Found"
            description="You're visiting the Geek MD. Thank you. But, you've reached this page by mistake. You're seeing a 404 error because the page requested doesn't exist."
            author="GeekMD"
        />
        <h1 className="heading-primary">Page Not Found: 404 Error</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
