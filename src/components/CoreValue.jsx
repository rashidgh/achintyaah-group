import React, { useState } from 'react';
import { features } from "../data/footerData";
import { ChevronDown } from 'lucide-react';


const CoreValue = ({ theme }) => {
  const isDay = theme !== "night";

  const [showAll, setShowAll] = useState(false);
  const [expandedCards, setExpandedCards] = useState({});

  const getShortText = (text, words = 20) => {
    const arr = text.split(" ");
    return arr.length > words
      ? arr.slice(0, words).join(" ") + "..."
      : text;
  };
  return (
    <div>
      {/* CORE VALUES */}
      <div className="pb-28">
        <h2 className="text-center text-3xl font-bold mb-20">
          Our{" "}
          <span className={isDay ? "text-indigo-600" : "text-indigo-400"}>
            Core Values
          </span>
        </h2>

        <div className="w-full px-6 lg:px-24 grid grid-cols-1 gap-14">
          {(showAll ? features : features.slice(0, 3)).map((item, index) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className={`rounded-3xl 
p-6 md:p-10 lg:p-12 
flex flex-col md:flex-row 
gap-6 md:gap-10
transition-all duration-300
${isDay
                  ? "bg-white shadow-md md:shadow-xl hover:shadow-2xl"
                  : "bg-white/5 border border-white/10 hover:border-indigo-400/40"
                }`}

            >
              {/* ICON */}
              <div className="shrink-0">
                <div
                  className="
      w-12 h-12 
      md:w-18 md:h-18
      rounded-xl md:rounded-2xl
      bg-indigo-100 
      flex items-center justify-center 
      text-indigo-600
    "
                >
                  <item.icon size={22} className="md:w-8 md:h-8" />
                </div>
              </div>



              {/* CONTENT */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p
                  className={`${isDay ? "text-slate-700" : "text-slate-300"} text-base leading-relaxed`}
                >
                  {/* Mobile */}
                  <span className="block md:hidden">
                    {expandedCards[index]
                      ? item.text
                      : getShortText(item.text, 20)}
                  </span>

                  {/* Desktop */}
                  <span className="hidden md:block">
                    {item.text}
                  </span>
                </p>

                {/* See More / Less – Mobile Only */}
                {item.text.split(" ").length > 40 && (
                  <button
                    onClick={() =>
                      setExpandedCards((prev) => ({
                        ...prev,
                        [index]: !prev[index],
                      }))
                    }
                    className="
      mt-3 md:hidden 
      inline-flex items-center gap-1.5
      text-indigo-600 font-semibold text-sm
      transition-all duration-300
      hover:text-indigo-700
    "
                  >
                    <span>
                      {expandedCards[index] ? "See less" : "See more"}
                    </span>

                    <span
                      className={`
        transition-transform duration-300
        ${expandedCards[index] ? "rotate-180" : ""}
      `}
                    >
                      <ChevronDown size={16} />
                    </span>
                  </button>
                )}

              </div>

            </div>
          ))}
        </div>

        {/* SEE MORE BUTTON */}
        <div className="flex justify-end mt-20 mr-20 ">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className={`
      group inline-flex items-center gap-3
      px-9 py-3.5 rounded-full
      text-sm font-semibold tracking-wide
      transition-all duration-300
      hover:-translate-y-0.5 hover:shadow-xl cursor-pointer
      ${isDay
                ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-500/30"
                : "bg-indigo-500 text-white hover:bg-indigo-600 shadow-indigo-400/20"
              }
    `}
          >
            <span>
              {showAll ? "Show Less" : "See More Values"}
            </span>

            <span
              className={`
        transition-transform duration-300
        ${showAll ? "rotate-180" : ""}
      `}
            >
              <ChevronDown size={18} />
            </span>
          </button>
        </div>

      </div>
    </div>
  )
}

export default CoreValue
