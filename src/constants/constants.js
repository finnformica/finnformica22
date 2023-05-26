import { DiFirebase, DiReact, DiPython, DiScrum } from "react-icons/di";
import { SiSolidity, SiNodedotjs } from "react-icons/si";

export const projects = [
  {
    title: "BlockChange",
    description:
      "A distributed crowdfunding platform built for humanitarian crises. The platform allows users to create and fund projects using the Ethereum blockchain. The project was built with 3 other students as part of a group coursework and is currently deployed to the Sepolia testnet.",
    image: "/images/projects/blockchange-img.png",
    tags: ["React", "Next.js", "Solidity"],
    github: "https://github.com/finnformica/blockchange-frontend",
    source: "https://blockchange.vercel.app/",
  },
  {
    title: "Facial Expression Recognition",
    description:
      "After completing the fast.ai course I trained an image classifier using facial expression data from kaggle. This was then used in conjunction with OpenCV to provide real-time predictions from a live video stream.",
    image: "/images/projects/facial-expression-happy.png",
    tags: ["fast.ai", "OpenCV", "Python"],
    github: "https://github.com/finnformica/video-facial-recognition",
  },
  {
    title: "Asteroids with NEAT",
    description:
      "I recreated the arcade game Asteroids using pygame and then used Reinforcement Learning to train Neural Networks to play it. The NNs were generated and evolved according to the NEAT algorithm.",
    image: "/images/projects/asteroids-neat.png",
    tags: ["pygame", "RL"],
    github: "https://github.com/finnformica/Asteroids-with-NEAT-python",
  },
  {
    title: "Design Portfolio Mockup",
    description:
      "A commissioned portfolio project for designer wanting a simple platform to showcase some of their work. I wanted to focus on improving the UX by applying transitions to content changes on the website.",
    image: "/images/projects/lunaocean-img.png",
    tags: ["React", "Next.js", "Tailwind CSS"],
    github: "https://github.com/finnformica/lunaocean",
    source: "https://lunaocean.vercel.app",
  },
  {
    title: "Financial Dashboard",
    description:
      "A design taken from the Figma community and implemented into code. This project was used to help me gain a deeper understanding about complex CSS properties like Grid as well as features like state persistance with React hooks.",
    image: "/images/projects/financial-dashboard-img.png",
    tags: ["React", "Next.js", "Material-UI"],
    github: "https://github.com/finnformica/financial-dashboard",
    source: "https://financial-dashboard-finnformica.vercel.app/",
  },
  {
    title: "Image to Matrix",
    description:
      "Using canvas-sketch-cli, the input image is turned into a bitmap of greyscale data which is used to apply an opacity filter to the falling matrix characters. This then leaves an imprint of the image left on the page. The output can be stored as an image or a video.",
    image: "/images/projects/matrix-effect.png",
    tags: ["canvas-sketch-cli", "JavaScript"],
    github: "https://github.com/finnformica/matrix-effect",
  },
];

export const TimeLineData = [
  { year: 2016, text: "Started my journey with Python" },
  { year: 2018, text: "Trained my first ML model using NEAT" },
  { year: 2020, text: "Began building static websites" },
  {
    year: 2022,
    text: "Graduated from Mech and Elec BEng - First Class Honours",
  },
  { year: 2023, text: "Graduate from FinTech with Data Science MSc" },
];

export const TechnologiesData = [
  {
    title: "Front-End",
    technology: "Next.js and MUI",
    icon: <DiReact size="3rem" />,
  },
  {
    title: "Back-End",
    technology: "Node.js and Flask",
    icon: <SiNodedotjs size="3rem" />,
  },
  {
    title: "AI / ML",
    technology: "Sklearn, fast.ai, pytorch",
    icon: <DiPython size="3rem" />,
  },
  {
    title: "Databases",
    technology: "SQL and MongoDB",
    icon: <DiFirebase size="3rem" />,
  },
  {
    title: "Blockchain",
    technology: "Solidity and Ganache",
    icon: <SiSolidity size="3rem" />,
  },
  {
    title: "DevOps",
    technology: "Scrum, Docker, Airflow",
    icon: <DiScrum size="3rem" />,
  },
];
