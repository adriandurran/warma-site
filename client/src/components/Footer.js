import React from "react"
import socialIcons from "../constants/social-icons"
import links from "../constants/links"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "../css/footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((link, i) => {
          return (
            <AniLink fade to={link.path} key={i}>
              {link.name}
            </AniLink>
          )
        })}
      </div>
      <div className={styles.icons}>
        {socialIcons.map((icon, i) => {
          return (
            <a
              href={icon.url}
              key={i}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon.icon}
            </a>
          )
        })}
      </div>
      <div className={styles.copyright}>
        Copyright &copy; Clark Design Bureau {new Date().getFullYear()} all
        rights reserved
      </div>
    </footer>
  )
}

export default Footer
