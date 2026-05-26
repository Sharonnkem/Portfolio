import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-shell py-20 sm:py-24">
      <SectionHeading
        eyebrow="Projects"
        title="Some projects I have worked on"
        description="A mix of frontend and full stack projects built across different industries."
        centered
      />

      <div className="mt-12 grid gap-8 xl:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
