export const translations = {
  en: {
    nav: {
      work: "Work",
      about: "About",
      skills: "Skills",
      contact: "Contact",
      resume: "Resume",
    },
    hero: {
      eyebrow: "// Full-Stack Engineer · Lahore, PK · GMT+5",
      subtitle:
        "I build production web apps end to end — from React on the front to Node and Postgres on the back. Three years deep, shipping with care.",
      viewWork: "View selected work",
      getInTouch: "Get in touch",
      available: "Available for freelance & full-time roles",
    },
    chapters: {
      projectsEyebrow: "Selected work · 2022 — 2024",
      projectsTitle: "Projects.",
      aboutEyebrow: "About · me",
      aboutTitle: "About me.",
      skillsEyebrow: "Stack · tools",
      skillsTitle: "Tech stack.",
      contactEyebrow: "Get in touch",
      contactTitle: "Let's talk.",
    },
    about: {
      eyebrow: "// 3+ years · shipping production",
      p1: "I'm Abdul Sami — a full-stack engineer based in Lahore, Pakistan, with three years of experience building production web apps for startups, agencies, and Web3 teams.",
      p2: "I'm comfortable across the stack — React and Next.js on the front, Node and Postgres on the back, and the deploy pipeline that ships it to production. I've worked on DeFi dashboards moving real money, multi-tenant SaaS handling thousands of transactions, and healthcare tools where correctness isn't negotiable.",
      p3: "What I care about most: the boring fundamentals. Types, tests, indexes, observability. Code that a teammate can read in two years and immediately understand.",
      yrsLabel: "yrs shipping",
      productsLabel: "products live",
      curiosityLabel: "curiosity",
      verticalItems: [
        "GMT+5",
        "About me",
        "3+ years shipping",
        "Lahore, PK",
        "Full-stack",
        "Open to work",
      ],
    },
    projects: {
      intro:
        "A handful of things I've shipped — across Web3, fintech, healthcare, and community tools. Each one taught me something I still use daily.",
      viewProject: "View project",
      live: "View live",
      establo: {
        tagline: "DeFi dashboard · Solana",
        p1: "A production DeFi dashboard for a dual-backed stablecoin on Solana, currently sitting at over $50M in total value locked. The interface lets users mint, redeem, and stake EUSD against multiple collateral types in a single flow, with live oracle pricing and on-chain transaction confirmation.",
        p2: "I built the front-end in Next.js with Tailwind, integrated the Solana wallet adapter for transaction signing, and wired the dashboard to indexed on-chain data so balances and TVL update without page reloads. The hardest part was making the multi-step mint/redeem flow feel as frictionless as a regular fintech app, despite the underlying RPC complexity.",
      },
      avatarverse: {
        tagline: "NFT game gallery · Web3",
        p1: "A browser-based NFT game gallery where players browse on-chain assets, preview them in 3D, and check out using a connected crypto wallet. Built around a custom Solidity contract handling minting, ownership, and royalty splits across creators.",
        p2: "On the front-end I used React with a lightweight 3D viewer for the avatars and a wallet integration that supports multiple providers. I learned a lot about gas estimation, transaction failure recovery, and designing UX for users who have never signed an on-chain transaction before.",
      },
      khalidbook: {
        tagline: "Multi-tenant accounting · SaaS",
        p1: "A multi-tenant accounting platform serving 50+ companies and 100K+ transactions, with role-based permissions, double-entry ledgers, and per-tenant data isolation at the database layer. The product handles real businesses' books, so correctness was non-negotiable.",
        p2: "Built the front-end in React with React Query for caching, and the back-end in Node with REST endpoints validated end to end. Spent a lot of time on the report generation pipeline — turning thousands of journal entries into clean P&L and balance sheet PDFs that accountants actually trust.",
      },
      uetss: {
        tagline: "Membership & events · Community",
        p1: "The official membership and event hub for a 2K+ student science society at UET. Members sign up, browse upcoming events, register for workshops, and access an archive of past sessions, all from a single fast-loading site.",
        p2: "I shipped this on Next.js with MongoDB for flexibility around the evolving event schema, and deployed on Vercel so the team could push updates between events without me being on call. The site has handled multiple registration spikes during major event launches without dropping a request.",
      },
      heartland: {
        tagline: "Patient management · Healthcare",
        p1: "A patient and appointment management system for a Singapore physiotherapy clinic — calendar booking, patient records, treatment notes, and a clinician-facing dashboard, all built around how the staff actually work day to day.",
        p2: "Used React with MUI on the front for fast iteration with the clinic's owner, and an Express back-end backed by a relational store for patient data. I spent more time talking to the physios than writing code, and that's what made the product land — the calendar reflects how their day really flows, not how a generic SaaS thinks it should.",
      },
    },
    skills: {
      eyebrow: "// Tech I reach for",
      intro:
        "Tools I use day to day. None of these are for show — every one of them has shipped something to production.",
      groups: {
        frontend: "Frontend",
        backend: "Backend",
        data: "Data",
        web3: "Web3",
        devops: "DevOps",
      },
    },
    contact: {
      intro:
        "Open to freelance contracts and full-time roles. The fastest way to reach me is email.",
      elsewhere: "// Elsewhere",
      footer: "© 2026 SAMMY · built with React + Vite",
      location: "Lahore, PK · GMT+5",
    },
    aria: {
      changeLanguage: "Change language",
    },
  },

  fr: {
    nav: {
      work: "Projets",
      about: "À propos",
      skills: "Compétences",
      contact: "Contact",
      resume: "CV",
    },
    hero: {
      eyebrow: "// Ingénieur Full-Stack · Lahore, PK · GMT+5",
      subtitle:
        "Je construis des applications web de production de bout en bout — de React côté front à Node et Postgres côté back. Trois ans d'expérience, livrés avec soin.",
      viewWork: "Voir mes projets",
      getInTouch: "Me contacter",
      available: "Disponible pour freelance et postes à temps plein",
    },
    chapters: {
      projectsEyebrow: "Projets sélectionnés · 2022 — 2024",
      projectsTitle: "Projets.",
      aboutEyebrow: "À propos · moi",
      aboutTitle: "À propos.",
      skillsEyebrow: "Stack · outils",
      skillsTitle: "Stack tech.",
      contactEyebrow: "Me contacter",
      contactTitle: "Parlons.",
    },
    about: {
      eyebrow: "// 3+ ans · production",
      p1: "Je suis Abdul Sami — ingénieur full-stack basé à Lahore, au Pakistan, avec trois ans d'expérience à construire des applications web de production pour startups, agences et équipes Web3.",
      p2: "À l'aise sur toute la pile — React et Next.js côté front, Node et Postgres côté back, et la pipeline de déploiement qui livre. J'ai travaillé sur des dashboards DeFi qui déplacent de l'argent réel, du SaaS multi-tenant gérant des milliers de transactions, et des outils de santé où la fiabilité n'est pas négociable.",
      p3: "Ce qui me tient à cœur : les fondamentaux ennuyeux. Les types, les tests, les index, l'observabilité. Du code qu'un coéquipier peut lire deux ans plus tard et comprendre immédiatement.",
      yrsLabel: "ans en prod",
      productsLabel: "produits en ligne",
      curiosityLabel: "curiosité",
      verticalItems: [
        "GMT+5",
        "À propos",
        "3+ ans en prod",
        "Lahore, PK",
        "Full-stack",
        "Disponible",
      ],
    },
    projects: {
      intro:
        "Quelques projets que j'ai livrés — dans le Web3, la fintech, la santé et les outils communautaires. Chacun m'a appris quelque chose que j'utilise encore.",
      viewProject: "Voir le projet",
      live: "Voir en ligne",
      establo: {
        tagline: "Dashboard DeFi · Solana",
        p1: "Un dashboard DeFi en production pour un stablecoin à double garantie sur Solana, actuellement à plus de 50M$ en TVL. L'interface permet de mint, redeem et staker EUSD contre plusieurs types de collatéraux dans un seul flux, avec prix oracle en direct et confirmation on-chain.",
        p2: "J'ai construit le front en Next.js avec Tailwind, intégré le wallet adapter Solana pour la signature, et connecté le dashboard à des données on-chain indexées pour que les soldes et la TVL se mettent à jour sans rechargement. Le plus dur a été de rendre le flux mint/redeem aussi fluide qu'une app fintech classique.",
      },
      avatarverse: {
        tagline: "Galerie de jeux NFT · Web3",
        p1: "Une galerie de jeux NFT dans le navigateur où les joueurs parcourent des actifs on-chain, les prévisualisent en 3D et payent avec leur wallet crypto. Construit autour d'un contrat Solidity custom gérant le mint, la propriété et les splits de royalties.",
        p2: "Sur le front j'ai utilisé React avec un viewer 3D léger et une intégration wallet multi-providers. J'ai beaucoup appris sur l'estimation de gas, la récupération d'erreurs et la conception d'UX pour des utilisateurs qui n'ont jamais signé une transaction on-chain.",
      },
      khalidbook: {
        tagline: "Comptabilité multi-tenant · SaaS",
        p1: "Plateforme de comptabilité multi-tenant pour 50+ entreprises et 100K+ transactions, avec permissions par rôle, comptabilité en partie double, et isolation des données par tenant au niveau de la base. Le produit gère les comptes de vraies entreprises — la justesse n'était pas négociable.",
        p2: "Front en React avec React Query pour le cache, back en Node avec endpoints REST validés de bout en bout. J'ai passé beaucoup de temps sur la pipeline de génération de rapports — transformer des milliers d'écritures en PDF de bilan propres que les comptables peuvent vraiment utiliser.",
      },
      uetss: {
        tagline: "Adhésion & événements · Communauté",
        p1: "Le hub officiel d'adhésion et d'événements pour une société scientifique étudiante de 2K+ membres à UET. Les membres s'inscrivent, parcourent les événements à venir, s'enregistrent aux ateliers et accèdent à l'archive — depuis un site qui charge vite.",
        p2: "Livré en Next.js avec MongoDB pour la flexibilité du schéma, déployé sur Vercel pour que l'équipe puisse pousser des mises à jour entre événements sans m'avoir d'astreinte. Le site a tenu plusieurs pics d'inscription sans perdre une seule requête.",
      },
      heartland: {
        tagline: "Gestion patients · Santé",
        p1: "Un système de gestion patients et rendez-vous pour une clinique de physiothérapie à Singapour — réservation calendrier, dossiers patients, notes de traitement et dashboard clinicien, tout construit autour de la façon dont l'équipe travaille vraiment.",
        p2: "React avec MUI côté front pour itérer vite avec le propriétaire, Express côté back avec un store relationnel pour les patients. J'ai passé plus de temps à parler aux kinés qu'à coder — c'est ce qui a fait que le produit a marché.",
      },
    },
    skills: {
      eyebrow: "// Tech que j'utilise",
      intro:
        "Les outils que j'utilise au quotidien. Aucun n'est là pour le décor — chacun a livré quelque chose en production.",
      groups: {
        frontend: "Frontend",
        backend: "Backend",
        data: "Données",
        web3: "Web3",
        devops: "DevOps",
      },
    },
    contact: {
      intro:
        "Ouvert aux contrats freelance et aux postes à temps plein. Le moyen le plus rapide de me joindre est l'email.",
      elsewhere: "// Ailleurs",
      footer: "© 2026 SAMMY · construit avec React + Vite",
      location: "Lahore, PK · GMT+5",
    },
    aria: {
      changeLanguage: "Changer la langue",
    },
  },

  ar: {
    nav: {
      work: "الأعمال",
      about: "حول",
      skills: "المهارات",
      contact: "تواصل",
      resume: "السيرة الذاتية",
    },
    hero: {
      eyebrow: "// مهندس متكامل · لاهور · GMT+5",
      subtitle:
        "أبني تطبيقات ويب إنتاجية من البداية للنهاية — من React في الواجهة إلى Node و Postgres في الخلفية. ثلاث سنوات من الخبرة، أُطلق بعناية.",
      viewWork: "شاهد أعمالي",
      getInTouch: "تواصل معي",
      available: "متاح للعمل الحر والوظائف بدوام كامل",
    },
    chapters: {
      projectsEyebrow: "أعمال مختارة · 2022 — 2024",
      projectsTitle: "المشاريع.",
      aboutEyebrow: "حول · أنا",
      aboutTitle: "عني.",
      skillsEyebrow: "الحزمة · الأدوات",
      skillsTitle: "الحزمة التقنية.",
      contactEyebrow: "تواصل معي",
      contactTitle: "لنتحدث.",
    },
    about: {
      eyebrow: "// 3+ سنوات · إنتاج",
      p1: "أنا عبد السامي — مهندس متكامل مقيم في لاهور، باكستان، بثلاث سنوات من الخبرة في بناء تطبيقات ويب إنتاجية للشركات الناشئة والوكالات وفرق Web3.",
      p2: "أتقن جميع أجزاء النظام — React و Next.js في الواجهة، Node و Postgres في الخلفية، وخط النشر الذي يُطلق إلى الإنتاج. عملت على لوحات DeFi تنقل أموالاً حقيقية، وSaaS متعدد المستأجرين يعالج آلاف المعاملات، وأدوات صحية حيث الدقة ليست خياراً.",
      p3: "ما يهمني أكثر: الأساسيات. الأنواع، الاختبارات، الفهارس، المراقبة. كود يستطيع الفريق قراءته بعد عامين وفهمه فوراً.",
      yrsLabel: "سنوات إنتاج",
      productsLabel: "منتجات حية",
      curiosityLabel: "فضول",
      verticalItems: [
        "GMT+5",
        "حول",
        "3+ سنوات إنتاج",
        "لاهور",
        "متكامل",
        "متاح للعمل",
      ],
    },
    projects: {
      intro:
        "بعض المشاريع التي أطلقتها — في Web3 والتقنية المالية والصحة وأدوات المجتمعات. كل واحد علمني شيئاً ما زلت أستخدمه.",
      viewProject: "عرض المشروع",
      live: "مشاهدة مباشرة",
      establo: {
        tagline: "لوحة DeFi · Solana",
        p1: "لوحة DeFi إنتاجية لعملة مستقرة مزدوجة الضمان على Solana، حالياً بأكثر من 50M$ في TVL. الواجهة تتيح للمستخدمين mint و redeem و stake لـ EUSD مقابل أنواع متعددة من الضمانات في تدفق واحد، مع تسعير oracle مباشر وتأكيد on-chain.",
        p2: "بنيت الواجهة في Next.js مع Tailwind، ودمجت Solana wallet adapter للتوقيع، ووصلت اللوحة ببيانات on-chain مفهرسة لتحديث الأرصدة وTVL بدون إعادة تحميل. الأصعب كان جعل تدفق mint/redeem سلساً مثل تطبيق fintech عادي.",
      },
      avatarverse: {
        tagline: "معرض ألعاب NFT · Web3",
        p1: "معرض ألعاب NFT في المتصفح حيث يستعرض اللاعبون أصول on-chain، ويعاينونها في 3D، ويدفعون بمحفظة عملات رقمية. مبني حول عقد Solidity مخصص يدير الـmint والملكية وتقسيم العائدات.",
        p2: "في الواجهة استخدمت React مع viewer 3D خفيف، ودمج محفظة يدعم عدة موفرين. تعلمت الكثير عن تقدير الـgas واستعادة فشل المعاملات وتصميم UX لمستخدمين لم يوقعوا معاملة on-chain من قبل.",
      },
      khalidbook: {
        tagline: "محاسبة متعددة المستأجرين · SaaS",
        p1: "منصة محاسبة متعددة المستأجرين تخدم 50+ شركة و100K+ معاملة، بصلاحيات حسب الدور، ودفاتر مزدوجة القيد، وعزل بيانات لكل مستأجر على مستوى قاعدة البيانات. المنتج يدير دفاتر شركات حقيقية — الدقة ليست خياراً.",
        p2: "بنيت الواجهة في React مع React Query للـcache، والخلفية في Node بنقاط REST مع تحقق من البداية للنهاية. أمضيت وقتاً طويلاً على خط توليد التقارير — تحويل آلاف القيود إلى PDF نظيفة يثق بها المحاسبون.",
      },
      uetss: {
        tagline: "عضوية وفعاليات · مجتمع",
        p1: "المركز الرسمي للعضوية والفعاليات لجمعية علمية طلابية بـ2K+ عضو في UET. الأعضاء يسجلون، يستعرضون الفعاليات، يحجزون الورشات، ويصلون لأرشيف الجلسات السابقة من موقع سريع.",
        p2: "أطلقته على Next.js مع MongoDB لمرونة المخطط، ونشرته على Vercel ليتمكن الفريق من دفع التحديثات بدون أن أكون متاحاً على الطوارئ. الموقع تحمل عدة موجات تسجيل دون فقدان طلب واحد.",
      },
      heartland: {
        tagline: "إدارة المرضى · صحة",
        p1: "نظام إدارة مرضى ومواعيد لعيادة علاج طبيعي في سنغافورة — حجز التقويم، سجلات المرضى، ملاحظات العلاج، ولوحة الطبيب — مبني حول كيف يعمل الفريق فعلياً.",
        p2: "React مع MUI في الواجهة للتطوير السريع مع مالك العيادة، وExpress في الخلفية مع تخزين علائقي للبيانات. أمضيت وقتاً مع المعالجين أكثر من الكود — وهذا ما جعل المنتج ينجح.",
      },
    },
    skills: {
      eyebrow: "// التقنيات التي أستخدمها",
      intro:
        "أدوات أستخدمها يومياً. لا شيء منها للعرض — كل واحدة أطلقت شيئاً في الإنتاج.",
      groups: {
        frontend: "الواجهة",
        backend: "الخلفية",
        data: "البيانات",
        web3: "Web3",
        devops: "DevOps",
      },
    },
    contact: {
      intro:
        "متاح لعقود العمل الحر والوظائف بدوام كامل. أسرع طريقة للوصول إليّ هي البريد الإلكتروني.",
      elsewhere: "// روابط أخرى",
      footer: "© 2026 سامي · مبني بـ React + Vite",
      location: "لاهور، باكستان · GMT+5",
    },
    aria: {
      changeLanguage: "تغيير اللغة",
    },
  },

  it: {
    nav: {
      work: "Lavori",
      about: "Chi sono",
      skills: "Competenze",
      contact: "Contatti",
      resume: "CV",
    },
    hero: {
      eyebrow: "// Ingegnere Full-Stack · Lahore, PK · GMT+5",
      subtitle:
        "Costruisco applicazioni web di produzione dall'inizio alla fine — da React sul front a Node e Postgres sul back. Tre anni d'esperienza, rilasciato con cura.",
      viewWork: "Vedi i progetti",
      getInTouch: "Contattami",
      available: "Disponibile per freelance e ruoli a tempo pieno",
    },
    chapters: {
      projectsEyebrow: "Lavori selezionati · 2022 — 2024",
      projectsTitle: "Progetti.",
      aboutEyebrow: "Chi · sono",
      aboutTitle: "Chi sono.",
      skillsEyebrow: "Stack · strumenti",
      skillsTitle: "Stack tech.",
      contactEyebrow: "Contattami",
      contactTitle: "Parliamo.",
    },
    about: {
      eyebrow: "// 3+ anni · in produzione",
      p1: "Sono Abdul Sami — ingegnere full-stack con base a Lahore, in Pakistan, con tre anni d'esperienza nel costruire app web in produzione per startup, agenzie e team Web3.",
      p2: "Sono a mio agio su tutto lo stack — React e Next.js sul front, Node e Postgres sul back, e la pipeline di deploy che porta in produzione. Ho lavorato su dashboard DeFi che muovono soldi veri, SaaS multi-tenant che gestiscono migliaia di transazioni, e strumenti sanitari dove la correttezza non si negozia.",
      p3: "Quello che mi sta a cuore: i fondamentali noiosi. Tipi, test, indici, osservabilità. Codice che un compagno di squadra può leggere due anni dopo e capire subito.",
      yrsLabel: "anni in prod",
      productsLabel: "prodotti live",
      curiosityLabel: "curiosità",
      verticalItems: [
        "GMT+5",
        "Chi sono",
        "3+ anni in prod",
        "Lahore, PK",
        "Full-stack",
        "Disponibile",
      ],
    },
    projects: {
      intro:
        "Qualche progetto che ho rilasciato — Web3, fintech, sanità, strumenti per community. Ognuno mi ha insegnato qualcosa che uso ancora.",
      viewProject: "Vedi il progetto",
      live: "Vedi live",
      establo: {
        tagline: "Dashboard DeFi · Solana",
        p1: "Una dashboard DeFi di produzione per una stablecoin a doppia garanzia su Solana, attualmente oltre 50M$ in TVL. L'interfaccia permette mint, redeem e stake di EUSD contro più tipi di collaterale in un singolo flusso, con prezzi oracle in tempo reale e conferma on-chain.",
        p2: "Front-end in Next.js con Tailwind, wallet adapter Solana per le firme, dashboard collegata a dati on-chain indicizzati così bilanci e TVL si aggiornano senza ricaricare. La parte più dura è stata rendere il flusso mint/redeem fluido come un'app fintech qualunque.",
      },
      avatarverse: {
        tagline: "Galleria di giochi NFT · Web3",
        p1: "Una galleria di giochi NFT nel browser dove i giocatori sfogliano asset on-chain, li vedono in 3D e pagano col wallet crypto. Costruita attorno a un contratto Solidity custom che gestisce mint, proprietà e split delle royalty.",
        p2: "Sul front React con un viewer 3D leggero e integrazione wallet multi-provider. Ho imparato molto su gas estimation, recupero di transazioni fallite e UX per utenti che non hanno mai firmato una transazione on-chain.",
      },
      khalidbook: {
        tagline: "Contabilità multi-tenant · SaaS",
        p1: "Piattaforma di contabilità multi-tenant per 50+ aziende e 100K+ transazioni, con permessi per ruolo, partita doppia e isolamento dati per tenant a livello DB. Il prodotto gestisce i conti di aziende vere — la correttezza non era negoziabile.",
        p2: "Front in React con React Query per il cache, back in Node con REST validati end-to-end. Ho passato molto tempo sulla pipeline di reporting — trasformare migliaia di scritture in PDF di bilancio puliti che i commercialisti possono davvero usare.",
      },
      uetss: {
        tagline: "Iscrizioni & eventi · Community",
        p1: "Hub ufficiale di iscrizioni ed eventi per una società scientifica studentesca di 2K+ membri all'UET. Gli iscritti si registrano, sfogliano eventi futuri, prenotano workshop e accedono all'archivio — da un sito che carica veloce.",
        p2: "Rilasciato in Next.js con MongoDB per la flessibilità di schema, deployato su Vercel così il team può aggiornare senza che io sia di turno. Ha retto a più picchi di iscrizioni senza perdere una richiesta.",
      },
      heartland: {
        tagline: "Gestione pazienti · Sanità",
        p1: "Sistema di gestione pazienti e appuntamenti per una clinica di fisioterapia a Singapore — calendario, schede paziente, note di trattamento e dashboard per i clinici, tutto pensato su come lo staff lavora davvero.",
        p2: "React con MUI sul front per iterare veloce col proprietario, Express sul back con store relazionale per i dati pazienti. Ho passato più tempo a parlare coi fisioterapisti che a scrivere codice — ed è quello che ha fatto funzionare il prodotto.",
      },
    },
    skills: {
      eyebrow: "// Tech che uso",
      intro:
        "Strumenti che uso ogni giorno. Niente di vetrina — ognuno ha rilasciato qualcosa in produzione.",
      groups: {
        frontend: "Frontend",
        backend: "Backend",
        data: "Dati",
        web3: "Web3",
        devops: "DevOps",
      },
    },
    contact: {
      intro:
        "Disponibile per contratti freelance e ruoli a tempo pieno. Il modo più veloce per raggiungermi è l'email.",
      elsewhere: "// Altrove",
      footer: "© 2026 SAMMY · costruito con React + Vite",
      location: "Lahore, PK · GMT+5",
    },
    aria: {
      changeLanguage: "Cambia lingua",
    },
  },
};
