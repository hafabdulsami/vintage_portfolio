import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

const groupKeys = [
  { key: "frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "Vite"] },
  { key: "backend",  items: ["Node.js", "Express", "tRPC", "REST", "GraphQL", "Feathers"] },
  { key: "data",     items: ["PostgreSQL", "MongoDB", "Prisma", "Redis", "Drizzle", "MySQL"] },
  { key: "web3",     items: ["Solidity", "Solana", "Ethers", "Wallet adapters", "On-chain UX"] },
  { key: "devops",   items: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Playwright"] },
];

export function Skills() {
  const { t } = useLanguage();

  return (
    <section className="px-5 md:px-16 pt-6 md:pt-8 pb-20 md:pb-32">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-10 md:mb-16 grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <p className="font-mono text-[11px] md:text-xs text-[var(--ink-muted)] mb-4 md:mb-5">
              {t("skills.eyebrow")}
            </p>
            <p className="text-lg md:text-2xl text-[var(--ink)] leading-[1.55] md:leading-[1.5] max-w-2xl">
              {t("skills.intro")}
            </p>
          </div>
        </div>

        <div className="border-t hairline">
          {groupKeys.map((g, i) => (
            <motion.div
              key={g.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="grid md:grid-cols-12 gap-3 md:gap-8 py-6 md:py-8 border-b hairline group"
            >
              <div className="md:col-span-4 flex items-baseline gap-3 md:gap-4">
                <span className="font-mono text-[10px] md:text-xs text-[var(--ink-faint)]">
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl md:text-4xl font-semibold tracking-tight group-hover:text-[var(--accent)] transition-colors">
                  {t(`skills.groups.${g.key}`)}
                </h3>
              </div>
              <div className="md:col-span-8 flex flex-wrap gap-1.5 md:gap-2 md:items-center">
                {g.items.map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
