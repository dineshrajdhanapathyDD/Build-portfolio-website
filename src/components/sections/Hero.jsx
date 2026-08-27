import Button from '../ui/Button';
import data from '../../data/portfolio.json';

function Hero() {
  const { name, title, introduction } = data.personal;

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl animate-fade-in">
          <p className="text-primary-600 dark:text-primary-400 font-medium mb-4 text-lg">
            Hello, I&apos;m
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
            {name}
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-600 dark:text-slate-300 mb-6">
            {title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
            {introduction}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              href="#projects"
              onClick={(e) => handleScroll(e, 'projects')}
              variant="primary"
              size="lg"
            >
              View Projects
            </Button>
            <Button
              href="#contact"
              onClick={(e) => handleScroll(e, 'contact')}
              variant="outline"
              size="lg"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
