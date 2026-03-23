import React from "react";
import { AnimatedCounter } from "../components/AnimatedCounter";
const About = () => {
  return (
    <section id="About" className="py-20 bg-black text-white">
      <div className="w-full h-full md:px-10 px-5">

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE */}
          <div
            className="group p-6 rounded-2xl border border-white/10 
            transition duration-500 
            hover:border-blue-400 hover:bg-blue-500/10 
            hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]"
          >
            
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Hello! I'm{" "}
              <span className="font-semibold text-white transition duration-300 
              group-hover:text-blue-400">
                Vishu Maurya
              </span>
              , a passionate web developer and a 3rd-year engineering student.
            </p>

            <p className="text-gray-400 mb-4 transition group-hover:text-gray-300">
              I have completed my{" "}
              <span className="text-blue-400 font-medium">
                Full Stack Web Development
              </span>{" "}
              training and built multiple projects using the MERN stack.
            </p>

            <p className="text-gray-400 mb-6 transition group-hover:text-gray-300">
              I enjoy solving problems, writing clean code, and creating modern,
              responsive web applications.
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
        <a
  href="mailto:vishalmaurya2652@gmail.com?subject=Let's Work Together&body=Hi Vishal, I want to connect with you."
  className="px-5 py-2 rounded-full border border-blue-400 text-blue-400 
  hover:bg-blue-500 hover:text-white transition"
>
  Let's Talk
</a>


             <a
  href="/resume.pdf"
  download
  className="px-5 py-2 rounded-full border border-white 
  hover:bg-white hover:text-black transition"
>
  Download Resume
</a>

            </div>
          </div>

          {/* PROFILE */}
          <div className="flex justify-center">
            <div
              className="group relative w-64 h-64 rounded-full overflow-hidden 
              border-4 border-white/20 transition duration-500 
              hover:border-blue-400 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] 
              hover:scale-105"
            >
              {/* Image */}
              <img
                src="/images/vishal.jpeg" // replace with your image
                alt="Profile"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Glow Overlay */}
              <div
                className="absolute inset-0 rounded-full opacity-0 
                group-hover:opacity-100 transition duration-500 
                bg-blue-500/10"
              ></div>
            </div>
          </div>

        </div>
      </div>
      <AnimatedCounter></AnimatedCounter>
    </section>
  );
};

export default About;
