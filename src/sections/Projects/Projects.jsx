import styles from "./ProjectsStyle.module.css";
import viberr from "../../assets/viberr.png";
import ProjectCard from "../../common/ProjectCard";
import freshBurger from '../../assets/fresh-burger.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="section-title">Projects</h1>
      <div className={styles.projectsContainer}>
       <ProjectCard src={viberr} link="https://github.com" h3="Viberr" p="Streaming App"></ProjectCard>
       <ProjectCard src={freshBurger} link="https://github.com" h3="Fresh Burger" p="Hamburger Restaurant"></ProjectCard>
       </div>
    </section>
  );
}

export default Projects;
