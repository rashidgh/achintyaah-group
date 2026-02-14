import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const ProjectShowcaseSlider = ({ title, images, content, theme = "day" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const isDay = theme !== "night";

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemsToShow = isMobile ? 1 : 2;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= images.length - itemsToShow ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - itemsToShow : prev - 1
    );
  };

  return (
    <div className="w-full py-14 md:py-20 overflow-hidden px-4 md:px-0">
      {/* Title */}
      <h2
        className={`text-2xl md:text-4xl font-bold mb-6 md:mb-10 ${
          isDay ? "text-slate-800" : "text-white"
        }`}
      >
        {title}
      </h2>

      {/* Slider */}
      <div className="relative w-full overflow-hidden mb-8 md:mb-10">
        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-blue-600 text-white p-2 md:p-4 rounded-full hover:scale-110 transition"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-blue-600 text-white p-2 md:p-4 rounded-full hover:scale-110 transition"
        >
          <ChevronRight size={20} />
        </button>

        {/* Sliding Images */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${
              currentIndex * (100 / itemsToShow)
            }%)`,
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className={`${
                isMobile ? "w-full" : "w-1/2"
              } flex-shrink-0 px-2 md:px-4`}
            >
              <div
                className="rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt="project"
                  className="w-full h-[250px] md:h-[400px] object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div
        className={`w-full text-sm md:text-base leading-normal ${
          isDay ? "text-gray-600" : "text-gray-300"
        }`}
      >
        {content}
      </div>

      {/* ================= MODAL ================= */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white bg-white/20 p-2 rounded-full hover:bg-white/40 transition"
          >
            <X size={22} />
          </button>

          {/* Image */}
          <div className="max-w-5xl w-full">
            <img
              src={selectedImage}
              alt="preview"
              className="w-full max-h-[85vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectShowcaseSlider;
