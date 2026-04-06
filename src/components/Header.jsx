import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const nav = ["Home", "About", "Experience", "Projects", "Contact", "Socials"];

  return (
    <header className="fixed w-screen">
      <div className={`flex justify-between items-center gap-4 h-16 text-lg font-semibold md:px-10 px-5 text-[#ffffff] backdrop-blur-sm ${openMenu ? 'bg-[#1a1a1a]' : 'bg-[#1a1a1a70]'}`}>
        <a href="https://anantpanwar.com/">
          <img src="logo.png" alt="logo" className="h-10 border rounded-full" />
        </a>
        <nav>
          <ul className="md:flex justify-between md:gap-7 hidden">
            {nav.map((item, index) => (
              <li key={index}>
                <a className="cursor-pointer hover:underline font-nav">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="border border-[#ffffff] rounded-lg px-4 py-1 cursor-pointer hover:border-[#532B88] hover:text-[#532B88] hover:bg-[#ffffff] hidden md:block font-nav">
          Resume
        </a>

        <motion.button
          onClick={() => setOpenMenu(!openMenu)}
          className="md:hidden mt-2 text-2xl cursor-pointer relative w-8 h-8"
        >
          {/* Bars icon */}
          <motion.i
            className="fa-solid fa-bars absolute top-0 left-0"
            animate={{ opacity: openMenu ? 0 : 1, scale: openMenu ? 0.5 : 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Xmark icon */}
          <motion.i
            className="fa-solid fa-xmark absolute top-0 left-0"
            animate={{ opacity: openMenu ? 1 : 0, scale: openMenu ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>
      
      <ul
        className={`
    fixed z-20 md:hidden mt-16 right-0 top-0 h-full w-80 
    bg-[#1a1a1a] text-[#ffffff] p-10 text-3xl 
    flex flex-col justify-around py-23 transform transition-transform duration-600 ease-in-out
    ${openMenu ? "translate-x-0" : "translate-x-full"}
  `}
      >
        {nav.map((item, index) => (
          <li key={index}>
            <a className="cursor-pointer hover:underline font-nav">{item}</a>
          </li>
        ))}
        <a className="border border-[#ffffff] rounded-lg px-4 py-1 cursor-pointer text-center hover:border-[#532B88] hover:text-[#532B88] hover:bg-[hsl(0,0%,100%)] font-nav">
          Resume
        </a>
      </ul>
      {openMenu && (
        <button
          onClick={() => setOpenMenu(false)}
          className="h-screen w-screen z-10 md:hidden fixed backdrop-blur-md bg-white/10"
        />
      )}
    </header>
  );
};

export default Header;
