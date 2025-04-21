import { useState } from "react"
import styles from "../Navbar/Menu.module.css"
import { Link } from "react-router-dom"

export const Menu = ({ setMenuOpen }) => {
  // Track which dropdown is open
  const [openDropdown, setOpenDropdown] = useState(null);

  // Toggle dropdown visibility
  const toggleDropdown = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(index);
    }
  };

  return (
    <section className={styles.menuContainer}>
      <div className={styles.list}>
        <div className={styles.menuCategory}>
          <h3 
            className={styles.menuHeader} 
            onClick={() => toggleDropdown(0)}
          >
            About us
            <span className={`${styles.arrow} ${openDropdown === 0 ? styles.arrowDown : ''}`}>▸</span>
          </h3>
          {openDropdown === 0 && (
            <ul className={styles.menuItems}>
              <li>Meet the team</li>
              <li><Link to="https://www.ewb.ca/en/" target="_blank" rel="noopener noreferrer"  className={styles.link}>EWB Canada</Link></li>
            </ul>
          )}
        </div>

        <div className={styles.menuCategory}>
          <h3 
            className={styles.menuHeader} 
            onClick={() => toggleDropdown(1)}
          >
            What we do
            <span className={`${styles.arrow} ${openDropdown === 1 ? styles.arrowDown : ''}`}>▸</span>
          </h3>
          {openDropdown === 1 && (
            <ul className={styles.menuItems}>
              <li>Goals</li>
              <li><Link to="/get-involved" className={styles.link} onClick={() => setMenuOpen(false)}>Projects</Link></li>
            </ul>
          )}
        </div>

        <div className={styles.menuCategory}>
          <h3 
            className={styles.menuHeader} 
            onClick={() => toggleDropdown(2)}
          >
            Get involved
            <span className={`${styles.arrow} ${openDropdown === 2 ? styles.arrowDown : ''}`}>▸</span>
          </h3>
          {openDropdown === 2 && (
            <ul className={styles.menuItems}>
              <li>Project 1</li>
              <li>Project 2</li>
              <li>Project 3</li>
            </ul>
          )}
        </div>

        <div className={styles.menuCategory}>
          <h3 
            className={styles.menuHeader} 
            onClick={() => toggleDropdown(3)}
          >
            Contact us
            <span className={`${styles.arrow} ${openDropdown === 3 ? styles.arrowDown : ''}`}>▸</span>
          </h3>
          {openDropdown === 3 && (
            <ul className={styles.menuItems}>
              <li><Link to="https://www.instagram.com/ewb.sfu/" target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram</Link></li>
              <li><Link to="https://discord.com/invite/pBGK5rx7hM" target="_blank" rel="noopener noreferrer" className={styles.link}>Discord</Link></li>
              <li><Link to="https://docs.google.com/forms/d/e/1FAIpQLSfRZQX7wzaqc-uiasgSEBilxkVSSh-rL4mXwABkIxdniKJRmg/viewform" target="_blank" rel="noopener noreferrer" className={styles.link}>Ask a question</Link></li>
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}