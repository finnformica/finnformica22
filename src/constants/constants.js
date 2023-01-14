import { DiFirebase, DiReact, DiPython, DiScrum } from "react-icons/di";
import { SiSolidity, SiFlask } from "react-icons/si";

export const projects = [
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
    title: "Analysis of Zero-Intelligence Traders",
    description:
      "Using the Bristol Stock Exchange simulation, I ran analysis on five automated trading agents to compare their performance and determine the most profitable trader. The experiments were run in Python and the analysis and visualisation in R.",
    image: "/images/projects/ca3_boxplot.png",
    tags: ["Python", "R"],
    source:
      "https://github.com/finnformica/BristolStockExchange/blob/ca3/CA3_report.pdf",
    github: "https://github.com/finnformica/BristolStockExchange/tree/ca3",
  },
  {
    title: "Image to Matrix",
    description:
      "Using canvas-sketch-cli, the input image is turned into a bitmap of greyscale data which is used to apply an opacity filter to the falling matrix characters. This then leaves an imprint of the image left on the page. The output can be stored as an image or a video.",
    image: "/images/projects/matrix-effect.png",
    tags: ["canvas-sketch-cli", "JavaScript"],
    github: "https://github.com/finnformica/matrix-effect",
  },
  {
    title: "Indicator API",
    description:
      "A web app to allow the display of custom indicators for financial price data designed with a microservice architecture. RESTful API back-end serves price and signal data from yfinance using FastAPI. The data is then fetched asynchronously in the front-end.",
    image: "/images/projects/indicator-dashboard-img.png",
    tags: ["React", "Next.js", "FastAPI"],
    github: "https://github.com/finnformica/algo-api-charts",
    source: "https://algo-api.up.railway.app/docs",
  },
  // {
  //   title: "Flask Website",
  //   description:
  //     "My first personal website to explore web development and hosting a website with a custom domain name. I found the overall response time of the site very slow and the project difficult to add to and maintain.",
  //   image: "/images/projects/flask-website.png",
  //   tags: ["Flask / Python", "Bootstrap", "Heroku"],
  //   source: "https://finnformica22.up.railway.app/",
  //   github: "https://github.com/finnformica/personal-website-2022-flask",
  // },
  // {
  //   title: "",
  //   description:
  //     "",
  //   image: "/images/REPLACE.png",
  //   tags: ["", ""],
  //   source: "",
  //   github: "",
  // },
];

export const TimeLineData = [
  { year: 2016, text: "Started my journey with Python" },
  { year: 2017, text: "Trained my first ML model using NEAT" },
  { year: 2019, text: "Achieved 3A's and A*" },
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
    technology: "React and Next.js",
    icon: <DiReact size="3rem" />,
  },
  {
    title: "Back-End",
    technology: "Node.js and Flask",
    icon: <SiFlask size="3rem" />,
  },
  {
    title: "AI / ML",
    technology: "Sklearn and fast.ai",
    icon: <DiPython size="3rem" />,
  },
  {
    title: "Databases",
    technology: "Snowflake and MongoDB",
    icon: <DiFirebase size="3rem" />,
  },
  {
    title: "Blockchain",
    technology: "Solidity",
    icon: <SiSolidity size="3rem" />,
  },
  {
    title: "Agile",
    technology: "Scrum and Azure DevOps",
    icon: <DiScrum size="3rem" />,
  },
];
