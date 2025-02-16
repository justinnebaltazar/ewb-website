import styles from "../Hero/Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.text}>
                <h1 className={styles.title}>Engineering a better future</h1>
                <div className={styles.textContainer}>
                    <p className={styles.desc}>Contribute to an equitable and sustainable future for marginalized people and the planet</p>
                </div>
            </div>
        </section>
    )
}