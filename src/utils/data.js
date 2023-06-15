import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";

export const projectExperience = [
  {
    name: "Website Design",
    projects: 10,
    icon: HiOutlineDesktopComputer,
    bg: "#0047AB",
  },
  {
    name: "Mobile App Design",
    projects: 4,
    icon: CiMobile1,
    bg: "#0047AB",
  }
];

export const WhatDoIHelp = [
  "I will help you with finging a solution and solve your problem, I use process design to create digital products. Besides that also help their business.",
  "I use process design to create digital products. Besides that also help their business",
];

export const workExp = [
  {
    place: "Mobitel (Pvt) Ltd",
    tenure: "2018 - 2019",
    role: "Junior Credit Officer",
    detail:
      "As a Junior Credit Officer, I worked in Mobitel (Pvt) Ltd 108 W A D Ramanayake Mawatha, Colombo 00200, Sri Lanka",
  },
  {
    place: "CodeTech Lk",
    tenure: "2022",
    role: "Intern - Full-Stack Engineer",
    detail:
      "As an Intern Full-Stack Engineer, I worked in CodeTech Lk and while i was working at this company i was participated in a team where we developed two blockchain based betting games and a bitcoin trading bot as well",
  }
];

export const techs = [
  {
    name: "React",
    task: "Front-End Development",
    description:
      "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.",
    img: "./tech1.png",
  },
  {
    name: "Node.js",
    task: "Back-End Development",
    description:
      "Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. ",
    img: "./tech2.png",
  },
  {
    name: "JavaScript",
    task: "Front-End Development/Back-End Development",
    description:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
    img: "./tech3.png",
  },
  {
    name: "Tailwind CSS",
    task: "Front-End Development",
    description:
      "Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables.",
    img: "./tech4.png",
  },
  {
    name: "Sass",
    task: "Front-End Development",
    description:
      "Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. SassScript is the scripting language itself.",
    img: "./tech5.png",
  },
  {
    name: "SQL",
    task: "Database Management",
    description:
      "Structured Query Language, is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system.",
    img: "./tech6.png",
  },
  {
    name: "MongoDB",
    task: "Database Management",
    description:
      "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
    img: "./tech7.png",
  },
  {
    name: "Python",
    task: "Back-End Development/ML & AI Development",
    description:
      "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation via the off-side rule.",
    img: "./tech8.png",
  },
  {
    name: "Figma",
    task: "UI/UX Design",
    description:
      "Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows.",
    img: "./tech9.png",
  }
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
