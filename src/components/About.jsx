import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const technologies = [
    "TypeScript",
    "React",
    "Node.js",
    "Express.js",
    "Next.js",
    "TailwindCSS",
    "MongoDB",
    "PostgreSQL",
    "Git & GitHub",
  ];

  return (
    <div className="mt-40">
      <h2 className="px-5 py-2 w-full font-main-semibold md:text-8xl text-7xl rounded-lg bg-gradient-to-r from-[hsl(0,0%,80%)] to-[hsl(0,0%,100%)] bg-clip-text text-transparent">
        About
      </h2>

      <div className="xl:grid grid-cols-4 grid-rows-3 gap-5 md:mx-15">
        <div className="col-span-2 row-span-2 col-start-1 row-start-1 border-b p-5 font-body text-[18px] bg-[#2a2a2a50] text-[#ffffff] shadow-2xl leading-relaxed">
          <p>
            Hello! My name is Anant and I love building things for the digital
            world. My passion for web development kicked off in 2022 when I
            started playing around with HTML — turns out customizing a website
            layout taught me a ton about HTML, CSS, and a bit of JavaScript!
          </p>
          <br />
          <p>
            Looking back, I&apos;ve been lucky to dive into projects at a tech
            startup, a global enterprise, and collaborating with a wide range of
            clients. Right now, I&apos;m all about designing inclusive,
            approachable digital tools and experiences.
          </p>
        </div>

        <div className="col-span-1 row-span-3 col-start-3 row-start-1 border-b p-5 font-body text-[18px] bg-[#2a2a2a50] text-[#ffffff] shadow-2xl leading-relaxed mt-3 xl:mt-0">
          <p>
            Here are some tools and tech I&apos;ve been using in my recent work:
          </p>
          <ul className="mt-5 flex flex-col gap-5">
            {technologies.map((tech, techIndex) => {
              return (
                <li key={techIndex} className="font-body-semibold">
                  <span>➤&nbsp;&nbsp;</span>
                  {tech}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="col-span-2 row-span-1 col-start-1 row-start-3 border-b p-5 font-body text-[18px] bg-[#2a2a2a50] text-[#ffffff] shadow-2xl leading-relaxed mt-3 xl:mt-0">
          <h3>Education:</h3>
          <h4>Graduation:</h4>
          <p>IIIT Delhi - Computer Science and Economics</p>
          <h4>High School:</h4>
          <p>APS Dhaula Kuan</p>
        </div>

        <div className="col-span-1 row-span-2 col-start-4 row-start-2 flex flex-col gap-3 bg-[#2a2a2a50] shadow-2xl border-b border-[#ffffff] p-5 font-body text-[18px] mt-3 xl:mt-0">
          <div className="text-[#ffffff] leading-relaxed">
            I volunteer my skills to non-profits, crafting impactful digital
            solutions to support their mission-driven work.
          </div>

          <motion.button
            className=" rounded-lg px-8 py-2 font-nav bg-[#2a2a2a] border text-[#ffffff] cursor-pointer"
            initial={{ x: 0, y: 0, boxShadow: "0px 0px 0px 0px #ffffff" }}
            animate={{ x: 0, y: 0, boxShadow: "0px 0px 0px 0px #ffffff" }}
            whileHover={{
              x: 8,
              y: -8,
              backgroundColor: "#2a2a2a",
              boxShadow: "-8px 8px 0px 0px #ffffff",
            }}
            whileTap={{ x: 0, y: 0 }}
            transition={{ stiffness: 300 }}
          >
            Explore my Projects&nbsp;
            <i className="fa-solid fa-link"></i>
          </motion.button>

          <motion.button
            className="rounded-lg px-8 py-2 font-nav bg-[#2a2a2a] border text-[#ffffff] cursor-pointer"
            initial={{ x: 0, y: 0, boxShadow: "0px 0px 0px 0px #ffffff" }}
            animate={{ x: 0, y: 0, boxShadow: "0px 0px 0px 0px #ffffff" }}
            whileHover={{
              x: 8,
              y: -8,
              backgroundColor: "#2a2a2a",
              boxShadow: "-8px 8px 0px 0px #ffffff",
            }}
            whileTap={{ x: 0, y: 0 }}
            transition={{ stiffness: 300 }}
          >
            Reach Out to Partner&nbsp;
            <i className="fa-solid fa-link"></i>
          </motion.button>
        </div>

        <div
          className="col-span-1 row-span-1 col-start-4 row-start-1 w-67 h-67 m-auto xl:w-auto xl:h-auto xl:m-0 p-5 bg-cover bg-center mt-3 shadow-2xl hover:scale-105 hover:grayscale-0 grayscale"
          style={{ backgroundImage: "url(/headshot.jpeg)" }}
        ></div>
      </div>
    </div>
  );
};

export default About;
