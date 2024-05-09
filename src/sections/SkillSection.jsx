import {
  FaPython,
  FaHtml5,
  FaReact,
  FaCss3,
  FaAws,
  FaDocker,
} from "react-icons/fa6";
import { FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiAwslambda,
  SiPytorch,
  SiTailwindcss,
  SiTensorflow,
  SiScikitlearn,
  SiOpencv,
  SiNumpy,
  SiPandas,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiAmazonec2,
  SiRender,
  SiGithub,
  SiGithubactions,
  SiTypescript,
  SiOpenai,
} from "react-icons/si";
import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

const skills = [
  {
    title: "FRONTEND",
    skills: ["React", "NextJs", "HTML", "CSS", "TailwindCss"],
    icons: [
      <FaReact size={24} />,
      <TbBrandNextjs size={24} />,
      <FaHtml5 size={24} />,
      <FaCss3 size={24} />,
      <SiTailwindcss size={24} />,
    ],
  },
  {
    title: "MACHINE LEARNING/AI",
    skills: [
      "Pytorch",
      "TensorFlow",
      "OpenAI",
      "Numpy",
      "Scikit-Learn",
      "Pandas",
      "OpenCv",
    ],
    icons: [
      <SiPytorch size={24} />,
      <SiTensorflow size={24} />,
      <SiOpenai size={24} />,
      <SiNumpy size={24} />,
      <SiScikitlearn size={24} />,
      <SiPandas size={24} />,
      <SiOpencv size={24} />,
    ],
  },
  {
    title: "BACKEND",
    skills: ["NodeJs", "ExpressJs", "Django", "MongoDB"],
    icons: [
      <FaNodeJs size={24} />,
      <SiExpress size={24} />,
      <SiDjango size={24} />,
      <SiMongodb size={24} />,
    ],
  },
  {
    title: "DEVELOPMENT TOOLS",
    skills: [
      "Github",
      "AWS",
      "Lambda",
      "Git",
      "Docker",
      "EC2",
      "Render",
      "GitHubActions",
    ],
    icons: [
      <SiGithub size={24} />,
      <FaAws size={24} />,
      <SiAwslambda size={24} />,
      <FaGitAlt size={24} />,
      <FaDocker size={24} />,
      <SiAmazonec2 size={24} />,
      <SiRender size={24} />,
      <SiGithubactions size={24} />,
    ],
  },
  {
    title: "PROGRAMMING LANGUAGES",
    skills: ["JavaScript", "Python", "TypeScript"],
    icons: [
      <TbBrandJavascript size={24} />,
      <FaPython size={24} />,
      <SiTypescript size={24} />,
    ],
  },
];

export function InfiniteMovingSkills() {
  return (
    <>
      <div
        className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
        name="skill"
      >
        <h1 className="text-center pt-5 text-white text-4xl md:text-6xl font-raleway mb-20">
          SKILLS
        </h1>
        <InfiniteMovingCards items={skills} direction="right" speed="slow" />
      </div>
    </>
  );
}
