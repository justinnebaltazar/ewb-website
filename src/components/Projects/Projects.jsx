import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    
    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <h1>Current Ventures</h1>
                <p>Learn more about how you can get involved with EWB SFU!</p>
                <p>Interested in becoming a Project Lead at EWB SFU and helping shape our ever-growing Engineering community? Fill out the <a href="https://docs.google.com/forms/d/e/1FAIpQLSfxrJ91qPw7CGS9qooeRzt-EtT7qkTHV55iZnk7EVEBU6AL9Q/viewform" target="_blank">project proposal form</a>!</p>

            </div>
            <div className={styles.projectContainer}>
                {projects.map((project, id) => (
                    <ProjectCard key={id} project={project}></ProjectCard>
                ))}
            </div>            
        </section>
    )
}

