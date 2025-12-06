"use client";

import { motion } from "framer-motion";

interface DetailProps {
  title: string;
  description: string;
  index: number;
}

export default function ServiceDetailCard({
  title,
  description,
  index,
}: DetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-md p-8 flex gap-5 items-start hover:shadow-xl transition cursor-default"
    >
      <div className="shrink-0 w-12 h-12 rounded-lg bg-red-100 text-red-600 flex items-center justify-center text-2xl font-bold">
        {index + 1}
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
