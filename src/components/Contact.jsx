import React, { useState } from "react";
import { motion } from "framer-motion";
import { p } from "framer-motion/client";

const Contact = () => {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    console.log(e);
    e.preventDefault();
    setIsSubmiting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmiting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  }

  return (
    <div className="mt-40 mb-40 text-[#C8B1E4]">
      <h2 className="px-5 py-2 w-full font-main-semibold md:text-8xl text-7xl rounded-lg bg-gradient-to-r from-[#9B72CF] to-[#C8B1E4] bg-clip-text text-transparent">
        Contact
      </h2>

      <div className="flex flex-col justify-center items-center gap-5 lg:w-[50vw] mx-auto mt-5">
        <p className="text-[18px] font-body text-center">
          Whether you have a project idea, a question, or just want to chat, I'm
          all ears. Drop me a message, and I'll get back to you as soon as
          possible!
        </p>
        <p className="text-[20px] font-body-semibold text-[#FFD700]">Let's connect!</p>
      </div>

      <form
        className="flex flex-col gap-10 mt-5 md:w-[40vw] mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          onChange={handleChange}
          id="name"
          name="name"
          type="text"
          value={formData.name}
          required
          className="border-b focus:outline-none"
          placeholder="Name"
        />
        <input
          onChange={handleChange}
          id="email"
          name="email"
          type="email"
          required
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          value={formData.email}
          className="border-b focus:outline-none"
          placeholder="E-mail"
        />
        <input
          onChange={handleChange}
          id="subject"
          name="subject"
          type="text"
          required
          value={formData.subject}
          className="border-b focus:outline-none"
          placeholder="Subject"
        />
        <textarea
          onChange={handleChange}
          id="message"
          name="message"
          type="text"
          required
          rows={5}
          value={formData.message}
          className="resize-none border-b focus:outline-none"
          placeholder="Type your message here..."
        />

          <motion.button
            className={` rounded-lg w-full py-2 font-nav text-[#F4EFFA] cursor-pointer ` + (isSubmiting ? 'bg-[#532B88] hover:bg-[#532B88]' : ' bg-[#532B88] hover:bg-[#532B88]')}
            disabled={isSubmiting}
            initial={{ x: 0, y: 0, boxShadow: "0px 0px 0px 0px #9B72CF" }}
            animate={{ x: 0, y: 0, boxShadow: "0px 0px 0px 0px #9B72CF" }}
            whileHover={{
              x: 5,
              y: -5,
              boxShadow: "-5px 5px 0px 0px #9B72CF",
            }}
            whileTap={{ x: 0, y: 0 }}
            transition={{ stiffness: 300 }}
            type="submit"
          >
            {!isSubmiting ? 'Send ' : 'Sending '}
            <i className="fa-solid fa-share text-sm"></i>
          </motion.button>

      </form>
    </div>
  );
};

export default Contact;
