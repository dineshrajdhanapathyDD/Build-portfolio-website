import Section from '../layout/Section';
import AnimatedSection from '../ui/AnimatedSection';
import CertificationCard from '../ui/CertificationCard';
import data from '../../data/portfolio.json';

function Certifications() {
  return (
    <Section id="certifications" title="Certifications & Achievements" subtitle="Credentials and recognitions">
      {/* Certifications Grid */}
      <AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {data.certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              name={cert.name}
              issuer={cert.issuer}
              date={cert.date}
              credentialUrl={cert.credentialUrl}
            />
          ))}
        </div>
      </AnimatedSection>

      {/* Achievements */}
      {data.achievements && data.achievements.length > 0 && (
        <AnimatedSection delay={200}>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 text-center">
              Achievements
            </h3>
            <div className="space-y-4">
              {data.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700"
                >
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}
    </Section>
  );
}

export default Certifications;
