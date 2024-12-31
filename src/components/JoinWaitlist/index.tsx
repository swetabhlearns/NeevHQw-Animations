import { motion } from "framer-motion";

const WaitlistJoin = () => {
  return (
    <motion.div
      className="pt-[80px] md:pt-[160px]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="w-full bg-gradient-to-r from-[#607AFF] from-30% via-[#8DD3FF] via-90% to-[#B4D0FF] to-100% py-16 md:py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="max-w-[800px] mx-auto px-5 text-center">
          <motion.h2
            className="text-2xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Join the Future of Healthcare
          </motion.h2>
          <motion.p
            className="text-sm md:text-lg text-white/90 mb-8 font-dmsans"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Be among the first to experience the next generation of healthcare
            technology
          </motion.p>
          <motion.form
            className="flex flex-col md:flex-row gap-3 justify-center items-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.input
              type="text"
              name="email"
              id="email"
              className="w-full md:w-[400px] px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              placeholder="Enter your email address"
              transition={{ duration: 0.2 }}
            />
            <motion.button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Join Waitlist
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WaitlistJoin;
