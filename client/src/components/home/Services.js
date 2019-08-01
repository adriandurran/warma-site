import React from "react"
import Title from "../Title"

import servs from "../../constants/services"

import styles from "../../css/services.module.css"

const Services = () => {
  return (
    <section className={styles.services}>
      <Title title="our" subtitle="services" />
      <div className={styles.center}>
        {servs.map((serv, i) => {
          return (
            <article key={i} className={styles.service}>
              <span>{serv.icon}</span>
              <h4>{serv.title}</h4>
              <p>{serv.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
