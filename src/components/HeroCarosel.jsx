import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import AOS from "aos";
import { useEffect } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import AnimatedText from "./AnimatedText";

const slides = [
  {
    title: "Goa Infrastructure Development Project",
    desc: "A large-scale on-ground project focused on modern infrastructure execution, quality standards, and timely delivery in Goa.",
    image: "/src/assets/img/hero_carousel/goa-project-1.png",
  },
  {
    title: "Battery Manufacturing & Energy Systems Project",
    desc: "An industrial project centered on advanced battery production, energy efficiency, and sustainable power solutions.",
    image: "/src/assets/img/hero_carousel/battery-project-1.png",
  },
  {
    title: "Enterprise-Ready Cloud & IT Solutions",
    desc: "Future-proof your infrastructure with scalable, reliable, and cloud-first technologies.",
    image: "/src/assets/img/hero_carousel/office-5.jpeg",
  },
  {
    title: "Ooty Project – Site Development",
    desc: "On-site development work including layout preparation, material handling, and construction execution.",
    image: "/src/assets/img/hero_carousel/ooty-project-3.jpg",
  },
  
  {
    title: "Ooty Project – Field Execution",
    desc: "Field-level execution involving planning, supervision, and phased construction activities.",
    image: "/src/assets/img/hero_carousel/ooty-peoject-1.jpeg",
  },
];

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
                  className="relative z-10 px-2 sm:px-4 text-center break-words max-w-xs sm:max-w-2xl md:max-w-4xl w-full"
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
