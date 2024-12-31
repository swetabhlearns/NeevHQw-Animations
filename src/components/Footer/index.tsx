const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-gray-100 py-8 px-4 md:px-12">
        <div className="relative mx-auto flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
          <div className="md:absolute md:top-1/2 md:-translate-y-1/2 md:left-0 flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <img
                src="https://www.neevhq.com/neev.svg"
                alt="Neev Logo"
                className="w-6 h-6"
              />
              <span className="text-2xl font-medium">neev</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 font-dmsans">
            <a
              href="/"
              className="text-gray-600 hover:text-gray-800 hover:underline text-sm md:text-base transition-all duration-200 ease-in-out"
            >
              Privacy Policy
            </a>
            <div className="hidden md:inline text-gray-400"></div>
            <a
              href="/"
              className="text-gray-600 hover:text-gray-800 hover:underline text-sm md:text-base transition-all duration-200 ease-in-out"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
