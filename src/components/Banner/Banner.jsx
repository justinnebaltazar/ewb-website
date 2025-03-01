import styles from "../Banner/Banner.module.css"

export const Banner = () => {
    return (
        <section className={styles.container}>
            <div className={styles.text}>
                EWB chapter members at universities and professional institutions across Canada, who form a network of socially-conscious engineers and technologists. 
            </div>
            <div className={styles.button}>
                Join EWB @ SFU!
            </div>
        </section>
    )
}

