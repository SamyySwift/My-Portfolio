import { FloatingNav } from "../components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";
import { SiOpenproject } from "react-icons/si";
import {
  FaCircleUser,
  FaToolbox,
  FaCertificate,
  FaBriefcase,
} from "react-icons/fa6";

const NavBarSection = () => {
  const navItems = [
    {
      name: "Home",
      link: "home",
      icon: <FaHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "skill",
      icon: <FaToolbox className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "project",
      icon: (
        <SiOpenproject className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Experience",
      link: "experience",
      icon: (
        <FaBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Certifications",
      link: "certificate",
      icon: (
        <FaCertificate className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "contact",
      icon: (
        <FaCircleUser className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
};

export default NavBarSection;
