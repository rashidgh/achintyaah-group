import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectsModal from "./ProjectsModal";

export default function ProjectCard({
  icon: Icon,
  title,
  shortDescription,
  project,
  index,
  theme,
}) {

  const [open, setOpen] = useState(false);
  const isDay = theme !== "night";

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: "ease-out",
    });
  }, []);

  return (
    <>
      {/* GROUP WRAPPER – REQUIRED FOR HOVER */}
      <div
        data-aos={window.innerWidth >= 768 ? "zoom-in" : "fade-right"}
        data-aos-delay={index * 150}
        className="group relative  mb-6"
      >
        {/* OUTER GLOW (night only) */}
        {!isDay && (
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-500/30 to-indigo-500/30 opacity-0 group-hover:opacity-100 blur-xl transition duration-300" />
        )}

        {/* CARD */}
        <div
          className={`
            relative z-10 h-full rounded-2xl p-6 overflow-hidden transition-all duration-300
            ${isDay
              ? "bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-indigo-400"
              : "bg-white/5 border border-white/10 backdrop-blur-md hover:border-indigo-400/40 hover:shadow-xl hover:shadow-indigo-500/20"
            }
          `}
        >
          {/* HOVER OVERLAY */}
          <div
            className={`
              pointer-events-none absolute inset-0 transition duration-300 opacity-0 group-hover:opacity-100
              ${isDay
                ? "bg-gradient-to-br from-indigo-50 via-transparent to-sky-50"
                : "bg-gradient-to-br from-sky-500/10 via-transparent to-indigo-500/10"
              }
            `}
          />

          {/* CONTENT */}
          <div className="relative z-10">
            {/* ICON */}
            <div
              className={`
                w-14 h-14 mb-4 rounded-full flex items-center justify-center transition-transform
                ${isDay
                  ? "bg-indigo-100 text-indigo-600 group-hover:scale-110"
                  : "bg-gradient-to-br from-indigo-400 to-sky-400 text-black group-hover:scale-110"
                }
              `}
            >
              <Icon size={26} />
            </div>

            {/* TITLE */}
            <h3
              className={`
                text-xl font-semibold mb-2 transition
                ${isDay
                  ? "text-slate-800 group-hover:text-indigo-600"
                  : "text-white group-hover:text-indigo-300"
                }
              `}
            >
              {title}
            </h3>

            {/* DESCRIPTION */}
            <p
              className={`
                text-sm leading-relaxed transition mb-4
                ${isDay
                  ? "text-slate-600 group-hover:text-slate-700"
                  : "text-white group-hover:text-gray-100"
                }
              `}
            >
              {shortDescription}
            </p>

            {/* OPEN MODAL BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="text-sm font-medium text-indigo-500 hover:text-indigo-600"
            >
              View project details →
            </button>

          </div>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <ProjectsModal
          project={project}
          onClose={() => setOpen(false)}
          theme={theme}
        />
      )}
    </>
  );
}
