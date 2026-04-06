import React, { useEffect, useState } from "react";

const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const companies = [
    {
      role: "Full Stack Developer",
      company: "ByteForge",
      duration: "Jan 2024 - Present",
      bullets: [
        "Developed and maintained full-stack features for a SaaS product using Next.js, Node.js, and MongoDB.",
        "Engineered a dynamic form builder, reducing client onboarding time by 45%.",
        "Integrated Stripe for subscription billing and webhook-based transaction tracking.",
        "Led code review sessions and CI/CD automation via GitHub Actions.",
      ],
    },
    {
      role: "Web Developer Intern",
      company: "CodeCraft",
      duration: "Jul 2023 - Dec 2023",
      bullets: [
        "Built and deployed reusable React components using TailwindCSS for a health analytics dashboard.",
        "Created RESTful APIs with Express.js and PostgreSQL, improving data fetch efficiency by 30%.",
        "Wrote unit tests with Jest, increasing test coverage from 40% to 85%.",
        "Collaborated in 2-week agile sprints with cross-functional teams.",
      ],
    },
    {
      role: "Freelance Full Stack Developer",
      company: "Upwork",
      duration: "2022 - Present",
      bullets: [
        "Delivered 10+ responsive web apps for small businesses using React, Next.js, Firebase, and Supabase.",
        "Integrated external APIs (OpenWeather, Google Maps) to enrich client apps.",
        "Built admin dashboards and client portals with authentication and role-based access control.",
        "Designed pixel-perfect UIs from Figma and converted them into mobile-first layouts.",
      ],
    },
    {
      role: "Backend Developer",
      company: "Contract",
      duration: "Apr 2023 - May 2023",
      bullets: [
        "Created the backend for a volunteer coordination app using Node.js, MongoDB, and JWT auth.",
        "Designed and normalized the database schema to support multi-level user roles.",
        "Reduced API latency by optimizing aggregation pipelines.",
        "Deployed using Render and Postman for API documentation.",
      ],
    },
  ];

  const stats = [
    { label: "Years of Experience", value: "3+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Hours Coded", value: "2500+" },
    { label: "Clients Served", value: "10+" },
  ];

  return (
    <div className="mt-40 mb-40">
      <h2 className="px-5 py-2 xl:mb-3 w-full font-main-semibold md:text-8xl sm:text-7xl text-6xl rounded-lg bg-gradient-to-r from-[#9B72CF] to-[#C8B1E4] bg-clip-text text-transparent">
        Experience
      </h2>
      <div className="xl:grid grid-cols-3 grid-rows-2 md:mx-20 ">
        {/* Company list */}
        <div className="col-span-1 row-span-2 row-start-1 col-start-1 p-4">
          <ul className="flex xl:flex-col gap-4 overflow-scroll scrollbar">
            <li
              className={`cursor-pointer ${
                selectedCompany === null
                  ? "border-b text-[#F4EFFA] p-1"
                  : "p-1 text-[#ffffff60] hover:text-[#F4EFFA]"
              }`}
              onClick={() => setSelectedCompany(null)}
            >
              Overview
            </li>
            {companies.map((job, i) => {
              return (
                <li
                  key={i}
                  className={`cursor-pointer font-body ${
                    selectedCompany?.company === job.company
                      ? "xl:border-l xl:border-b-0 border-b xl:pl-4 p-1 text-[#F4EFFA]"
                      : "xl:pl-4 p-1 text-[#ffffff60] hover:text-[#F4EFFA]"
                  }`}
                  onClick={() => setSelectedCompany(job)}
                >
                  {job.company}
                </li>
              );
            })}
          </ul>
        </div>
        {selectedCompany ? (
          <div className="col-span-2 row-span-2 row-start-1 col-start-2 border-b text-[#F4EFFA] w-[90%] m-auto lg:mt-0 bg-[#532B8850] shadow-2xl mt-3 p-5 flex flex-col gap-5">
            <div className="border-b pb-4">
              <h3 className="text-3xl font-main">{selectedCompany.role}</h3>
              <h4 className="text-2xl ">{selectedCompany.company}</h4>
              <h5>
                <i className="fa-solid fa-calendar" />
                &nbsp;
                {selectedCompany.duration}
              </h5>
            </div>
            <ul className="flex flex-col justify-around gap-5">
              {selectedCompany?.bullets.map((bullet, i) => {
                return (
                  <li key={i} className="font-body text-[18px]">
                    <span className="text-lg">➤&nbsp;&nbsp;</span>
                    {bullet}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <>
            <div className="flex flex-col justify-center items-center gap-5 col-span-1 row-span-1 row-start-1 col-start-2 border-b text-[#F4EFFA] w-[90%] aspect-square h-[90%] m-auto lg:mt-0 bg-[#532B8850] shadow-2xl mt-3">
              <div className="text-7xl font-main">{stats[0].value}</div>
              <div className="text-2xl font-body">{stats[0].label}</div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 col-span-1 row-span-1 row-start-2 col-start-2 border-b text-[#F4EFFA] w-[90%] aspect-square h-[90%] m-auto lg:mt-0 bg-[#532B8850] shadow-2xl mt-3">
              <div className="text-7xl font-main">{stats[1].value}</div>
              <div className="text-2xl font-body">{stats[1].label}</div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 col-span-1 row-span-1 row-start-1 col-start-3 border-b text-[#F4EFFA] w-[90%] aspect-square h-[90%] m-auto lg:mt-0 bg-[#532B8850] shadow-2xl mt-3">
              <div className="text-7xl font-main">{stats[2].value}</div>
              <div className="text-2xl font-body">{stats[2].label}</div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 col-span-1 row-span-1 row-start-2 col-start-3 border-b text-[#F4EFFA] w-[90%] aspect-square h-[90%] m-auto lg:mt-0 bg-[#532B8850] shadow-2xl mt-3">
              <div className="text-7xl font-main">{stats[3].value}</div>
              <div className="text-2xl font-body">{stats[3].label}</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Experience;
