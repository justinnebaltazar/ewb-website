import styles from "../Projects/ProjectPage.module.css";
import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils";
import { useParams, Link } from "react-router-dom";

export const ProjectPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  // In case project doesn't exist anymore
  if (!project) return <div className={styles.notFound}>Project not found.</div>;

  return (
    <section className={styles.container}>
        
        <div className={styles.hero}>
            <div className={styles.textContainer}>
                <h1 className={styles.projTitle}>{project.projectName}</h1>
                {project.subheader && <h2 className={styles.subheader}>{project.subheader}</h2>}
            </div>
            
            <div className={styles.imageContainer}>
                {project.filePath && (
                <img 
                    src={getImageUrl(project.filePath)} 
                    alt={`${project.projectName} project`} 
                    className={styles.projectImage}
                />
                )}
            </div>
        </div>

      <div className={styles.about}>
        <div className={styles.content}>
          <h3>About {project.projectName}</h3>
          <p>{project.description}</p>
          {project.workDescription && <p className={styles.workDesc}>{project.workDescription}</p>}
          
          {project.projectLead && (
            <div className={styles.leadInfo}>
              <span className={styles.leadLabel}>Project Lead:</span> {project.projectLead}
            </div>
          )}
          
          {project.listTitle && project.listItems && project.listItems.length > 0 && (
            <div className={styles.listSection}>
              <h4 className={styles.listTitle}>{project.listTitle}</h4>
              <ul className={styles.benefitsList}>
                {project.listItems.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          
          <div className={styles.joinBtnContainer}>
            <p className={styles.joinBtn}>
              Interested? <Link to={project.link} className={styles.joinLink}>Join here</Link>
            </p>
          </div>
        </div>

        {/* Current venture operations */}
        {project.currentStatus && (
          <div className={styles.status}>
            <h3>Current Status</h3>
            <p>{project.currentStatus.desc}</p>
            <p>{project.currentStatus.action}</p>
          </div>
        )}
      </div>

      {/* Subteams Section */}
      {project.subteams && (
        <div className={styles.subteamsContainer}>
          <h3 className={styles.sTitle}>Project Subteams</h3>
          <div className={styles.subteams}>
            {Object.keys(project.subteams).map((key) => {
              const subteam = project.subteams[key];
              return (
                <div key={key} className={styles.subteam}>
                  <h4 className={styles.subteamTitle}>{subteam.title}</h4>
                  <ul className={styles.subteamDesc}>
                    {subteam.desc && subteam.desc.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  {subteam.lead && <p className={styles.subteamLead}>Lead: {subteam.lead}</p>}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* About points */}
      {project.about && (
        <div className={styles.extContainer}>
          <h3 className={styles.extTitle}>{project.about.title}</h3>
          <div className={styles.aboutContent}>
            <div className={styles.extended}>
              {project.about.points.map((point, idx) => (
                <p className={styles.point} key={idx}>{point}</p>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Hiring Section */}
      {project.hiring && project.hiring.length > 0 && (
        <div className={styles.hiringContainer}>
          <h3 className={styles.sectionTitle}>Current Openings</h3>
          <div className={styles.hiringList}>
            {project.hiring.map((position, idx) => (
              <div key={idx} className={styles.hiringPosition}>
                <h4 className={styles.positionTitle}>{position.role}</h4>
                <p className={styles.positionDetail}><strong>Duration:</strong> {position.duration}</p>
                <p className={styles.positionDetail}><strong>Department:</strong> {position.dept}</p>
                <p className={styles.positionDetail}><strong>Requirements:</strong> {position.requirements}</p>
                <p className={styles.positionDescription}>{position.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer to link to starting a new venture */}
      <div className={styles.footer}>
        <h3>How can you get involved?</h3>
        <ul className={styles.footerList}>
          <li>Join the EWB SFU Discord</li>
          <li>Follow us @ewb.sfu on Instagram for the latest updates</li>
          <li>Fill out the Google Form for the design team of your choice!</li>
        </ul>
      </div>
    </section>
  );
};