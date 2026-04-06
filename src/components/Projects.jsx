import React, { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [projectType, setProjectType] = useState("All");

  const projects = [
    {
      title: "E-Commerce Platform Redesign",
      description:
        "Revamped an online store with a seamless front-end and robust back-end, enhancing user experience and performance.",
      impact:
        "Boosted conversion rates by 20% and scaled to support 10,000+ monthly users.",
      features: [
        "Responsive product catalog",
        "Secure payment processing",
        "User authentication system",
        "Search and filter functionality",
        "Cart and wishlist management",
        "Order tracking API",
      ],
      visuals: "",
      techAndTools: ["React", "Node", "MongoDB", "Stripe"],
      category: "Full-Stack",
    },
    {
      title: "TaskMaster Mobile App",
      description:
        "Designed a responsive front-end for a productivity app, focusing on intuitive task management and user engagement.",
      impact:
        "Gained 5,000 downloads in the first month with a 4.7/5 rating, improving user productivity.",
      features: [
        "Interactive task interface",
        "Calendar UI integration",
        "Custom animations",
        "Dark mode toggle",
        "Responsive layouts",
        "Notification settings",
      ],
      visuals: "",
      techAndTools: ["Flutter", "Dart", "HTML", "CSS"],
      category: "Frontend",
    },
    {
      title: "Inventory Management API",
      description:
        "Developed a secure back-end API for a retail inventory system, enabling efficient stock tracking and updates.",
      impact:
        "Reduced inventory errors by 30% and supported real-time updates for 50+ retail stores.",
      features: [
        "RESTful API endpoints",
        "Database optimization",
        "User role authentication",
        "Data validation",
        "Error handling",
        "Scalable architecture",
      ],
      visuals: "",
      techAndTools: ["Node", "Express", "PostgreSQL", "Docker"],
      category: "Backend",
    },
    {
      title: "Portfolio Website",
      description:
        "Built a personal portfolio website showcasing projects with a dynamic front-end and content management back-end.",
      impact:
        "Increased client inquiries by 25% and provided a scalable platform for showcasing 10+ projects.",
      features: [
        "Dynamic project filtering",
        "Responsive design",
        "Content management system",
        "SEO optimization",
        "Contact form integration",
        "Database-driven project storage",
      ],
      visuals: "",
      techAndTools: ["React", "Express", "MongoDB", "Tailwind"],
      category: "Full-Stack",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  function handleProjectType(event) {
    setProjectType(event.target.value);
  }

  const filteredProjects =
    projectType === "All"
      ? projects
      : projects.filter((project) => project.category === projectType);

  function handleSelectedProject(project) {
    setSelectedProject(project);
  }

  return (
    <div className="mt-40 mb-40">
      <h2 className="px-5 py-2 w-full font-main-semibold md:text-8xl sm:text-7xl text-6xl rounded-lg bg-gradient-to-r from-[hsl(0,0%,80%)] to-[hsl(0,0%,100%)] bg-clip-text text-transparent">
        Projects
      </h2>

      <div className="xl:grid grid-cols-5 grid-rows-[90px_90px_90px_90px_90px] gap-4 mt-5 md:m-15 md:mt-5">
        <div className="col-span-1 row-span-5 col-start-1 row-start-1 rounded-lg p-3 text-[18px] overflow-scroll scrollbar">
          {/* <select
            value={projectType}
            onChange={handleProjectType}
            className="border rounded-md mb-4 px-1 font-body bg-[#2a2a2a] text-[#C8B1E4] hover:bg-[#9B72CF] hover:text-[#C8B1E4] hover:border-[#2a2a2a]"
          >
            <option value="All">All</option>
            <option value="Full-Stack">Full-Stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select> */}
          <ul className="flex flex-col gap-4">
            {filteredProjects.map((project, projectIndex) => {
              return (
                <li key={projectIndex}>
                  <button
                    className={`w-full cursor-pointer text-left px-2 py-1 border-b transition-all ${
                      selectedProject?.title === project.title
                        ? "text-[#ffffff]"
                        : "text-[#ffffff60]"
                    }`}
                    onClick={() => handleSelectedProject(project)}
                  >
                    {project.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="col-span-2 row-span-1 col-start-2 row-start-1 p-4 font-body-bold text-[27px] mt-6 xl:mt-0 flex items-center justify-center text-[#ffffff] bg-[#2a2a2a50] border-b shadow-2xl">
          <span className="text-center whitespace-nowrap overflow-hidden text-ellipsis">
            {selectedProject?.title || "Select a project to view"}
          </span>
        </div>

        <div className=" text-[#C8B1E4] bg-[#2a2a2a50] col-span-1 row-span-1 col-start-5 row-start-1 p-4 font-body text-[18px] mt-3 xl:mt-0 overflow-scroll scrollbar aspect-[16/9] xl:aspect-auto shadow-2xl">
          {selectedProject?.visuals || "Select a project to view visuals"}
        </div>

        <div className=" text-[#ffffff] bg-[#2a2a2a50] shadow-2xl col-span-2 row-span-2 col-start-2 row-start-2 border-b p-4 font-body text-[18px] mt-3 xl:mt-0 overflow-scroll scrollbar">
          <h4 className="text-[#C8B1E4]/50 text-[16px]">Description:</h4>
          <p>
            {selectedProject?.description ||
              "Select a project to view description"}
          </p>
        </div>

        <div className=" text-[#ffffff] bg-[#2a2a2a50] shadow-2xl col-span-2 row-span-2 col-start-2 row-start-4 border-b p-4 font-body text-[18px] mt-3 xl:mt-0 overflow-hidden scrollbar">
          <h4 className="text-[#C8B1E4]/50 text-[16px]">Impact:</h4>
          <p className="font-body-semibold">
            {selectedProject?.impact || "Select a project to view impact"}
          </p>
        </div>

        <div className="col-span-2 text-[#ffffff] bg-[#2a2a2a50] shadow-2xl row-span-3 col-start-4 row-start-2 border-b p-4 font-body text-[18px] mt-3 xl:mt-0 overflow-hidden scrollbar">
          <h4 className="text-[#C8B1E4]/50 text-[16px]">Features:</h4>
          <ul className="flex flex-col justify-around h-full pb-3">
            {selectedProject?.features.map((feature, i) => {
              return (
                <li key={i}>
                  <span className="text-lg">➤&nbsp;</span>
                  {feature}
                </li>
              );
            }) || "Select project to view features"}
          </ul>
        </div>

        <div className="text-[#ffffff] bg-[#2a2a2a50] shadow-2xl col-span-2 row-span-1 col-start-4 row-start-5 border-b p-4 pt-2 font-body  mt-3 xl:mt-0 overflow-hidden scrollbar">
          <h4 className="text-[#C8B1E4]/50 text-[16px]">Technologies:</h4>
          <ul className="flex gap-1 mt-2">
            {selectedProject?.techAndTools.map((tool, i) => {
              return (
                <li
                  key={i}
                  className="border border-[#9B72CF] rounded-lg text-[16px] px-2 py-1 text-[#ffffff]"
                >
                  {tool}
                </li>
              );
            }) || "Select a project to view tech and tools"}
          </ul>
        </div>

        <div className=" text-[#C8B1E4] col-span-1 row-span-1 col-start-4 row-start-1 font-body text-[18px] mt-3 xl:mt-0 scrollbar flex lg:justify-between gap-4 flex-col">
          <a href="https://google.com/">
            <motion.button
              className=" rounded-lg w-full px-2 py-1 font-nav bg-[#2a2a2a] text-[#ffffff] cursor-pointer"
              initial={{ x: 0, y: 0, boxShadow: "0px 0px 0px 0px #9B72CF" }}
              animate={{ x: 0, y: 0, boxShadow: "0px 0px 0px 0px #9B72CF" }}
              whileHover={{
                x: 5,
                y: -5,
                backgroundColor: "#2a2a2a",
                boxShadow: "-5px 5px 0px 0px #9B72CF",
              }}
              whileTap={{ x: 0, y: 0 }}
              transition={{ stiffness: 300 }}
            >
              Demo&nbsp;
              <i className="fa-solid fa-link text-lg"></i>
            </motion.button>
          </a>

          <a href="https://google.com/">
            <motion.button
              className=" rounded-lg w-full px-2 py-1 font-nav bg-[#2a2a2a] text-[#ffffff] cursor-pointer"
              initial={{ x: 0, y: 0, boxShadow: "0px 0px 0px 0px #9B72CF" }}
              animate={{ x: 0, y: 0, boxShadow: "0px 0px 0px 0px #9B72CF" }}
              whileHover={{
                x: 5,
                y: -5,
                backgroundColor: "#2a2a2a",
                boxShadow: "-5px 5px 0px 0px #9B72CF",
              }}
              whileTap={{ x: 0, y: 0 }}
              transition={{ stiffness: 300 }}
            >
              Code&nbsp;
              <i className="fa-brands fa-github"></i>
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
