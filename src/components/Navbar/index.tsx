import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const NavBar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50); // Adjust the threshold as needed
    });
  }, [scrollY]);

  return (
    <motion.div
      className={`fixed top-0 left-0 z-50 flex flex-row items-center justify-between w-full p-5 md:p-9 text-2xl font-bold text-gray-800 transition-colors ${
        isScrolled ? "bg-white/70 backdrop-blur-md" : "bg-white"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center gap-2 md:gap-3">
        <motion.img
          src="https://www.neevhq.com/neev.svg"
          alt="NeevHQ Logo"
          className="w-7 h-7 md:w-10 md:h-10"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.span
          className="text-3xl md:text-4xl font-medium"
          animate={{
            opacity: isScrolled ? 0 : 1,
            x: isScrolled ? -20 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          neev
        </motion.span>
      </div>
      <div className="flex flex-row items-center gap-4 md:gap-6">
        <a href="">
          <svg
            className="w-6 h-6 md:w-8 md:h-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </svg>
        </a>
        <a
          href=""
          className="flex flex-row gap-2 items-center text-sm md:text-xl border-2 border-gray-500 hover:border-black text-gray-600 hover:text-black transition-colors px-2 md:px-3 py-1 md:py-2 rounded-md z-40"
        >
          Careers
        </a>
      </div>
    </motion.div>
  );
};

export default NavBar;
