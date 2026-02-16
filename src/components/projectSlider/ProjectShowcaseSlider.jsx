import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

const ProjectShowcaseSlider = ({ title, images, content, theme = "day" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const isDay = theme !== "night";

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemsToShow = isMobile ? 1 : 2;
  const maxIndex = images.length - itemsToShow;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="w-full py-12 md:py-16 px-4 md:px-8 max-w-[1440px] mx-auto">
      {/* Header Section - Now Full Width */}
      <div className="w-full mb-10">
        <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 ${
          isDay ? "text-slate-900" : "text-white"
        }`}>
          {title}
        </h2>
        <div className={`h-1 w-16 rounded-full bg-blue-600 mb-6`}></div>
        
        {/* Content - Full Width with refined line-height */}
        <div className={`w-full text-base md:text-lg leading-relaxed mb-10 ${
          isDay ? "text-slate-600" : "text-slate-300"
        }`}>
          {content}
        </div>
      </div>

      {/* Slider Container */}
      <div className="relative group w-full">
        {/* Navigation Overlays (Hidden on mobile, visible on hover for desktop) */}
        {!isMobile && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-600 hover:text-white"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-600 hover:text-white"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
          >
            {images.map((img, index) => (
              <div
                key={index}
                className={`${isMobile ? "w-full" : "w-1/2"} flex-shrink-0 px-2`}
              >
                <div
                  className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group/card border border-slate-200/50"
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img}
                    alt={`Project ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover/card:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <Maximize2 className="text-white opacity-0 group-hover/card:opacity-100 translate-y-2 group-hover/card:translate-y-0 transition-all duration-300" size={32} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Minimal Progress Bar */}
        <div className="flex justify-start mt-6 gap-2">
          {images.slice(0, images.length - (itemsToShow - 1)).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1 transition-all duration-500 rounded-full ${
                currentIndex === idx ? "w-12 bg-blue-600" : "w-6 bg-slate-200 hover:bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-slate-950/98 backdrop-blur-md flex items-center justify-center z-[999] p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Full Preview"
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectShowcaseSlider;