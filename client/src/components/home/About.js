import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import Title from "../Title"
import styles from "../../css/about.module.css"

const getAboutImage = graphql`
  {
    aboutImage: file(relativePath: { eq: "45157547.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const data = useStaticQuery(getAboutImage)
  const { fluid } = data.aboutImage.childImageSharp

  return (
    <section className={styles.about}>
      <Title title="About" subtitle="Us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={fluid} alt="awesome landscape" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Royal Air Force Walking and Road Marching Association </h4>
          <p>
            The Royal Air Force Walking and Road Marching Association was formed
            on 1st April 1980.
          </p>
          <p>
            Our aim is to promote the sport of walking of all types within the
            Royal Air Force and it's sister services.
          </p>
          <p>
            We welcome both serving and ex-serving members of the Armed Forces,
            Cadet Forces and Civilians. We cater for both the serious road
            marcher and those interested in the more fun type events.
          </p>
        </article>
      </div>
    </section>
  )
}

export default About
