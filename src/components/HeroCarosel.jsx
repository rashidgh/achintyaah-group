import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import AOS from "aos";
import { useEffect, useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AnimatedText from "./AnimatedText";
import { slides } from "../data/heroSlides";

export default function HeroCarousel() {
  const [isPlaying, setIsPlaying] = useState(true);
  const swiperRef = useRef(null);

  useEffect(() => {
    AOS.init({ once: true, duration: 700, easing: "ease-out-cubic" });
    AOS.refresh();
  }, []);

  const toggleAutoplay = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      if (isPlaying) {
        swiperRef.current.autoplay.stop();
      } else {
        swiperRef.current.autoplay.start();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="home" className="w-full pt-17" data-aos="fade-up">
      <style>{`
        /* Turning pagination dots into lines */
        .swiper-pagination-bullet {
          width: 20px !important;
          height: 4px !important;
          border-radius: 2px !important;
          background: white !important;
          opacity: 0.5;
          margin: 0 !important;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          width: 35px !important;
          opacity: 1 !important;
        }

        /* Ensuring pagination container doesn't take full width so the button can sit next to it */
        .swiper-pagination {
          position: static !important; 
          width: auto !important;
          display: flex !important;
          gap: 8px;
        }

        /* Beautiful Arrows CSS */
        .swiper-button-next, .swiper-button-prev {
          color: white !important;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(4px);
          width: 40px !important;
          height: 40px !important;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.2);
        }
        .swiper-button-next::after, .swiper-button-prev::after {
          font-size: 18px !important;
          font-weight: bold;
        }
        @media (max-width: 640px) {
           .swiper-button-next, .swiper-button-prev { display: none !important; }
        }
      `}</style>

      <div className="relative h-[55vh] sm:h-[65vh] md:h-[80vh] w-full overflow-hidden">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ 
            clickable: true,
            el: '.custom-pagination' // We use a custom class to control placement
          }}
          navigation
          loop
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative h-full w-full flex items-center justify-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "100% 100%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 w-full px-6 flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="w-full max-w-lg sm:max-w-2xl md:max-w-4xl mx-auto text-center"
                  >
                    <span className="block text-xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                      {slide.title}
                    </span>
                    <span className="block text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
                      {slide.desc}
                    </span>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CONTROLS WRAPPER: This centers the lines AND the button together */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
          
          {/* Custom Pagination Container (The Lines) */}
          <div className="custom-pagination flex items-center gap-2"></div>

          {/* Vertical Separator */}
          <div className="w-[1px] h-4 bg-white/20"></div>

          {/* Play/Pause Button - Stays to the right of the lines on all devices */}
          <button
            onClick={toggleAutoplay}
            className="text-white hover:text-indigo-400 transition-colors flex items-center justify-center"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} fill="currentColor" />}
          </button>
        </div>
      </div>
    </section>
  );
}