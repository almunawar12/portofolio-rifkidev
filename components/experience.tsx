"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Tanam Developer",
    period: "August 2024 - Present",
    description: [
      "Create an application for iPhone sales, using Node.js and Next.js",
      "Create a system for inventory for retail app sales, by implementing microservices, built using NestJS and Next.js",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "PT. LSKK",
    location: "Bandung",
    period: "August 2023 - January 2024",
    description: ["Developing a web-based electricity usage monitoring system"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Work <span className="text-emerald-600">Experience</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-emerald-500 pl-8 ml-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="mb-12 relative"
                >
                  <div className="absolute -left-12 top-0 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <Briefcase size={16} className="text-white" />
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-800">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-emerald-600">
                        <Calendar size={16} className="mr-1" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-emerald-600 font-medium mb-4">
                      {exp.company}
                      {exp.location && `, ${exp.location}`}
                    </p>

                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
