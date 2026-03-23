import React from "react";
import { counterItems } from "../constants/index.js";

export const AnimatedCounter = () => {
  return (
    <section id="counter" className="py-20 bg-black text-white">
      
      <div className="w-full h-full md:px-10 px-5">

        <div className="grid md:grid-cols-4 gap-6">

          {counterItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg 
              border border-white/10 rounded-2xl p-8 text-center shadow-lg 
              transition duration-300 hover:scale-105 hover:border-blue-400/50"
            >
              
              {/* Number */}
              <h3
                className="text-4xl md:text-5xl font-bold text-white mb-2 
                transition duration-300 
                group-hover:text-blue-400 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"
              >
                {item.value}
                {item.suffix}
              </h3>

              {/* Label */}
              <p
                className="text-gray-400 text-sm md:text-base 
                transition duration-300 group-hover:text-blue-300"
              >
                {item.label}
              </p>

              {/* Glow Effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 
                group-hover:opacity-100 transition duration-300 
                bg-blue-500/10 blur-xl"
              ></div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
