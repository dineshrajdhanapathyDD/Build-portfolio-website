import Section from '../layout/Section';
import AnimatedSection from '../ui/AnimatedSection';
import SkillCard from '../ui/SkillCard';
import data from '../../data/portfolio.json';

function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Technologies and tools I work with">
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {data.skills.map((skillGroup, index) => (
          <AnimatedSection key={skillGroup.category} delay={index * 100}>
            <SkillCard category={skillGroup.category} items={skillGroup.items} />
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
