import { useState } from "react"
import styles from "../Navbar/Navbar.module.css"
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img className={styles.logo} src="/images/logos/ewb-logo.png" alt="ewb-logo" />
            </div>
            <div className={styles.menu}>
            <img
                className={styles.menuBtn}
                src={menuOpen ? "/images/navbar/closeBtn.png" : "/images/navbar/menuBtn.png"}
                alt="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
            />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => {setMenuOpen(false)}}>
                    <li>About us</li>
                    <li>What we do</li>
                    <li><Link to='/get-involved' className={styles.link}>Get involved</Link></li>
                    <li>Contact us</li>
                </ul>
            </div>
        </nav>
    )
}