import Section from '../layout/Section';
import AnimatedSection from '../ui/AnimatedSection';
import ProjectCard from '../ui/ProjectCard';
import data from '../../data/portfolio.json';

function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Some of my recent work" alternate>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {data.projects.map((project, index) => (
          <AnimatedSection key={project.id} delay={index * 100}>
            <ProjectCard project={project} />
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
