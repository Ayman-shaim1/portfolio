import termiChatGuide from "@/assets/docs/TermiChat-User-Guide.pdf";

export const projects = [
  {
    id: 1,
    title: "AJ-PERFORMANCE",
    description:
      "Website for a coach, Mister Ayoub, featuring a portfolio, e-books, and client tracking.",
    tags: ["React", "Appwrite", "Chakra UI"],
    liveUrl: "https://ajperf.com",
    // githubUrl: "#",
    isPrivate: true,
    video: null,
    playStoreLink: null,
    appStoreLink: null,
  },
  {
    id: 2,
    title: "Miniwireshark",
    description:
      "A web application that allows users to analyze network traffic using Wireshark.",
    tags: ["React", "Java", "Spring Boot"],
    // liveUrl: "https://inwireshark.vercel.app/",
    githubBackendUrl:
      "https://github.com/Ayman-shaim1/spring-boot-miniwireshark",
    githubFrontendUrl: "https://github.com/Ayman-shaim1/frontend-miniwireshark",
    video:
      "https://drive.google.com/file/d/1sh4Lx1_HNtLjLZSPQfBfFlRTdq_P27ic/view",
    isPrivate: false,
  },
  {
    id: 3,
    title: "e-bricole",
    description:
      "A mobile application that allows users to book a craftsman to provide in-home services.",
    tags: ["React Native", "Expo"],
    liveUrl: null,
    githubUrl: "https://github.com/Ayman-shaim1/e-bricole",
    isPrivate: false,
    video:
      "https://drive.google.com/file/d/1AOmLvvHcnU5xjR582FnrgU9c7UZ5iDMM/view",
    // playStoreLink: "https://play.google.com/store/apps",
    // appStoreLink: "https://apps.apple.com/app",
  },
  {
    id: 4,
    title: "TermiX",
    description:
      "Browser SSH client with React + xterm.js and Spring Boot. Run remote commands in your browser.",
    tags: ["React", "Java", "Spring Boot", "xterm.js"],
    // liveUrl: "https://inwireshark.vercel.app/",
    githubUrl: "https://github.com/Ayman-shaim1/termichat",
    video:
      "https://drive.google.com/file/d/1SsE-WATtcADi08vxSCWRS00fGC1v4_U_/view",
    isPrivate: false,
  },
  {
    id: 5,
    title: "TermiChat",
    description:
      "A terminal chat app with a Node.js TCP server (rooms, private messages, login auth) and a blessed CLI client.",
    tags: ["Node.js", "javascript"],
    githubUrl: "https://github.com/Ayman-shaim1/termichat",
    video:
      "https://drive.google.com/file/d/16XeNSKJXETdytSc4zrntux90fU-fsL_Z/view?usp=sharing",
    guideUrl: termiChatGuide,
    isPrivate: false,
  },
  {
    id: 6,
    title: "Quiz",
    description: "A quiz application designed to help prepare for interviews.",
    tags: ["React", "Tailwind CSS"],
    liveUrl: "https://ayman-shaim1.github.io/quiz",
    githubUrl: "https://github.com/Ayman-shaim1/quiz",
    isPrivate: false,
    video: null,
  },
];
