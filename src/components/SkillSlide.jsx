import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

// Alternate category label colors
const categoryColors = [
  "text-primary",
  "text-vintage-green",
  "text-vintage-teal",
  "text-vintage-rose",
];

// ASCII symbols to replace emojis in skill cards
const skillSymbols = ["//", ">>", "*", "#"];

export const SkillSlide = ({ skill, index }) => {
  const { t } = useLanguage();
  const categoryColor = categoryColors[index % categoryColors.length];

  return (
    <section className="relative w-full min-h-screen pb-20 md:pb-0 flex items-center justify-center px-4 md:px-6 pt-20 md:pt-32">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-center mb-8 md:mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 150, damping: 25, delay: 0.2 }}
            className={`text-4xl md:text-7xl mb-4 md:mb-6 inline-block font-display font-bold ${categoryColor}`}
          >
            {skill.icon}
          </motion.div>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-vintage-cream mb-3 md:mb-4 font-display">
            {skill.category}
          </h2>
          <p className={`font-display text-base md:text-lg ${categoryColor}`}>
            {t("skill.counter", { n: index + 1 })}
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
                stiffness: 150,
                damping: 25,
              }}
              whileHover={{
                scale: 1.1,
                rotate: [0, -2, 2, 0],
                transition: { duration: 0.4, ease: "easeInOut" },
              }}
              className="relative group"
            >
              <div className="bg-[#3B2F22] border-2 border-primary/50 rounded-lg p-4 md:p-6 text-center hover:border-primary hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 cursor-pointer">
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-vintage-orange/0 group-hover:from-primary/10 group-hover:to-vintage-orange/10 rounded-lg transition-all duration-300" />

                <div className="relative z-10">
                  <div className="text-xl md:text-2xl mb-2 md:mb-3 font-display font-bold text-vintage-teal">
                    {skillSymbols[i % 4]}
                  </div>
                  <p className="text-vintage-cream font-bold font-display text-sm md:text-lg mb-2">
                    {item}
                  </p>
                  <div className="h-1 bg-[#2C2219] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${85 + Math.random() * 15}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.3, delay: i * 0.1 + 0.3 }}
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
                className="absolute -top-2 -right-2 w-4 h-4 border-2 border-vintage-teal rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>

        {/* Decorative vintage frame */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          className="absolute inset-0 border-4 border-primary/40 rounded-lg pointer-events-none"
          style={{
            boxShadow: "inset 0 0 100px rgba(212, 165, 116, 0.1)",
          }}
        />
      </div>
    </section>
  );
};
