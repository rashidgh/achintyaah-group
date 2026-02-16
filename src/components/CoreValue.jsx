import React, { useState } from "react";
import { features } from "../data/footerData";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const CoreValue = ({ theme }) => {
  const isDay = theme !== "night";
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="pb-28">
      {/* HEADING */}
      <h2 className="text-center text-3xl font-bold mb-16">
        Our{" "}
        <span className={isDay ? "text-indigo-600" : "text-indigo-400"}>
          Core Values
        </span>
      </h2>

      {/* ACCORDION */}
      <div className="w-full px-6 lg:px-24 space-y-6">
        {features.map((item, index) => (
          <div
            key={item.title}
            className={`rounded-2xl transition-all duration-300
              ${
                isDay
                  ? "bg-white shadow-md hover:shadow-xl"
                  : "bg-white/5 border border-white/10"
              }
            `}
          >
            {/* HEADER */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex cursor-pointer items-center justify-between p-6 text-left"
            >
              <h3 className="text-lg md:text-xl font-semibold">
                {item.title}
              </h3>

              <div
                className={`transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                {activeIndex === index ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </div>
            </button>

            {/* CONTENT */}
            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden "
                >
                  <div
                    className={`px-6 pb-6 text-base leading-relaxed ${
                      isDay ? "text-slate-700" : "text-slate-300"
                    }`}
                  >
                    {item.text}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValue;
