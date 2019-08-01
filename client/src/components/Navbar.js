import React, { useState } from "react"
import links from "../constants/links"
import { FaAlignRight } from "react-icons/fa"
import socialIcons from "../constants/social-icons"
import logo from "../images/raf_walking___road_marching_logo.png"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "../css/navbar.module.css"

const Navbar = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img
            src={logo}
            alt="road marching association"
            className={styles.logoImg}
          />
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((link, i) => {
            return (
              <li key={i}>
                <AniLink fade to={link.path}>
                  {link.name}
                </AniLink>
              </li>
            )
          })}
        </ul>
        <div className={styles.navSocialLinks}>
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
      </div>
    </nav>
  )
}

export default Navbar
