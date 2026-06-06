import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaGithub,
  FaFileExcel,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaFileWord,
  FaFilePowerpoint,
  FaBitcoin,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiGooglesheets,
  SiGoogleappsscript,
} from "react-icons/si";

import { 
  HiMiniChartBar 
} from "react-icons/hi2";

import { 
  MdCandlestickChart 
} from "react-icons/md";

import { 
  RiRefund2Fill 
} from "react-icons/ri";

import { 
  IoAnalytics 
} from "react-icons/io5";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Python", icon: <FaPython /> },
  { name: "React", icon: <FaReact /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Word", icon: <FaFileWord /> },
  { name: "PowerPoint", icon: <FaFilePowerpoint /> },
  { name: "Excel", icon: <FaFileExcel /> },
  { name: "Google Sheets", icon: <SiGooglesheets /> },
  { name: "Google Apps Script", icon: <SiGoogleappsscript /> },
  { name: "Power BI", icon: <HiMiniChartBar /> },
  { name: "Crypto Trading", icon: <FaBitcoin /> },
  { name: "Forex Trading", icon: <MdCandlestickChart /> },
  { name: "Technical Analysis", icon: <IoAnalytics /> },
  { name: "Fundamental Analysis", icon: <RiRefund2Fill /> },
];

function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl text-cyan-400 mb-4 flex justify-center">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;