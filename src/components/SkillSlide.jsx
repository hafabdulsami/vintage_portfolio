import React from "react";
import { motion } from "framer-motion";

export const SkillSlide = ({ skill, index }) => {
  return (
    <section className="relative min-h-screen mt-36 md:mt-0 flex items-center justify-center px-4 md:px-6 pt-20 md:pt-32">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl mb-4 md:mb-6 inline-block"
          >
            {skill.icon}
          </motion.div>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-vintage-cream mb-3 md:mb-4 font-display">
            {skill.category}
          </h2>
          <p className="text-primary font-display text-base md:text-lg">
            Category {index + 1} / 4
          </p>
        </motion.div>

        {/* Skills Grid with Stagger Animation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto">
          {skill.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              whileHover={{
                scale: 1.15,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 },
              }}
              className="relative group"
            >
              <div className="bg-[#3a3028] border-2 border-primary/50 rounded-xl md:rounded-2xl p-4 md:p-6 text-center hover:border-primary hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 cursor-pointer">
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-vintage-orange/0 group-hover:from-primary/10 group-hover:to-vintage-orange/10 rounded-xl md:rounded-2xl transition-all duration-300" />

                <div className="relative z-10">
                  <div className="text-2xl md:text-3xl mb-2 md:mb-3">
                    {i % 4 === 0
                      ? "⚡"
                      : i % 4 === 1
                        ? "🎯"
                        : i % 4 === 2
                          ? "🚀"
                          : "✨"}
                  </div>
                  <p className="text-vintage-cream font-bold font-display text-sm md:text-lg mb-2">
                    {item}
                  </p>
                  <div className="h-1 bg-[#2a2520] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${85 + Math.random() * 15}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 + 0.3 }}
                      className="h-full bg-gradient-to-r from-primary to-vintage-orange"
                    />
                  </div>
                </div>
              </div>

              {/* Decorative corner elements */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-2 -right-2 w-4 h-4 border-2 border-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>

        {/* Decorative vintage frame */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          className="absolute inset-0 border-4 border-primary/20 rounded-3xl pointer-events-none"
          style={{
            boxShadow: "inset 0 0 100px rgba(212, 165, 116, 0.1)",
          }}
        />
      </div>
    </section>
  );
};
