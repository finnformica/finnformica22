import {
  DiFirebase,
  DiReact,
  DiPython,
  DiJavascript,
  DiScrum,
  DiWebplatform,
} from "react-icons/di";

import { SiAzuredevops, SiSolidity } from "react-icons/si";

export const projects = [
  {
    title: "MERN Memories",
    description:
      "Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.",
    image: "/images/1.png",
    tags: ["Mongo", "Express", "React", "Node"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 0,
  },
  {
    title: "E-Commerce",
    description:
      "While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to your portfolio. And trust me, e-commerce applications are impressive.",
    image: "/images/2.png",
    tags: ["React", "JavaScript"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 1,
  },
  {
    title: "WebRTC App",
    description:
      "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
    image: "/images/3.jpg",
    tags: ["React", "WebRTC"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 2,
  },
  {
    title: "Unichat",
    description:
      "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
    image: "/images/4.jpg",
    tags: ["React", "ChatEngine", "Firebase"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2016, text: "Started my journey with Python" },
  { year: 2017, text: "Trained my first ML model using NEAT" },
  { year: 2019, text: "Achieved 3A's and A*" },
  { year: 2020, text: "Began building static websites" },

  {
    year: 2022,
    text: "Graduated BEng with First Class Honours",
  },
  { year: "now", text: "Financial Technology with Data Science MSc" },
  // { year: "future", text: "Become a Blockchain Developer" },
];

export const TechnologiesData = [
  {
    title: "Front-End",
    technology: "React and Next.js",
    icon: <DiReact size="3rem" />,
  },
  {
    title: "Back-End",
    technology: "Node and Databases",
    icon: <DiFirebase size="3rem" />,
  },
  {
    title: "AI / ML",
    technology: "Sklearn and Tensorflow",
    icon: <DiPython size="3rem" />,
  },
  {
    title: "Creative Coding",
    technology: "Canvas Sketch",
    icon: <DiJavascript size="3rem" />,
  },
  {
    title: "Blockchain",
    technology: "Solidity",
    icon: <SiSolidity size="3rem" />,
  },
  {
    title: "Agile / SCRUM",
    technology: "...",
    icon: <DiScrum size="3rem" />,
  },
  {
    title: "Azure DevOps",
    technology: "...",
    icon: <SiAzuredevops size="3rem" />,
  },
];
