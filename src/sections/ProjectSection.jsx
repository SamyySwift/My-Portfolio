import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { FaGithub } from "react-icons/fa6";
import { SiSimilarweb } from "react-icons/si";

const ThreeDCard = ({
  title,
  description,
  imgUrl,
  isDeployed,
  github,
  link,
}) => {
  return (
    <CardContainer className=" max-w-[370px] max-h-[300px]">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {/* Make things float in air */}
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm dark:text-neutral-300 poppins-light"
        >
          {/* Hover over this card to unleash the power of CSS perspective */}
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-3">
          <img
            src={imgUrl}
            height="200"
            width="200"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-3">
          <CardItem
            translateZ={20}
            as="button"
            className="rounded-xl text-xs font-normal dark:text-white"
          >
            {isDeployed && (
              <a href={link}>
                <button className="flex items-center px-3 py-2 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
                  Demo
                  <SiSimilarweb className="ml-1" />
                </button>
              </a>
            )}
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-3 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white font-semibold "
          >
            <a href={github} className="flex items-center">
              <FaGithub className="mr-1" />
              Code
            </a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export const ProjectGrid = () => {
  const url =
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const projects = [
    {
      title: "Diet Detective AI Bot",
      description:
        "A food app leveraging AI to analyze food images and offer tailored dietary recommendations based on your restrictions.",
      imgUrl: "/dd.png",
      isDeployed: true,
      link: "https://diet-detective-ai-bot.onrender.com",
      github: "https://github.com/SammSwift/Diet-Detective-AI-Bot",
    },
    {
      title: "Plant Disease Detection",
      description:
        "Developed a system that leverages computer vision technology to revolutionize the way farmers detect and manage plant diseases.",
      imgUrl: "/plant-detector.png",
      isDeployed: false,
      link: "",
      github: "https://github.com/SammSwift/Plant-Disease-Detector",
    },
    {
      title: "Swift Store",
      description:
        "A fullstack online E-commerce store for buying tech products coupled with user authentication and an admin dashborad.",
      imgUrl: "/ecommerce.png",
      isDeployed: true,
      link: "https://swiftstore.onrender.com/",
      github: "https://github.com/SammSwift/SwiftStore/tree/main",
    },

    {
      title: "Driver Drowsiness Detector",
      description:
        "A real-time video analytics tool that monitors a driver's alertness while driving, triggering an alarm if signs of drowsiness are detected.",
      imgUrl: "/Driver-Drowsiness-Detection.jpg",
      isDeployed: true,
      link: "https://youtube.com/shorts/mksNEUcQsuA?si=-EPDAi_234K3OrFC",
      github: "https://github.com/SammSwift/Driver-Drowsiness-Detector",
    },
    {
      title: "Patient Mortality Predictor",
      description:
        "Implemented a deep neural network model to predict patient mortality from time series data contained in patient records.",
      imgUrl: "/mortality.webp",
      link: "",
      isDeployed: false,
      github:
        "https://github.com/SammSwift/Patient-Mortality-Detection-Using-DeepLearning",
    },
    {
      title: "Movie Recommendation App",
      description:
        "A collaborative-filtering recommendation system that recommends movies to users based on their past interactions.",
      imgUrl: "/movie-rec.jpg",
      isDeployed: false,
      link: "",
      github: "https://github.com/SammSwift/Movie-Recommender-System",
    },
  ];
  return (
    <div>
      <h1 className="text-center py-10 text-white text-4xl md:text-6xl font-raleway">
        PROJECTS
      </h1>
      {/* <SparklesPreview /> */}
      <div
        className="grid grid-cols-1 md:gap-x-12 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-y-1"
        name="project"
      >
        {projects.map((project, index) => (
          <ThreeDCard
            title={project.title}
            description={project.description}
            imgUrl={project.imgUrl}
            isDeployed={project.isDeployed}
            link={project.link}
            github={project.github}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
