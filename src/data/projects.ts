import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "study-notion",
    title: "Study Notion - EdTech Platform",
    description:
      "StudyNotion is a fully functional EdTech platform built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Mayankb13/StudyNotion",
    url: "https://study-notion-frontend-two-chi.vercel.app/",
    tags: ["ReactJs", "NodeJs", "ExpressJs", "MongoDb"],
    sceenshots: ["/screenshots/rippl.png"],
  },
  {
    id: "dev-detective-tool",
    title: "Dev Detective Tool",
    description:
      "Dev Detective Tool fetches and displays GitHub user profiles using the GitHub API built using HTML, CSS, JavaScript .",
    icon: "/skills/javascript.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Mayankb13/Dev-Detective",
    url: "https://dev-detective-sleuth.netlify.app/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "weather-app",
    title: "Weather App",
    description:
      "Weather App provides real-time weather information for any location worldwide.",
    icon: "/skills/javascript.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Mayankb13/Weather-App",
    url: "https://forecastify-weather-app.netlify.app/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  // {
  //   id: "social-media-api-nodejs",
  //   title: "Social Media API",
  //   description:
  //     "An RESTful API developed using Node.js, Express.js and MongoDB to integrate backend and frontend with ease.",
  //   icon: "/skills/nestjs.svg",
  //   repoType: RepoType.Public,
  //   projectType: ProjectType.Personal,
  //   githubUrl: "https://github.com/nixrajput/social-media-api-nodejs",
  //   tags: ["Node.js", "Express.js", "MongoDB", "WebSocket"],
  // },
  // {
  //   id: "grocery-list-maker-app-flutter",
  //   title: "Grocery List Maker App",
  //   description:
  //     "A grocery list maker mobile application developed using Flutter, BloC, Hive DB and PDF.",
  //   icon: "/skills/flutter.svg",
  //   repoType: RepoType.Public,
  //   projectType: ProjectType.Personal,
  //   githubUrl: "https://github.com/nixrajput/grocery-list-maker-flutter",
  //   url:
  //     "https://github.com/nixrajput/grocery-list-maker-flutter/releases/latest",
  //   tags: ["Flutter", "Dart", "BLoC", "PDF", "Hive"],
  // },
  // {
  //   id: "e-commerce-api-nodejs",
  //   title: "E-commerce API",
  //   description:
  //     "An RESTful API developed using Node.js, Express.js, MongoDB, and Stripe to integrate e-commerce backend.",
  //   icon: "/skills/nodejs.svg",
  //   repoType: RepoType.Public,
  //   projectType: ProjectType.Personal,
  //   githubUrl: "https://github.com/nixrajput/ecommerce-api-nodejs",
  //   tags: ["Node.js", "Express.js", "MongoDB", "Stripe"],
  // },
];

export default projects;

export function getProjectName(id: string) {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item.title;
}

export function getProjectDetails(id: string): IProjectItem | null {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item;
}
