import AvatarVerse from "../../src/assets/projects/AvatarVerse.gif";
import KhalidBook from "../../src/assets/projects/KhalidBookmockup.png";
import ScienceSociety from "../../src/assets/projects/ScienceSocietythumbnail.png";
import HeartLand from "../../src/assets/projects/HeartLandthumnail.jpg";
import Establo from "../../src/assets/projects/establomockup.png";

export const getProjects = (t) => [
  {
    key: "establo",
    title: "Establo (EUSD)",
    tagline: t("projects.establo.tagline"),
    description: [t("projects.establo.p1"), t("projects.establo.p2")],
    tech: ["Next.js", "Tailwind", "Solana", "TypeScript"],
    year: "2024",
    image: Establo,
    link: "https://establo.vercel.app",
  },
  {
    key: "avatarverse",
    title: "AvatarVerse",
    tagline: t("projects.avatarverse.tagline"),
    description: [t("projects.avatarverse.p1"), t("projects.avatarverse.p2")],
    tech: ["Solidity", "React", "Node.js", "Ethers"],
    year: "2024",
    image: AvatarVerse,
    link: "https://www.youtube.com/watch?v=rcokHWWecoM",
  },
  {
    key: "khalidbook",
    title: "KhalidBook",
    tagline: t("projects.khalidbook.tagline"),
    description: [t("projects.khalidbook.p1"), t("projects.khalidbook.p2")],
    tech: ["React", "Node.js", "REST", "PostgreSQL"],
    year: "2023",
    image: KhalidBook,
    link: "https://youtu.be/1bXySTxJa0k",
  },
  {
    key: "uetss",
    title: "UET Science Society",
    tagline: t("projects.uetss.tagline"),
    description: [t("projects.uetss.p1"), t("projects.uetss.p2")],
    tech: ["Next.js", "MongoDB", "Vercel", "Tailwind"],
    year: "2023",
    image: ScienceSociety,
    link: "https://www.uetss.org",
  },
  {
    key: "heartland",
    title: "Heartland Rehab",
    tagline: t("projects.heartland.tagline"),
    description: [t("projects.heartland.p1"), t("projects.heartland.p2")],
    tech: ["React", "Express", "MUI", "PostgreSQL"],
    year: "2022",
    image: HeartLand,
    link: "https://www.heartlandrehab.sg",
  },
];
