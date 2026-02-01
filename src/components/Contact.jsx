import React from "react";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-16 md:py-32 px-4 md:px-6 scroll-mt-24"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 md:mb-8 font-display">
            <span className="text-vintage-cream">Let's Create </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Together
            </span>
          </h2>

          <p className="text-base md:text-xl text-vintage-beige mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            Open to exciting projects and collaborations. Let's craft something
            timeless!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-8 md:mb-12 px-4">
            <motion.a
              href="mailto:abdulsami699@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-8 py-3 md:py-4 bg-primary text-[#2a2520] font-bold rounded-full hover:shadow-2xl hover:shadow-primary/50 transition-all border-2 border-vintage-orange font-display text-sm md:text-base"
            >
              📧 Email Me
            </motion.a>
            <motion.a
              href="https://github.com/hafabdulsami"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-8 py-3 md:py-4 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-[#2a2520] transition-all font-display text-sm md:text-base"
            >
              💻 GitHub
            </motion.a>
          </div>

          <div className="flex justify-center gap-6 md:gap-8">
            {[
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/abdulsami966/",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/mian._.sami?igsh=ODU0cjB1OXowaXY4&utm_source=qr",
              },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="text-vintage-beige hover:text-primary transition-colors text-base md:text-lg font-display"
              >
                {social.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
