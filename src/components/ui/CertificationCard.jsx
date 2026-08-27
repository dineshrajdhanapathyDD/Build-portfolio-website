import { FaExternalLinkAlt } from 'react-icons/fa';

function CertificationCard({ name, issuer, date, credentialUrl }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow duration-200">
      <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1">
        {name}
      </h3>
      <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-1">
        {issuer}
      </p>
      <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
        {date}
      </p>
      {credentialUrl && (
        <a
          href={credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-primary-600 dark:text-primary-400 hover:underline"
          aria-label={`View credential for ${name}`}
        >
          <FaExternalLinkAlt className="w-3 h-3" />
          View Credential
        </a>
      )}
    </div>
  );
}

export default CertificationCard;
