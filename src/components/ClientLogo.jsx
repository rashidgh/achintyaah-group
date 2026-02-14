import { motion } from "framer-motion";

export default function ClientLogo({ src, alt }) {
  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="w-40 h-40 bg-gray-50 rounded-full flex items-center justify-center shadow-lg"
    >
      <img
        src={src}
        alt={alt}
        className="max-w-[70%] max-h-[70%] object-contain"
      />
    </motion.div>
  );
}
