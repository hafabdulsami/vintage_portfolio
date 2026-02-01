import AvatarVerse from "../assets/projects/AvatarVerse.gif";
import KhalidBook from "../assets/projects/KhalidBookmockup.png";
import ScienceSociety from "../assets/projects/ScienceSocietythumbnail.png";
import HeartLand from "../assets/projects/HeartLandthumnail.jpg";
import Establo from "../assets/projects/establomockup.png";

export const projectsData = [
  {
    title: "Game Gallery",
    description:
      "NFT Game Asset Marketplace with secure wallet integration, NFT minting, and collection creation. Users can mint, list, and trade game assets as NFTs. Features a marketplace for exploring and trading assets with future Unity extension integration for seamless game asset integration.",
    tech: ["Solidity", "React", "Node.js", "Crypto Wallet"],
    gradient: "from-purple-500 to-pink-500",
    stats: { assets: "500+", volume: "$2.5M" },
    image: AvatarVerse,
    link: "https://www.youtube.com/watch?v=rcokHWWecoM",
  },
  {
    title: "Khalid Book",
    description:
      "Multi-Tenant POS System where a super admin can register and manage multiple companies. Each company gets a secure dashboard for warehouse, sales, and purchase operations with role-based access, inventory tracking, and real-time data management. Perfect for retail chains and franchises.",
    tech: ["React", "Node.js", "Bootstrap", "REST API"],
    gradient: "from-blue-500 to-cyan-500",
    stats: { companies: "50+", transactions: "100K+" },
    image: KhalidBook,
    link: "https://youtu.be/1bXySTxJa0k",
  },
  {
    title: "Science Society",
    description:
      "Modern, responsive university society website featuring a public site with dynamic pages (Home, Events, Blogs, Team, Alumni, About). Includes a secure admin panel for content management with mobile-friendly design, smooth navigation, and a clean, scalable codebase.",
    tech: ["Next.js", "MongoDB", "Bootstrap", "Vercel"],
    gradient: "from-green-500 to-emerald-500",
    stats: { members: "2K+", events: "40+" },
    image: ScienceSociety,
    link: "https://www.uetss.org",
  },
  {
    title: "HeartLand Rehab",
    description:
      "Full-stack clinical website for a physical therapy clinic with admin panel for managing services, online store for therapy products, and portfolio showcasing therapists. Patients can book appointments and admins can dynamically update content. Designed for usability and scalability.",
    tech: ["React", "Node.js", "ExpressJS", "Material UI"],
    gradient: "from-orange-500 to-red-500",
    stats: { patients: "500+", appointments: "5K+" },
    image: HeartLand,
    link: "https://www.heartlandrehab.sg",
  },
  {
    title: "Establo (EUSD)",
    description:
      "Dual-backed stablecoin built on Solana combining 70% USDT and 30% real estate assets. Features 1:1 mint/redeem ratio to USDT ensuring trust and liquidity. Powered by Solana's fast, low-fee blockchain with sleek, modern UI showcasing stability and high-speed performance.",
    tech: ["Next.js", "Tailwind CSS", "Solana", "Web3"],
    gradient: "from-yellow-500 to-orange-500",
    stats: { tvl: "$50M+", transactions: "1M+" },
    image: Establo,
    link: "https://establo.vercel.app",
  },
];
