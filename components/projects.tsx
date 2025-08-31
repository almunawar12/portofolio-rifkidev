"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample projects (since no specific projects were mentioned in the CV)
const projects = [
  {
    title: "Electricity Usage Monitoring System",
    description:
      "A web-based system for monitoring electricity usage in real-time with analytics and reporting features.",
    image: "https://picsum.photos/500/300?random=1",
    technologies: ["React", "Node.js"],
    github: "https://github.com/almunawar12/smart-meter-cam",
    demo: "#",
  },
  {
    title: "Herbal Store",
    description:
      "E-commerce platform for selling herbal medicines with order processing management.",
    image: "https://picsum.photos/500/300?random=2",
    technologies: ["laravel", "mysql", "tailwin css"],
    github: "https://github.com/almunawar12/herbal-store",
    demo: "#",
  },
  {
    title: "Retail Inventory System",
    description:
      "A microservices-based inventory management system for retail applications with real-time updates.",
    image: "https://picsum.photos/500/300?random=3",
    technologies: ["NestJS", "Next.js", "PostgreSQL", "Docker"],
    github: "https://github.com/almunawar12/nab-dashboard",
    demo: "#",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured <span className="text-emerald-600">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-emerald-600/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <Github size={20} className="text-emerald-600" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <ExternalLink size={20} className="text-emerald-600" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
              <a
                href="https://github.com/mrifkialmunawar"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All Projects
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
