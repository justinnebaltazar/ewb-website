import styles from "../News/News.module.css";
import news from "../../data/news.json";
import { NewsCard } from "./NewsCard";

export const News = () => {
    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>News</h1>
                <ul>
                    <li>View all events</li>
                    <li>View all news</li>
                </ul>
            </div>
            <div className={styles.newsContainer}>
                {news.map((currNews, id) => (
                    <div className={styles.news} key={id}>
                        <NewsCard key={id} news={currNews} isFirst={id === 0}/>
                    </div>
                ))}
            </div>
        </section>
    );
};
