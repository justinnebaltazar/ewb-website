import styles from "../Contact/Contact.module.css";
import { Link } from "react-router-dom";

export const Contact = () => {
    return (
        <section className={styles.container}>
            <div className={styles.top}>
                <h3 className={styles.title}>Interested? Join EWB</h3>
                <h1 className={styles.register}> <Link to="https://go.sfss.ca/clubs/927/info" target="_blank" rel="noopener noreferrer" className={styles.regLink}>Register as a member!</Link></h1>
            </div>
            <div className={styles.footer}>

                <div className={styles.footerSection}>
                    <h3 className={styles.secTitle}>Ventures</h3>
                    <ul>
                        <li><Link to="/project/bionics" className={styles.link}>Bionics Project</Link></li>
                        <li><Link to="/project/enggage" className={styles.link}>ENG-GAGE</Link></li>
                        <li><Link to="/project/firefly" className={styles.link}>Firefly</Link></li>
                        <li><Link to="/project/projectr3d" className={styles.link}>Project R3D</Link></li>
                        <li><Link to="/project/sustainee" className={styles.link}>SUSTAIN-EE</Link></li>
                    </ul>
                </div>

                <div className={styles.footerSection}>
                    <h3 className={styles.secTitle}>Contact us</h3>
                    <ul className={styles.contact}>
                        <li><Link to="https://www.instagram.com/ewb.sfu/" target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram</Link></li>
                        <li><Link to="https://discord.com/invite/pBGK5rx7hM" target="_blank" rel="noopener noreferrer" className={styles.link}>Discord</Link></li>
                        <li><Link to="https://docs.google.com/forms/d/e/1FAIpQLSfRZQX7wzaqc-uiasgSEBilxkVSSh-rL4mXwABkIxdniKJRmg/viewform" target="_blank" rel="noopener noreferrer" className={styles.link}>Leave a Question</Link></li>
                    </ul>
                </div>

                <div className={styles.footerSection}>
                    <h3 className={styles.secTitle}>EWB Canada</h3>
                    <ul>
                        <li><Link to="https://www.ewb.ca/en/" target="_blank" rel="noopener noreferrer" className={styles.link}>Learn more</Link></li>
                        <li><Link to="https://www.instagram.com/ewb_canada/" target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram</Link></li>
                        <li><Link to="https://www.linkedin.com/company/engineers-without-borders-canada/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</Link></li>
                    </ul>
                </div>
            </div>
        </section>
        
    )
}

