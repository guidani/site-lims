import ProjectCard from "@/components/ProjectCard";
import styles from "./projects.module.css";

export default function Projects() {
  return (
    <section id="projetos">
      <div className="container mx-auto">
        <h2 className="title_h2 mb-4">Projetos</h2>
        <div className={styles.cardsContainer}>
          <ProjectCard />

          <ProjectCard />

          <ProjectCard />
        </div>
        <div className={styles.sectionFooter}>
          <a href="#" className="">
            <span>Descubra mais projetos</span>
          </a>
        </div>
      </div>
    </section>
  );
}
