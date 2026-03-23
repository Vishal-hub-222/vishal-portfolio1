import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.1 * (index + 1),
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.7 }
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="py-24 bg-black text-white">
      
      {/* SAME SPACING */}
      <div className="w-full h-full md:px-10 px-5">


        {/* 🔥 NEW LAYOUT */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* BIG LEFT PROJECT */}
          <div
            ref={project1Ref}
            className="group md:col-span-2 row-span-2 bg-white/5 backdrop-blur-lg 
            border border-white/10 rounded-2xl overflow-hidden shadow-lg 
            transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="w-full h-[400px] overflow-hidden">
              <img
                src="/images/first-project-0.1.jpeg"
                alt="Quickzo"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-400 transition">
                🛒 Quickzo – MERN E-Commerce
              </h3>

              <p className="text-gray-400 mb-4 leading-relaxed">
                Full-stack e-commerce platform with authentication, product
                management, and admin dashboard using MERN stack.
              </p>

              <a
                href="https://quickzo-11-hash.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 border border-blue-400 text-blue-400 
                rounded-lg hover:bg-blue-500 hover:text-white transition"
              >
                Live Demo →
              </a>
            </div>
          </div>

          {/* RIGHT TOP PROJECT */}
          <div
            ref={project2Ref}
            className="group bg-white/5 backdrop-blur-lg border border-white/10 
            rounded-2xl overflow-hidden shadow-lg transition duration-300 
            hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="w-full h-48 overflow-hidden">
              <img
                src="/images/bnb.png"
                alt="Airbnb Clone"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition">
                🏡 Airbnb Clone
              </h3>

              <a
                href="https://air-bnb-hvvt.onrender.com/listings"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 text-sm hover:underline"
              >
                Live Demo →
              </a>
            </div>
          </div>

          {/* RIGHT BOTTOM PROJECT */}
          <div
            ref={project3Ref}
            className="group bg-white/5 backdrop-blur-lg border border-white/10 
            rounded-2xl overflow-hidden shadow-lg transition duration-300 
            hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="w-full h-48 overflow-hidden">
              <img
                src="/images/weather.png"
                alt="Weather App"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition">
                🌦️ WeatherNow
              </h3>

              <p className="text-gray-400 text-sm">
                Real-time weather forecast app.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
