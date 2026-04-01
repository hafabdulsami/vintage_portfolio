export const getSkillsData = (t) => [
  {
    category: t("skills.frontend"),
    items: [
      "React",
      "Next.js",
      "Svelte",
      "SvelteKit",
      "Vue 3",
      "Nuxt 3",
      "TypeScript",
    ],
    icon: "❖",
  },
  {
    category: t("skills.backend"),
    items: [
      "Node.js",
      "Express",
      "Feathers.js",
      "tRPC",
      "GraphQL",
      "REST APIs",
    ],
    icon: "⚙",
  },
  {
    category: t("skills.database"),
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Drizzle", "MySQL"],
    icon: "⊞",
  },
  {
    category: t("skills.toolsDevops"),
    items: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Jest", "Playwright"],
    icon: "⚒",
  },
];
