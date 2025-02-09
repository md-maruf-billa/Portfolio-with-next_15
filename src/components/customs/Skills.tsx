import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { GrNode } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { RiHtml5Line } from "react-icons/ri";
import { FaCss3 } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiBootstrapLine } from "react-icons/ri";
import React from "react";

const skillSet = [
      {
            id: 1,
            title: "Next.JS",
            icon: SiNextdotjs,
      },
      {
            id: 2,
            title: "React",
            icon: FaReact,
      },
      {
            id: 3,
            title: "Redux",
            icon: SiRedux,
      },
      {
            id: 4,
            title: "Node.js",
            icon: GrNode,
      },
      {
            id: 5,
            title: "Express.js",
            icon: SiExpress,
      },
      {
            id: 6,
            title: "TypeScript",
            icon: TbBrandTypescript,
      },
      {
            id: 7,
            title: "JavaScript",
            icon: RiJavascriptLine,
      },
      {
            id: 8,
            title: "MongoDB",
            icon: SiMongodb,
      },
      {
            id: 9,
            title: "HTML5",
            icon: RiHtml5Line,
      },
      {
            id: 10,
            title: "CSS3",
            icon: FaCss3,
      },
      {
            id: 11,
            title: "Tailwind CSS",
            icon: RiTailwindCssFill,
      },
      {
            id: 12,
            title: "Bootstrap",
            icon: RiBootstrapLine,
      },
];




export default function Skills() {
      return (
            <div className=' py-20'>
                  <h2 className='text-4xl md:text-5xl font-bold text-center'>My <span className='text-customSelect'>Skills</span></h2>

                  <div className="grid grid-cols-6 gap-8 mt-10">
                        {
                              skillSet.map(skill =>
                              (
                                    <div
                                          key={skill.id}
                                          className="flex flex-col gap-2 justify-center items-center border-4 py-8"
                                    >
                                          <span className="text-6xl">{React.createElement(skill.icon)}</span>
                                          <h1 className="text-2xl">{skill.title}</h1>
                                    </div>
                              )
                              )
                        }
                  </div>

            </div>
      )
}
