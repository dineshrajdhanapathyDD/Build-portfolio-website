import { FaGithub, FaLinkedin, FaTwitter, FaDev } from 'react-icons/fa';

const iconMap = {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDev,
};

function SocialLink({ platform, url, icon }) {
  const Icon = iconMap[icon];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${platform} profile`}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
    >
      {Icon && <Icon className="w-5 h-5" />}
      <span className="text-sm font-medium">{platform}</span>
    </a>
  );
}

export default SocialLink;
