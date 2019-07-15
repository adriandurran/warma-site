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
            Our aim is to promote the sport of walking of all types within the
            Royal Air Force and it's sister services.{" "}
          </p>
          <p>
            We circulate information to members about Walking and Road Marching
            events, in the UK and abroad. The Association has already organised
            RAF entries into numerous events overseas and plans to continue this
            in the future. We also organise our own Two Day March every April, a
            "Winter Walk" in Autumn and an Annual Dinner.
          </p>
          <button type="button" className="btn-primary">
            Read More
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
