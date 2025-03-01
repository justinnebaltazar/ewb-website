import styles from "../Contact/Contact.module.css";

export const Contact = () => {
    return (
        <section className={styles.container}>
            <h3 className={styles.title}>Interested? Join EWB</h3>
            <ul className={styles.links}>
                <li>Instagram</li>
                <li>Discord</li>
                <li>LinkedIn</li>
            </ul>
        </section>
        
    )
}