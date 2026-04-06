import React from "react";

const Socials = () => {
  return (
    <div className="mt-40 mb-40">
      <h2 className="px-5 py-2 w-full font-main-semibold md:text-8xl text-7xl rounded-lg bg-gradient-to-r from-[#9B72CF] to-[#C8B1E4] bg-clip-text text-transparent">
        Socials
      </h2>
      <div className="grid grid-cols-6 grid-rows-3 gap-5 mt-5 md:m-45 md:mt-5">
        {/* <!-- LinkedIn - Professional blue gradient --> */}
        <div
          className="col-span-3 row-span-1 col-start-1 row-start-1 rounded-xl h-25 flex justify-center items-center
                  bg-gradient-to-r from-[#0A66C2] to-[#00A0DC] 
                  shadow-lg hover:shadow-[0_10px_20px_rgba(10,102,194,0.4)]
                  transition-all duration-300 hover:scale-[1.05] cursor-pointer"
        >
          <a
            href="https://www.linkedin.com/"
            className="w-full h-full flex justify-center items-center"
          >
            <i className="fa-brands fa-linkedin-in text-5xl text-white"></i>
          </a>
        </div>

        {/* <!-- X/Twitter - Dark modern gradient --> */}
        <div
          className="col-span-3 row-span-1 col-start-4 row-start-1 rounded-xl h-25 flex justify-center items-center
                  bg-gradient-to-br from-black via-[#0F1419] to-[#1C2938]
                  shadow-lg hover:shadow-[0_10px_20px_rgba(21,32,43,0.6)]
                  transition-all duration-300 hover:scale-[1.05] cursor-pointer"
        >
          <a
            href="https://www.x.com/"
            className="w-full h-full flex justify-center items-center"
          >
            <i className="fa-brands fa-x-twitter text-5xl text-white"></i>
          </a>
        </div>

        {/* <!-- Snapchat - Vibrant yellow with subtle gradient --> */}
        <div
          className="col-span-2 row-span-1 col-start-5 row-start-2 rounded-xl h-25 flex justify-center items-center
                  bg-gradient-to-br from-[#FFFC00] to-[#FFEB3B]
                  shadow-lg hover:shadow-[0_10px_20px_rgba(255,252,0,0.3)]
                  transition-all duration-300 hover:scale-[1.05] cursor-pointer"
        >
          <a
            href="https://www.snapchat.com/"
            className="w-full h-full flex justify-center items-center"
          >
            <i className="fa-brands fa-snapchat text-4xl md:text-5xl text-black"></i>
          </a>
        </div>

        {/* <!-- GitHub - Sophisticated dark gradient --> */}
        <div
          className="col-span-4 row-span-1 col-start-1 row-start-2 rounded-xl h-25 flex justify-center items-center
                  bg-gradient-to-r from-[#2B3137] via-[#161B22] to-[#0D1117]
                  shadow-lg hover:shadow-[0_10px_20px_rgba(27,31,35,0.5)]
                  transition-all duration-300 hover:scale-[1.05] cursor-pointer"
        >
          <a
            href="https://www.github.com/"
            className="w-full h-full flex justify-center items-center"
          >
            <i className="fa-brands fa-github text-5xl text-white"></i>
          </a>
        </div>

        {/* <!-- Instagram - Vibrant gradient with purple-pink tones --> */}
        <div
          className="col-span-2 row-span-1 col-start-1 row-start-3 rounded-xl h-25 flex justify-center items-center
                  bg-gradient-to-br from-[#405DE6] via-[#833AB4] to-[#E1306C] 
                  shadow-lg hover:shadow-[0_10px_20px_rgba(131,58,180,0.4)]
                  transition-all duration-300 hover:scale-[1.05] cursor-pointer"
        >
          <a
            href="https://www.instagram.com/"
            className="w-full h-full flex justify-center items-center"
          >
            <i className="fa-brands fa-instagram text-5xl text-white"></i>
          </a>
        </div>

        {/* <!-- YouTube - Bold red gradient --> */}
        <div
          className="col-span-4 row-span-1 col-start-3 row-start-3 rounded-xl h-25 flex justify-center items-center
                  bg-gradient-to-r from-[#FF0000] to-[#E62117]
                  shadow-lg hover:shadow-[0_10px_20px_rgba(230,33,23,0.4)]
                  transition-all duration-300 hover:scale-[1.05] cursor-pointer"
        >
          <a
            href="https://www.youtube.com/"
            className="w-full h-full flex justify-center items-center"
          >
            <i className="fa-brands fa-youtube text-5xl text-white"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Socials;
