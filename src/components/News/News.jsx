import styles from "../News/News.module.css";
import news from "../../data/news.json";
import { NewsCard } from "./NewsCard";
import { Link } from "react-router-dom";

export const News = () => {
    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>News</h1>
                <ul>
                    <li><Link className={styles.links} to='/events'>View all events</Link></li>
                    <li><a className={styles.links} href="https://www.ewb.ca/en/news-and-events/news/">View all news</a></li>
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
