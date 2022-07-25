import {
  DiFirebase,
  DiReact,
  DiPython,
  DiJavascript,
  DiScrum,
  DiWebplatform,
} from "react-icons/di";

import { SiSolidity } from "react-icons/si";

export const projects = [
  {
    title: "Asteroids with NEAT",
    description:
      "This was completed for my first year engineering coursework. I recreated the arcade game Asteroids using pygame, and then implemented the NEAT algorithm to train Neural Networks to play it.",
    image: "/images/asteroids-neat.png",
    tags: ["ML", "Python"],
    github: "https://github.com/finnformica/Asteroids-with-NEAT-python",
    id: 0,
  },
  // {
  //   title: "MERN Memories",
  //   description:
  //     "Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.",
  //   image: "/images/1.png",
  //   tags: ["Mongo", "Express", "React", "Node"],
  //   source: "https://google.com",
  //   github: "https://google.com",
  //   id: 1,
  // },
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
    technology: "React.js and Next.js",
    icon: <DiReact size="3rem" />,
  },
  {
    title: "Back-End",
    technology: "Node.js and Databases",
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
    title: "Agile",
    technology: "Scrum and Azure DevOps",
    icon: <DiScrum size="3rem" />,
  },
];
