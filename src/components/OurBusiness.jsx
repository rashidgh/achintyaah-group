import { motion } from "framer-motion";

import { projects } from "../data/projects";
import ProjectCard from "./OurBusinessCard";



export default function Projects({ theme }) {
  return (
    <section
      id="businesses"
      className={`pb-24 mt-20 px-6 ${theme === "night" ? "text-white" : "text-black"
        }`}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-20"
      >
        <h2 className="text-4xl font-bold mb-4">
          Our <span className="text-indigo-400">Businesses
          </span>
        </h2>
        <p
          className={`${theme === "night" ? "text-gray-400" : "text-slate-600"}`}
        >
          A showcase of our on-ground execution, industrial developments, and
          location-based project work delivered with precision and quality.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            icon={project.icon}
            title={project.title}
            shortDescription={project.shortDescription}
            project={project}
            index={index}
            theme={theme}
          />
        ))}


      </div>
    </section>
  );
}
