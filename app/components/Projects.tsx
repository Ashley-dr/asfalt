"use client";

import { projects } from "../data/projects";
import Image from "next/image";
import { Murecho } from "next/font/google";
import { motion } from "framer-motion";

import { useLanguage } from "../context/LanguageContext";

const murecho = Murecho({ subsets: ["latin"], weight: "100" });
export default function ProjectsMasonry() {
  const { lang } = useLanguage();
  return (
    <section
      id="projects"
      className={`${murecho.className} py-10 pb-30 bg-linear-to-b from-gray-100 to-gray-200`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-14 tracking-tight text-[#d6262a]">
          {lang === "EN" ? "Recent Projects" : "Nylige Prosjekter"}
        </h2>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 40 }}
              transition={{ duration: 0.9, ease: "linear" }}
              viewport={{ once: true }}
              className="relative break-inside-avoid rounded-xl overflow-hidden shadow-lg group"
            >
              <a href={p.link} target="_blank">
                <Image
                  src={p.image}
                  alt={lang === "EN" ? p.titleEN : p.titleNO}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div
                  className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 
                flex flex-col justify-end p-6"
                >
                  <p className=" text-xl font-semibold translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-[#d6262a]">
                    {lang === "EN" ? p.titleEN : p.titleNO}
                  </p>

                  <p
                    className="text-gray-200 text-sm mt-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                    dangerouslySetInnerHTML={{
                      __html: lang === "EN" ? p.descriptionEN : p.descriptionNO,
                    }}
                  />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
