function ExperienceCard({ company, role, duration, description, achievements }) {
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-primary-200 dark:border-primary-800 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-400 border-4 border-white dark:border-slate-900" />

      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {role}
          </h3>
          <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
            {duration}
          </span>
        </div>
        <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mb-3">
          {company}
        </p>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-3 leading-relaxed">
          {description}
        </p>
        {achievements && achievements.length > 0 && (
          <ul className="space-y-1">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-sm text-slate-500 dark:text-slate-400 flex items-start gap-2">
                <span className="text-primary-500 mt-0.5">&#10003;</span>
                {achievement}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ExperienceCard;
