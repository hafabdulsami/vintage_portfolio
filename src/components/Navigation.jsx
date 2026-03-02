import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

export const Navigation = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#2C2219]/90 backdrop-blur-lg py-3 md:py-4 border-b border-primary/40"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        <motion.div
          className="text-xl md:text-2xl font-bold font-display"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-vintage-cream">Abdul </span>
          <span className="text-primary">Sammyy</span>
        </motion.div>

        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="text-vintage-beige hover:text-primary transition-colors relative group font-display"
              whileHover={{ y: -2 }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-vintage-cream p-2 z-50"
          aria-label={t("aria.toggleMenu")}
        >
          <motion.div
            animate={mobileMenuOpen ? "open" : "closed"}
            className="w-6 h-5 flex flex-col justify-between"
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 8 },
              }}
              className="w-full h-0.5 bg-primary block origin-left"
            />
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              className="w-full h-0.5 bg-primary block"
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -8 },
              }}
              className="w-full h-0.5 bg-primary block origin-left"
            />
          </motion.div>
        </button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-6 py-2 bg-primary text-[#2C2219] font-semibold rounded-md hover:shadow-lg hover:shadow-primary/50 transition-all border-2 border-primary font-display"
        >
          {t("nav.hireMe")}
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#2C2219]/95 backdrop-blur-lg border-b border-primary/40"
          >
            <div className="flex flex-col items-center py-6 gap-6">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-vintage-beige hover:text-primary transition-colors text-lg font-display"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-primary text-[#2C2219] font-semibold rounded-md border-2 border-primary font-display"
              >
                {t("nav.hireMe")}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
