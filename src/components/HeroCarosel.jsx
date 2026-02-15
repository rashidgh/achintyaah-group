import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import AOS from "aos";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AnimatedText from "./AnimatedText";
import { slides } from "../data/heroSlides";



export default function HeroCarousel() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out-cubic",
    });
    AOS.refresh();
  }, []);

  return (
    <section id="home" className="w-full pt-17" data-aos="fade-up">
      <div className="relative h-[55vh] sm:h-[65vh] md:h-[85vh] overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative h-full w-full flex items-center justify-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="relative z-10 px-2 sm:px-4 text-center break-normal max-w-xs sm:max-w-2xl md:max-w-4xl "
                >
                  <AnimatedText
                    text={slide.title}
                    className="block text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-4"
                  />
                  <AnimatedText
                    text={slide.desc}
                    className="block text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
                  />
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
