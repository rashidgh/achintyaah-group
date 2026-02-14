import { motion } from "framer-motion";
import ClientLogo from "./ClientLogo";
import { clients } from "../data/client";


export default function OurClients({theme}) {
  const isNight = theme === "night";
  return (
    <section className="py-24  overflow-hidden mt-[-24px] ">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`text-center text-3xl font-semibold tracking-widest mb-16 ${isNight ? "text-white" : "text-gray-900"}`}
      >
        <h2 className="text-4xl font-bold mb-4">
          Our <span className="text-indigo-400">Clients</span>
        </h2>
      </motion.h2>

      {/* Slider */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-16 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {[...clients, ...clients].map((client, index) => (
            <ClientLogo
              key={index}
              src={client.src}
              alt={client.name}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
