import styles from "../Banner/Banner.module.css"

export const Banner = () => {
    return (
        <section className={styles.container}>
            <div className={styles.text}>
                <h1 className={styles.title}>1000+</h1>
                <h3 className={styles.subtitle}>EWB chapter members at universities and professional institutions across Canada, who form a network of socially-conscious engineers and technologists. </h3>
            </div>
            <div className={styles.button}>
                Join EWB @ SFU!
            </div>
        </section>
    )
}

