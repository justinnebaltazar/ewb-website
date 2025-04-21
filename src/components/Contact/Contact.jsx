import styles from "../Contact/Contact.module.css";
import { Link } from "react-router-dom";

export const Contact = () => {
    return (
        <section className={styles.container}>
            <div className={styles.top}>
                <h3 className={styles.title}>Interested? Join EWB</h3>
                <h1 className={styles.register}> <Link to="https://go.sfss.ca/clubs/927/info" target="_blank" rel="noopener noreferrer" className={styles.link}>Register as a member!</Link></h1>
            </div>
            <div className={styles.footer}>

                <div className={styles.footerSection}>
                    <h3>Projects</h3>
                    <ul>
                        <li>Project 1</li>
                        <li>Project 2</li>
                        <li>Project 3</li>
                    </ul>
                </div>

                <div className={styles.footerSection}>
                    <h3>Contact us</h3>
                    <ul className={styles.contact}>
                        <li>Instagram</li>
                        <li>Discord</li>
                        <li>EWB Canada</li>
                    </ul>
                </div>

                <div className={styles.footerSection}>
                    <h3>EWB Canada</h3>
                    <ul>
                        <li>Instagram</li>
                        <li>Learn more</li>
                    </ul>
                </div>
            </div>

        </section>
        
    )
}

