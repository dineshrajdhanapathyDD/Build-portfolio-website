function Section({ id, title, subtitle, children, className = '', alternate = false }) {
  return (
    <section
      id={id}
      className={`py-16 md:py-20 ${alternate ? 'bg-slate-50 dark:bg-slate-800/50' : ''} ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
              {title}
            </h2>
            {subtitle && (
              <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
            <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mt-4 rounded-full" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export default Section;
