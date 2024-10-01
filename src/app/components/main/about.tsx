"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AboutMe: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id="about" className="min-h-screen p-4 md:p-8 lg:p-16">
      <motion.div
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeInVariants}
        transition={{ duration: 0.5 }}
      >
        <header className="bg-slate-950 py-8 px-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Zainab Khimji
            </h1>
            <p className="text-xl mt-2 text-white">
              Web Developer & UI/UX Enthusiast
            </p>
          </div>

        </header>

        <div className="p-6 md:p-8 space-y-6 bg-slate-950">
          <motion.section
            className="space-y-4"
            variants={fadeInVariants}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-white">
              Personal Information
            </h2>
            <p className="text-white">Age: 18  Location: Karachi</p>
          </motion.section>

          <motion.section
            className="space-y-4"
            variants={fadeInVariants}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-white">About Me</h2>
            <p className="text-white">
              I Am a passionate web developer with a keen eye for design and a
              love for creating intuitive user experiences. With over 2 years of
              experience in the industry I ve worked on a variety of projects
              ranging from small business websites to large-scale web
              applications.
            </p>
          </motion.section>

          <motion.section
            className="space-y-4"
            variants={fadeInVariants}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-white">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {["React", "JavaScript", "HTML", "CSS", "Node.js", "UI/UX Design"].map(
                (skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </motion.section>

          <motion.section
            className="space-y-4"
            variants={fadeInVariants}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-2xl font-semibold text-white">Hobbies</h2>
            <ul className="list-disc list-inside text-white">
              <li>Coding</li>
              <li>Swimming</li>
              <li>Sports</li>
              <li>Traveling</li>
            </ul>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
