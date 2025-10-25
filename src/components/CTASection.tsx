interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonUrl?: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
  backgroundColor?: string;
}

export function CTASection({
  title = "Ready to bring your ideas to life?",
  subtitle = "Launch a store in seconds and start getting paid.",
  primaryButtonText = "Get Started →",
  primaryButtonUrl = "https://my.store.fun/register",
  secondaryButtonText = "Contact Sales",
  secondaryButtonUrl = "https://t.me/storedotfun",
  backgroundColor = "black"
}: CTASectionProps) {
  return (
    <section className={`w-full py-16 sm:py-20 md:py-24 bg-${backgroundColor}`}>
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 sm:mb-8 tracking-tight text-white">
            {title}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 sm:mb-10">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={primaryButtonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-semibold text-sm sm:text-base md:text-lg text-white transition-all hover:scale-105 shadow-xl w-[200px] sm:w-auto" 
              style={{backgroundColor: '#0f47e4', boxShadow: '0 20px 60px -10px rgba(15, 71, 228, 0.5)'}}
            >
              {primaryButtonText}
            </a>
            <a 
              href={secondaryButtonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-semibold text-sm sm:text-base md:text-lg bg-gray-800 hover:bg-gray-700 text-white transition-all w-[200px] sm:w-auto"
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

