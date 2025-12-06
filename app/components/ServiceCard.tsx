"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Murecho } from "next/font/google";

const murecho = Murecho({ subsets: ["latin"], weight: "100" });
interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  image: string | StaticImageData;
  reverse?: boolean;
}

export default function ServiceCard({
  id,
  title,
  description,
  image,
  reverse = false,
}: ServiceCardProps) {
  return (
    <section id={id} className={`py-10 ${murecho.className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center"
      >
        <div
          className={`relative w-full h-72 md:h-150 rounded-xl overflow-hidden shadow-2xl ${
            reverse ? "md:order-2" : "md:order-1"
          }`}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover scale-105 hover:scale-110 transition-transform duration-700 "
          />
        </div>

        <div className={`${reverse ? "md:order-1" : "md:order-2"}`}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#d6262a]">
            {title}
          </h2>
          <p className="text-gray-950 leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </section>
  );
}
