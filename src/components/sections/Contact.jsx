import { HiMail, HiLocationMarker } from 'react-icons/hi';
import Section from '../layout/Section';
import AnimatedSection from '../ui/AnimatedSection';
import SocialLink from '../ui/SocialLink';
import data from '../../data/portfolio.json';

function Contact() {
  const { email, location, availability } = data.personal;

  return (
    <Section id="contact" title="Get In Touch" subtitle="Let's connect and build something great together" alternate>
      <AnimatedSection>
        <div className="max-w-2xl mx-auto text-center">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            {availability}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <HiMail className="w-5 h-5" />
              <span>{email}</span>
            </a>
            <div className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <HiLocationMarker className="w-5 h-5" />
              <span>{location}</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {data.social.map((social) => (
              <SocialLink
                key={social.platform}
                platform={social.platform}
                url={social.url}
                icon={social.icon}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
}

export default Contact;
