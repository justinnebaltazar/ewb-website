import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import { useNavigate } from "react-router-dom";

export const ProjectCard = ({ project : { projectName, subheader, description, workDescription, listTitle, listItems, filePath, link, id}}) => {

    // Click projectCard to go to specific venture's page
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/project/${id}`);
    };

    return (
        <div className={styles.container} onClick={handleClick}>
            <div className={styles.imageContainer}>
                <img src={getImageUrl(filePath)} alt={`Image of ${projectName}`}></img>
            </div>
            <div className={styles.content}>
                <h3>{projectName}</h3>
                <p>{description}</p>
                {workDescription && <p>{workDescription}</p>}
                {listTitle && 
                    <div className={styles.listContainer}>
                        <h2>{listTitle}</h2>
                        <ul className={styles.list}>
                            {listItems.map((item, id) => {
                                return (
                                    <li className={styles.listItem} key={id}>{item}</li>
                                )
                            })}
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}
