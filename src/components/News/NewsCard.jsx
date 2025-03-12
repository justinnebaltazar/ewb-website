import { getImageUrl } from "../../utils";
import styles from "../News/NewsCard.module.css";

export const NewsCard = ({ news: { title, datePublished, description, filePath, link }, isFirst}) => {
    const handleClick = () => {
        window.open(link, "_blank");
    };

    return (
        <div className={styles.container} onClick={handleClick} style={{ cursor: "pointer"}}>
            <div className={`${styles.imageContainer} ${isFirst ? styles.firstImageContainer : ""}`}>
                <img src={getImageUrl(filePath)} alt={`Image of ${title}`} className={styles.cover} />
            </div>
            <div className={styles.preview}>    
                <h3 className={styles.title}>{title}</h3>
                <h4 className={styles.date}>{datePublished}</h4>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
};
