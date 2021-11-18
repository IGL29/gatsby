// Vendors
import * as React from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"
// Internals
import { Layout } from "../components/Layout"

const NotFoundPage = () => (
  <Layout>
    <Seo lang={"en"} title={"Page not found"} description={"description"} />

    <h1>404: Not Found</h1>
    <Link to={"/"}>To the main page</Link>
  </Layout>
)

export default NotFoundPage
