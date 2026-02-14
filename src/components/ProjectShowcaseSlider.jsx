import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HorizontalProjectSlider = ({ theme }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 320;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const projects = [
    {
      title: "Corporate Office",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    },
    {
      title: "Business Meeting",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    },
    {
      title: "Startup Workspace",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
    {
      title: "IT Team",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
    },
  ];

  return (
    <div className="relative w-full py-16">
      {/* Section Title */}
      <h2 className="text-center text-3xl font-bold mb-10">
        Our{" "}
        <span className={theme === "night" ? "text-indigo-400" : "text-indigo-600"}>
          Featured Projects
        </span>
      </h2>

      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-slate-800 p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        <ChevronLeft />
      </button>

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-10"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="min-w-[300px] bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-slate-800 p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default HorizontalProjectSlider;
