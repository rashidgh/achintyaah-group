import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";

const navItems = [
  { label: "Home", hash: "#home" },
  { label: "Businesses", hash: "#businesses" },
  { label: "About Group", hash: "#about" },
  { label: "Developments", hash: "#projects" },
  { label: "Leadership", hash: "#team" },
  { label: "Contact", hash: "#contact" },
];

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);


  const isNight = theme === "night";

  const handleClick = (hash) => {
    setActive(hash);
    setOpen(false);
    document.querySelector(hash)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const toggleTheme = () => {
    setTheme(isNight ? "day" : "night");
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling down
        setShowNav(false);
      } else {
        // scrolling up
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


  return (
    <nav
      className={`
        fixed top-0 left-0 z-50 w-full
  transition-all duration-500
  ${showNav ? "translate-y-0" : "-translate-y-full"}
        ${isNight
          ? "bg-[#0B0F1A]/90 text-white backdrop-blur-lg"
          : "bg-white/90 text-gray-800 backdrop-blur-md shadow-md"
        }
      `}
    >
      <div className="max-w-full mx-auto px-6 h-16 flex items-center relative">
        {/* Logo */}
        <div
          onClick={() => handleClick("#home")}
          className={`flex items-center gap-2 text-lg font-bold cursor-pointer z-10
            ${isNight ? "text-white" : "text-gray-900"}
          `}
        >
          <img
            className="rounded-full"
            src="/logo.jpeg"
            alt="Achintyaah Group Logo"
            width={36}
          />
          ACHINTYAAH{" "}
          <span className={isNight ? "text-indigo-600" : "text-indigo-600"}>
            GROUP
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <button
              key={item.hash}
              onClick={() => handleClick(item.hash)}
              className={`
                relative text-sm font-medium transition cursor-pointer
                ${active === item.hash
                  ? isNight
                    ? "text-indigo-600"
                    : "text-indigo-600"
                  : isNight
                    ? "text-white hover:text-indigo-300"
                    : "text-gray-800 hover:text-indigo-600"
                }
              `}
            >
              {item.label}

              {active === item.hash && (
                <motion.span
                  layoutId="activeLink"
                  className={`absolute left-0 -bottom-1 w-full h-[2px]
                    ${isNight ? "bg-indigo-600" : "bg-indigo-600"}
                  `}
                />
              )}
            </button>
          ))}
        </div>

        {/* Theme Toggle */}
        <div className="hidden md:flex items-center ml-auto z-10">
          <button
            onClick={toggleTheme}
            className={`
              p-2 rounded-full transition cursor-pointer
              ${isNight
                ? "bg-white/10 hover:bg-white/20"
                : "bg-gray-100 hover:bg-gray-200"
              }
            `}
          >
            {isNight ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`
            md:hidden ml-auto p-2 rounded-full transition
            ${isNight
              ? "bg-white/10 hover:bg-white/20"
              : "bg-gray-100 hover:bg-gray-200"
            }
          `}
          onClick={() => setOpen(true)}
        >
          <Menu size={26} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "110%" }}
              animate={{ x: 0 }}
              exit={{ x: "110%" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className={`
                fixed top-0 right-0 h-screen w-screen z-50
                ${isNight ? "bg-[#0B0F1A] text-white" : "bg-white text-gray-800"}
              `}
            >
              <div className="h-full flex flex-col p-6 overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <button
                    onClick={toggleTheme}
                    className={`p-2 rounded-full 
                      ${isNight
                        ? "bg-white/10 hover:bg-white/20"
                        : "bg-gray-100 hover:bg-gray-200"
                      }
                    `}
                  >
                    {isNight ? <Sun size={18} /> : <Moon size={18} />}
                  </button>

                  <button
                    onClick={() => setOpen(false)}
                    className={`p-2 rounded-full
                      ${isNight
                        ? "bg-white/10 hover:bg-white/20"
                        : "bg-gray-100 hover:bg-gray-200"
                      }
                    `}
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Menu Items */}
                <div className="flex flex-col divide-y">
                  {navItems.map((item) => (
                    <button
                      key={item.hash}
                      onClick={() => handleClick(item.hash)}
                      className={`py-4 px-3 text-left text-lg rounded-xl transition
                        ${active === item.hash
                          ? isNight
                            ? "text-indigo-600 bg-white/5"
                            : "text-indigo-600 bg-gray-100"
                          : isNight
                            ? "hover:bg-white/10"
                            : "hover:bg-gray-200"
                        }
                      `}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
