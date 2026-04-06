import React from "react";

const FixedLinks = () => {
  return (
    <div className="md:block hidden">
      <div className="fixed bottom-0 left-12 flex flex-col justify-between items-center gap-5">
        <ul className="flex flex-col justify-between items-center gap-5">
          <li>
            <a href="https://www.linkedin.com/feed/">
              <i className="fa-brands fa-linkedin-in hover:scale-115 text-[hsl(0,0%,90%)] hover:text-[hsl(0,0%,100%)] text-xl"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-brands fa-x-twitter hover:scale-115 text-[hsl(0,0%,90%)] hover:text-[hsl(0,0%,100%)] text-xl"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-brands fa-snapchat hover:scale-115 text-[hsl(0,0%,90%)] hover:text-[hsl(0,0%,910%) ] text-xl"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-brands fa-github hover:scale-115 text-[hsl(0,0%,90%)] hover:text-[hsl(0,0%,910%) ] text-xl"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-brands fa-instagram hover:scale-115 text-[hsl(0,0%,90%)] hover:text-[hsl(0,0%,100%)] text-xl"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-brands fa-youtube hover:scale-115 text-[hsl(0,0%,90%)] hover:text-[hsl(0,0%,100%)] text-xl"></i>
            </a>
          </li>
        </ul>
        <div className="h-[15vh] w-[1px] bg-[hsl(0,0%,90%)]" />
      </div>
      <div className="fixed bottom-0 right-12 flex flex-col gap-60 justify-between items-center">
        <div className="rotate-90 w-[30px]">
          <a
            href="mailto:anant.connect23@gmail.com"
            className="hover:scale-115 text-[hsl(0,0%,90%)] hover:text-[hsl(0,0%,100%)] text-sm tracking-widest font-nav"
          >
            anant.connect23@gmail.com
          </a>
        </div>
        <div className="h-[15vh] w-[1px] bg-[hsl(0,0%,90%)]" />
      </div>
    </div>
  );
};

export default FixedLinks;
