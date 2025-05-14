import { useEffect, useState } from "react"
import styles from "../Navbar/Navbar.module.css"
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "./Menu";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
    const [openDropdown, setOpenDropdown] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            const isMobileSize = window.innerWidth <= 900;
            setIsMobile(isMobileSize);
            
            if (!isMobileSize) {
                setMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleDropdown = (index) => {
        if (openDropdown === index) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(index);
        }
    };

    const handleLogoClick = () => {
        navigate('/');
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img className={styles.logo} src="/images/logos/ewb-logo.png" alt="ewb-logo" onClick={handleLogoClick}/>
            </div>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={menuOpen ? "/images/navbar/closeBtn.png" : "/images/navbar/menuBtn.png"}
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />  
                <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}>
                    <li className={styles.dropdownWrapper}
                        onClick={() => toggleDropdown(0)}
                    >
                        <span className={styles.link}>About us</span>
                        {openDropdown === 0 && (
                            <div className={`${styles.dropdownMenu} ${styles.dropdownMenuL}`}>
                                <div className={styles.dropdownLeft}>
                                    <Link to="/meet-the-team" className={styles.link}>Meet the team</Link>
                                    <a href="https://www.ewb.ca/en/" target="_blank" rel="noopener noreferrer" className={styles.link}>EWB Canada</a>
                                </div>
                                <div className={styles.dropdownRight}>
                                    <h4>Our Mission</h4>
                                    <p>Learn about our mission to create sustainable change through engineering and community initiatives.</p>
                                </div>
                            </div>
                        )}
                    </li>
                    <li
                        className={styles.dropdownWrapper}
                        onClick={() => toggleDropdown(1)}
                    >
                        <span className={styles.link}>What we do</span>
                        {openDropdown === 1 && (
                            <div className={`${styles.dropdownMenu} ${styles.dropdownMenuL}`}>
                                <div className={styles.dropdownLeft}>
                                    <Link className={styles.link}>Goals</Link>
                                    <Link to="/get-involved" className={styles.link}>Ventures</Link>
                                </div>
                                <div className={styles.dropdownRight}>
                                    <h4>Our Impact</h4>
                                    <p>Discover how our projects create positive change in communities.</p>
                                </div>
                            </div>
                        )}
                    </li>
                    <li
                        className={styles.dropdownWrapper}
                        onClick={() => toggleDropdown(2)}
                    >
                        <span className={styles.link}>Get involved</span>
                        {openDropdown === 2 && (
                            <div className={`${styles.dropdownMenu} ${styles.dropdownMenuR}`}>
                                <div className={styles.dropdownLeft}>
                                    <ul>
                                        <li><Link to="/project/bionics" className={styles.link}>Bionics Project</Link></li>
                                        <li><Link to="/project/enggage" className={styles.link}>ENG-GAGE</Link></li>
                                        <li><Link to="/project/firefly" className={styles.link}>Firefly</Link></li>
                                        <li><Link to="/project/projectr3d" className={styles.link}>Project R3D</Link></li>
                                        <li><Link to="/project/sustainee" className={styles.link}>SUSTAIN-EE</Link></li>
                                    </ul>
                                </div>
                                <div className={styles.dropdownRight}>
                                    <h4><Link to="/get-involved" className={styles.navHeader}>Join a Project</Link></h4>
                                    <p>Contribute your skills to make a difference with our active ventures.</p>
                                </div>
                            </div>
                        )}
                    </li>
                    <li
                        className={styles.dropdownWrapper}
                        onClick={() => toggleDropdown(3)}
                    >
                        <span className={styles.link}>Contact us</span>
                        {openDropdown === 3 && (
                            <div className={`${styles.dropdownMenu} ${styles.dropdownMenuR}`}>
                                <div className={styles.dropdownLeft}>
                                    <ul>
                                        <li><a href="https://www.instagram.com/ewb.sfu/" target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram</a></li>
                                        <li><a href="https://discord.com/invite/pBGK5rx7hM" target="_blank" rel="noopener noreferrer" className={styles.link}>Discord</a></li>
                                        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSfRZQX7wzaqc-uiasgSEBilxkVSSh-rL4mXwABkIxdniKJRmg/viewform" target="_blank" rel="noopener noreferrer" className={styles.link}>Ask a question</a></li>                                
                                    </ul>
                                </div>
                                <div className={styles.dropdownRight}>
                                    <h4>Looking to get involved?</h4>
                                    <p>Register as a member and join our Discord!</p>
                                </div>
                            </div>
                        )}
                    </li>
                </ul>

                {menuOpen && isMobile && <Menu setMenuOpen={setMenuOpen} />}
            </div>
        </nav>
    )
}