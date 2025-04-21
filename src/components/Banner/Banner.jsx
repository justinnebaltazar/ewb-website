import styles from "../Banner/Banner.module.css"
import { Link } from "react-router-dom"

export const Banner = () => {
    return (
        <section className={styles.container}>
            <div className={styles.text}>
                <h1 className={styles.title}>1000+</h1>
                <h3 className={styles.subtitle}>EWB chapter members at universities and professional institutions across Canada, who form a network of socially-conscious engineers and technologists. </h3>
            </div>
            <div className={styles.button}>
            <Link to="https://go.sfss.ca/clubs/927/info" target="_blank" rel="noopener noreferrer" className={styles.regLink}>Join EWB @ SFU</Link>
            </div>
        </section>
    )
}

