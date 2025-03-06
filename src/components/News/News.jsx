import styles from "../News/News.module.css"

export const News = () => {
    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <h1>News</h1>
                <div className={styles.buttons}>
                    <ul>
                        <li>View all events</li>
                        <li>View all news</li>
                    </ul>
                </div>
            
            </div>
        </section>
    )
}