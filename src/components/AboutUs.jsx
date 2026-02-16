import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { aboutImages, aboutMoreData } from "../data/about";
import AboutModal from "../components/AboutModal";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";


export default function AboutUs({ theme }) {
  const isDay = theme !== "night";
  const [modalData, setModalData] = useState(null);



  useEffect(() => {
    AOS.init({ once: true, duration: 700, easing: "ease-out-cubic" });
  }, []);

  return (
    <>
      <section
        id="about"
        className={`relative ${isDay
          ? "bg-white text-slate-900"
          : "bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white"
          }`}
      >
        {/* HERO */}
        <div className="text-center pt-20">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            About{" "}
            <span className={isDay ? "text-indigo-600" : "text-indigo-400"}>
              Achintyaah Group
            </span>
          </h1>
        </div>

        {/* WHO WE ARE */}
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            data-aos="zoom-in"
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              loop
              pagination={{ clickable: true }}
              className="w-full h-80"
            >
              {aboutImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt="Achintyaah Group"
                    className="w-full h-[420px] object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>


          <div data-aos="fade-left">
            <h2 className="text-3xl font-bold mb-6">
              Who{" "}
              <span className={isDay ? "text-indigo-600" : "text-indigo-400"}>
                We Are
              </span>
            </h2>

            <p className={`${isDay ? "text-slate-700" : "text-slate-300"} text-[15px] leading-relaxed`}>
              Achintyaah Group is a diversified enterprise operating across
              infrastructure development, industrial execution, strategic
              consulting, and technology-enabled services. Our strength lies in
              combining strong leadership, on-ground execution capability, and
              disciplined operational processes to deliver outcomes that stand
              the test of time.
              <br /><br />
              We focus on long-term value creation by aligning planning,
              engineering, governance, and execution under a single integrated
              framework. Every initiative we undertake reflects our commitment
              to quality, accountability, and sustainable growth across all
              business verticals.
            </p>

            <button
              onClick={() => setModalData(aboutMoreData)}
              className="
    mt-8 inline-flex items-center gap-2
    px-6 py-3 rounded-xl
    bg-indigo-600 text-white
    font-semibold text-sm
    transition-all duration-300
    hover:bg-indigo-700 hover:gap-3
    hover:shadow-lg hover:shadow-indigo-500/30
  "
            >
              <span>Read More</span>

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

          </div>
        </div>




      </section>

      <AboutModal
        data={modalData}
        onClose={() => setModalData(null)}
        theme={theme}
      />
    </>
  );
}
