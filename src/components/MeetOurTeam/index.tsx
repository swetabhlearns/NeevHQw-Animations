import { motion } from "framer-motion";

function TeamMember() {
  return (
    <motion.a
      href="/"
      className="border flex gap-3 flex-row justify-around items-center border-gray-400 rounded-lg p-4 w-[320px] hover:border-blue-800 hover:shadow-lg transition-all"
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.1 },
      }}
      whileTap={{ scale: 0.95 }}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      <div className="flex flex-row gap-3 items-center">
        <img
          src="https://www.neevhq.com/abhinav.webp"
          alt="Founder Image"
          className="w-[60px] h-[60px] object-cover rounded-full"
        />
      </div>

      <div>
        <h3 className="text-lg font-bold">Abhinav Singh</h3>
        <p className="font-semibold text-sm text-gray-700 mb-1">
          AI/ML Engineer, IIT Madras Alumnus
        </p>
      </div>
      <svg
        className="w-6 h-6 text-gray-700 transition-colors"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M7 17L16.95 7.05M7 7h10v10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        ></path>
      </svg>
    </motion.a>
  );
}

const MeetOurTeam = () => {
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

  return (
    <motion.div
      className="pt-[80px] lg:pt-[160px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="flex flex-col items-center gap-8 px-4">
        <motion.div
          className="text-xl md:text-3xl font-bold mb-0 md:mb-4"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
          }}
        >
          Meet Our Team
        </motion.div>
        <div className="flex flex-col lg:flex-row justify-center gap-8">
          <TeamMember />
          <TeamMember />
          <TeamMember />
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-8">
          <TeamMember />
          <TeamMember />
        </div>
      </div>
    </motion.div>
  );
};

export default MeetOurTeam;
