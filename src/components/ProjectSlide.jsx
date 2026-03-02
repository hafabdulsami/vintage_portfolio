import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

export const ProjectSlide = ({ project, index }) => {
  const { t } = useLanguage();

  const handleProjectLink = () => {
    if (project.link) {
      window.open(project.link, "_blank");
    }
  };

  // Alternate border colors for tech tags
  const tagColors = [
    "border-primary/50 text-primary",
    "border-vintage-green/50 text-vintage-green",
    "border-vintage-teal/50 text-vintage-teal",
  ];

  return (
    <section className="relative w-full px-4 md:px-6 py-8 md:py-12 flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Left - Project Info */}
          <div className="space-y-4 md:space-y-6 text-center lg:text-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, ease: "easeInOut" }}
            >
              <span className="text-primary font-display text-base md:text-lg">
                {t("project.counter", { n: index + 1 })}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-vintage-cream mt-3 md:mt-4 mb-4 md:mb-6 font-display">
                {project.title}
              </h2>
              <p className="text-base md:text-xl text-vintage-beige leading-relaxed mb-6 md:mb-8">
                {project.description}
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8 justify-center lg:justify-start">
              {project.tech.map((tech, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className={`px-3 md:px-4 py-1.5 md:py-2 bg-[#3B2F22] border-2 ${tagColors[i % tagColors.length]} rounded-md font-medium cursor-pointer font-display text-sm md:text-base`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <div className="flex gap-8 md:gap-12 mb-6 md:mb-8 justify-center lg:justify-start">
              {project.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-bold text-primary font-display">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-vintage-brown uppercase font-display mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleProjectLink}
              className="px-6 md:px-8 py-3 md:py-4 bg-primary text-[#2C2219] font-bold rounded-md hover:shadow-2xl hover:shadow-primary/50 transition-all border-2 border-vintage-orange font-display text-sm md:text-base"
            >
              {t("project.viewLive")} &rarr;
            </motion.button>
          </div>

          {/* Right - Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, ease: "easeInOut" }}
            className="relative order-first lg:order-last"
          >
            {project.image ? (
              <div className="relative rounded-lg overflow-hidden shadow-2xl border-2 md:border-4 border-vintage-cream/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            ) : (
              <div
                className={`relative bg-gradient-to-br ${project.gradient} rounded-lg p-6 md:p-12 shadow-2xl border-2 md:border-4 border-vintage-cream/20 min-h-[250px] md:min-h-[400px] flex items-center justify-center`}
              >
                <div className="text-center">
                  <div className="text-5xl md:text-8xl mb-3 md:mb-4 font-display font-bold text-vintage-cream/80">#</div>
                  <div className="text-lg md:text-2xl font-bold text-white font-display">
                    {project.title}
                  </div>
                </div>

                {/* Decorative elements */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 20, repeat: Infinity }}
                  className="absolute -top-3 -right-3 md:-top-6 md:-right-6 w-16 md:w-24 h-16 md:h-24 bg-primary/30 rounded-full blur-xl"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, -180, -360],
                  }}
                  transition={{ duration: 15, repeat: Infinity, delay: 2 }}
                  className="absolute -bottom-3 -left-3 md:-bottom-6 md:-left-6 w-20 md:w-32 h-20 md:h-32 bg-vintage-orange/30 rounded-full blur-xl"
                />
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
