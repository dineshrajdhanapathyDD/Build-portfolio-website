import Section from '../layout/Section';
import AnimatedSection from '../ui/AnimatedSection';
import data from '../../data/portfolio.json';

function Education() {
  return (
    <Section id="education" title="Education" subtitle="My academic background" alternate>
      <div className="max-w-3xl mx-auto">
        {data.education.map((edu, index) => (
          <AnimatedSection key={index} delay={index * 150}>
            <div className="relative pl-8 pb-8 border-l-2 border-primary-200 dark:border-primary-800 last:pb-0">
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-400 border-4 border-slate-50 dark:border-slate-800" />

              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                    {edu.duration}
                  </span>
                </div>
                <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mb-3">
                  {edu.institution}
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}

export default Education;
