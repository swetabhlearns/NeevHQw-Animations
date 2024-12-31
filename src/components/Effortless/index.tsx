import { motion } from "framer-motion";
import RowContent from "./rowContent";

const EffortlessDocumentation = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2, // Animates children one after another
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="pt-[20px] sm:pt-[80px] md:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center lg:items-start gap-5">
        <motion.div
          className="flex flex-col text-left lg:items-start px-8 sm:px-0"
          variants={childVariants}
        >
          <div className="text-2xl sm:text-4xl mb-3 sm:mb-5 text-left font-bold md:whitespace-nowrap">
            Effortless Documentation For{" "}
            <span className="hidden sm:inline">
              <br />
            </span>
            <span className="text-left inline-block bg-gradient-to-r from-[#607AFF] from-30% via-[#8DD3FF] via-90% to-[#B4D0FF] to-100% bg-clip-text text-transparent w-fit">
              Smarter Healthcare
            </span>
          </div>
          <motion.div
            className="text-base sm:text-lg mb-6 text-gray-500 font-dmsans"
            variants={childVariants}
          >
            Automate your documentation process with Neev -{" "}
            <span className="hidden sm:inline">
              <br />
            </span>
            seamless, accurate, and ready for your EMRs.
          </motion.div>
          <RowContent
            imageSrc="https://www.neevhq.com/conversation.webp"
            extraBoldText="Transcribe Conversations "
            normalText="Record and summarise doctor-patient interactions with speaker diarisation."
          />
          <RowContent
            imageSrc="https://www.neevhq.com/patient.webp"
            extraBoldText="Empower Patients "
            normalText=" Share Patient Visit Summaries (PVS) for continuity in care."
          />
          <RowContent
            imageSrc="https://www.neevhq.com/integration.webp"
            extraBoldText="Integrate Seamlessly"
            normalText=" Send summaries directly to EMR."
          />
        </motion.div>
        <motion.div
          className="w-full sm:w-[600px] p-4 rounded-lg -mt-5"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <img
            src="https://www.neevhq.com/docu.webp"
            alt="Document Image"
            className="w-full h-full px-4 sm:px-0"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EffortlessDocumentation;
