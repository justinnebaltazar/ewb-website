import styles from "../About/About.module.css"
import goals from "../../data/goals.json"
import { Link } from "react-router-dom"

export const About = () => {
    return (
        <section className={styles.container}>
            <div className={styles.quotes}>
                <h3>Engineers Without Borders Canada stands at the forefront of addressing global challenges through engineering and technological innovation, “engineering an equitable and sustainable future for marginalized people and the planet.”</h3>
                <h3>Our focus on clean technologies, sustainable agriculture and food systems, healthcare resilience in the face of climate change, and education and job creation in STEM fields are pillars of our approach.</h3>
                <h3></h3>
            </div>
            <div className={styles.goalsContainer}>
                {goals.map((goal, id) => (
                    <div key={id} className={styles.goal}>
                        <h2 className={styles.title}>{goal.title}</h2>
                        <h4 className={styles.subheader}>{goal.subheading}</h4>
                        <p className={styles.desc}>{goal.description}</p>
                        <div className={styles.button}><Link to={goal.link} target="_blank" rel="noopener noreferrer" className={styles.link}>Find out more!</Link></div>
                    </div>
                ))}
            </div>
        </section>
        
    )
}