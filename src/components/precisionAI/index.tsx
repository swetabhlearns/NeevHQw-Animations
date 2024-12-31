import { motion } from "framer-motion";

const PrecisionAIContent = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="pt-[80px] lg:pt-[160px] md:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-5 lg:gap-14">
        <motion.div
          className="w-full sm:w-[520px] p-4 rounded-lg -mt-2 px-8 sm:px-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          variants={childVariants}
        >
          <img src="https://www.neevhq.com/ai2.webp" alt="AI Illustration" />
        </motion.div>
        <motion.div
          className="flex flex-col text-left lg:items-start px-8 sm:px-0"
          variants={childVariants}
        >
          <motion.div
            className="text-2xl sm:text-4xl mb-3 sm:mb-5 text-left font-bold md:whitespace-nowrap"
            variants={childVariants}
          >
            Precision AI for
          </motion.div>
          <motion.div
            className="text-base sm:text-lg mb-6 text-gray-500 font-dmsans"
            variants={childVariants}
          >
            Custom-built intelligence to simplify, secure, and redefine patient
            care.
          </motion.div>
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              className="flex flex-row gap-6 text-base sm:text-lg max-w-[540px] mb-6 font-dmsans"
              variants={childVariants}
            >
              <div>
                <img
                  src="https://www.neevhq.com/model.webp"
                  alt={`Model Image ${index + 1}`}
                />
              </div>
              <div>
                <span className="font-semibold">
                  Medically Fine-Tuned Models{" "}
                </span>{" "}
                Neev's transcription and summarization models ensure accurate
                capture of clinical terms, diagnoses, and treatment details.
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PrecisionAIContent;
