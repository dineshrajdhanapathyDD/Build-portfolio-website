import { FaGithub, FaLinkedin, FaTwitter, FaDev } from 'react-icons/fa';
import data from '../../data/portfolio.json';

const iconMap = {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDev,
};

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            &copy; {currentYear} {data.personal.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {data.social.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <a
                  key={item.platform}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.platform}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {Icon && <Icon className="w-5 h-5" />}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
