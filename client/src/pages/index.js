import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import StyledHero from "../components/StyledHero"
import About from "../components/home/About"
import Services from "../components/home/Services"
import FeaturedTrails from "../components/home/FeaturedTrails"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid} />
    <About />
    <Services />
    <FeaturedTrails />
  </Layout>
)

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "Nijmegen-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
