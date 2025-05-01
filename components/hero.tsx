"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "IT Programmer Officer";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-emerald-900 to-emerald-600 text-white"
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Moh. Rifki Almunawar
          </h1>
          <h2 className="text-xl md:text-3xl mb-8 h-8">
            {typedText}
            <span className="animate-pulse">|</span>
          </h2>

          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10">
            A passionate web developer specializing in modern web technologies
            and creating engaging user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-emerald-700 hover:bg-emerald-100"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <a href="#projects">View My Work</a>
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white">
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
}
