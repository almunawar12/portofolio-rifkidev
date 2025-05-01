"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Calendar } from "lucide-react";

const certifications = [
  {
    title: "Belajar Dasar-Dasar DevsOps",
    issuer: "Dicoding Indonesia",
    date: "2023",
  },
  {
    title: "Belajar Dasar-Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "2023",
  },
  {
    title: "Belajar Dasar-Dasar Pemrograman Javascript",
    issuer: "Dicoding Indonesia",
    date: "2023",
  },
  {
    title: "International Technology Certification – Database",
    issuer: "Certiport",
    date: "December 2023",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-emerald-600">Certifications</span> &
            Achievements
          </h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex items-start gap-4"
              >
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Award size={24} className="text-emerald-600" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-emerald-600 font-medium">{cert.issuer}</p>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <Calendar size={14} className="mr-1" />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
