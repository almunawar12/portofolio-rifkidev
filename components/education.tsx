"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Garut Institut of Technology",
    period: "August 2020 - August 2024",
    gpa: "3.58",
  },
  {
    degree: "Software Engineering",
    institution: "SMKS AL GHIFARI BANYURESMI",
    period: "June 2017 - March 2020",
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-emerald-600">Education</span> Background
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-emerald-500 pl-8 ml-4">
              {education.map((edu, index) => (
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
                    <GraduationCap size={16} className="text-white" />
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-800">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center text-emerald-600">
                        <Calendar size={16} className="mr-1" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                    </div>

                    <p className="text-emerald-600 font-medium mb-2">
                      {edu.institution}
                    </p>

                    {edu.gpa && (
                      <p className="text-gray-700">
                        <span className="font-medium">GPA:</span> {edu.gpa}
                      </p>
                    )}
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
