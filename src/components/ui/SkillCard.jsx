function SkillCard({ category, items }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow duration-200">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1.5 text-sm font-medium bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-lg"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;
