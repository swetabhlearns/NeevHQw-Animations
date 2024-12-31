import { motion } from "framer-motion";

const HeroTextContent = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2, // Animates children one after another
        duration: 0.8,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="md:pt-[140px] pt-[100px] flex flex-col items-center justify-end"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="px-5 text-center text-[24px] xs:text-[28px] sm:text-[42px] md:text-[52px] font-bold mb-3 sm:mb-2 md:mb-6 text-gray-800 leading-[34px] sm:leading-[48px] md:leading-[58px]"
        variants={textVariants}
      >
        Connecting Patients and <br />
        Providers Through{" "}
        <motion.div
          className="text-left inline-block bg-gradient-to-r from-[#607AFF] from-30% via-[#8DD3FF] via-90% to-[#B4D0FF] to-100% bg-clip-text text-transparent w-fit"
          variants={textVariants}
        >
          Precision
        </motion.div>
      </motion.div>
      <motion.p
        className="font-dmsans text-[12px] xs:text-[14px] sm:text-[18px] md:text-[24px] bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent text-center max-w-[470px] sm:max-w-[600px] md:max-w-[700px] px-5 md:px-0"
        variants={textVariants}
      >
        Making healthcare simple, smart, and more human centric by reducing
        admin work, saving time, and enabling doctors to focus on what truly
        matters - Patients
      </motion.p>
    </motion.div>
  );
};

export default HeroTextContent;
