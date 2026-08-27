const variants = {
  primary:
    'bg-primary-600 hover:bg-primary-700 text-white shadow-sm hover:shadow-md',
  secondary:
    'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white',
  outline:
    'border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3 text-lg',
};

function Button({ children, variant = 'primary', size = 'md', href, onClick, className = '', ...props }) {
  const baseClasses = `inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClasses} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={baseClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export default Button;
