import Section from '../layout/Section';
import AnimatedSection from '../ui/AnimatedSection';
import ExperienceCard from '../ui/ExperienceCard';
import data from '../../data/portfolio.json';

function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="My professional journey">
      <div className="max-w-3xl mx-auto">
        {data.experience.map((exp, index) => (
          <AnimatedSection key={index} delay={index * 150}>
            <ExperienceCard
              company={exp.company}
              role={exp.role}
              duration={exp.duration}
              description={exp.description}
              achievements={exp.achievements}
            />
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}

export default Experience;
