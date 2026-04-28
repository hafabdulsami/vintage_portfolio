import AvatarVerse from "../assets/projects/AvatarVerse.gif";
import KhalidBook from "../assets/projects/KhalidBookmockup.png";
import ScienceSociety from "../assets/projects/ScienceSocietythumbnail.png";
import HeartLand from "../assets/projects/HeartLandthumnail.jpg";
import Establo from "../assets/projects/establomockup.png";

export const getProjectsData = (t) => [
  {
    title: t("projects.gameGallery.title"),
    description: t("projects.gameGallery.description"),
    tech: ["Solidity", "React", "Node.js"],
    year: "2024",
    stats: [
      { label: t("projects.gameGallery.stats.assets"), value: "500+" },
      { label: t("projects.gameGallery.stats.volume"), value: "$2.5M" },
    ],
    image: AvatarVerse,
    link: "https://www.youtube.com/watch?v=rcokHWWecoM",
  },
  {
    title: t("projects.khalidBook.title"),
    description: t("projects.khalidBook.description"),
    tech: ["React", "Node.js", "REST"],
    year: "2023",
    stats: [
      { label: t("projects.khalidBook.stats.companies"), value: "50+" },
      { label: t("projects.khalidBook.stats.transactions"), value: "100K+" },
    ],
    image: KhalidBook,
    link: "https://youtu.be/1bXySTxJa0k",
  },
  {
    title: t("projects.scienceSociety.title"),
    description: t("projects.scienceSociety.description"),
    tech: ["Next.js", "MongoDB", "Vercel"],
    year: "2023",
    stats: [
      { label: t("projects.scienceSociety.stats.members"), value: "2K+" },
      { label: t("projects.scienceSociety.stats.events"), value: "40+" },
    ],
    image: ScienceSociety,
    link: "https://www.uetss.org",
  },
  {
    title: t("projects.heartlandRehab.title"),
    description: t("projects.heartlandRehab.description"),
    tech: ["React", "Express", "MUI"],
    year: "2022",
    stats: [
      { label: t("projects.heartlandRehab.stats.patients"), value: "500+" },
      {
        label: t("projects.heartlandRehab.stats.appointments"),
        value: "5K+",
      },
    ],
    image: HeartLand,
    link: "https://www.heartlandrehab.sg",
  },
  {
    title: t("projects.establo.title"),
    description: t("projects.establo.description"),
    tech: ["Next.js", "Tailwind", "Solana"],
    year: "2024",
    stats: [
      { label: t("projects.establo.stats.tvl"), value: "$50M+" },
      { label: t("projects.establo.stats.transactions"), value: "1M+" },
    ],
    image: Establo,
    link: "https://establo.vercel.app",
  },
];
