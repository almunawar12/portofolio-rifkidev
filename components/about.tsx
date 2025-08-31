"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About <span className="text-emerald-600">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                A new informatics engineering graduate who masters several
                programming languages, always follows technological
                developments, especially web programming, and has created
                several web projects which have been uploaded to github.com.
                Open minded and likes to learn new things, looking for a
                position where I can improve my knowledge and skills in web
                technologies.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-emerald-600" />
                  <a
                    href="mailto:rifkialmunawar34@gmail.com"
                    className="text-gray-700 hover:text-emerald-600 transition-colors"
                  >
                    rifkialmunawar34@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-emerald-600" />
                  <a
                    href="tel:+6285797757340"
                    className="text-gray-700 hover:text-emerald-600 transition-colors"
                  >
                    +6285797757340
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-emerald-600" />
                  <span className="text-gray-700">
                    Garut, West Java, Indonesia
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Github size={18} className="text-emerald-600" />
                  <a
                    href="https://github.com/almunawar12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-emerald-600 transition-colors"
                  >
                    github.com/almunawar12
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Linkedin size={18} className="text-emerald-600" />
                  <a
                    href="https://linkedin.com/in/moh-rifki-almunawar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-emerald-600 transition-colors"
                  >
                    linkedin.com/in/moh-rifki-almunawar
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/profile.jpg"
                  width={400}
                  height={400}
                  alt="Moh. Rifki Almunawar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-emerald-600 text-white p-4 rounded-lg shadow-lg">
                <h3 className="font-bold text-xl">Web Developer</h3>
                <p>Full Stack Developer</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
