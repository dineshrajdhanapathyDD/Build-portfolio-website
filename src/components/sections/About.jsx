import Section from '../layout/Section';
import AnimatedSection from '../ui/AnimatedSection';
import data from '../../data/portfolio.json';

function About() {
  const { about, stats } = data.personal;

  return (
    <Section id="about" title="About Me" subtitle="Get to know me better" alternate>
      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              {about}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-sm border border-slate-200 dark:border-slate-700"
              >
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
}

export default About;
