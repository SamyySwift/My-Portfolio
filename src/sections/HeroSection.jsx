// import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import Typewriter from "typewriter-effect";
import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div
      className="flex items-center min-h-[40rem] md:justify-around justify-center"
      name="home"
    >
      <div className="flex flex-col md:max-w-[400px] lg:max-w-[600px] md:gap-5 gap-2">
        <div className="text-center md:text-left text-2xl text-white md:text-5xl font-bold mb-4 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileHover={{ y: -7 }}
            whileTap={{ scale: 0.95 }}
            style={{ display: "inline-block" }} // Ensures motion.div behaves as an inline-block element
            className="text-white text-center poppins font-bold"
          >
            Samuel Okon
          </motion.div>
        </div>
        <div className="dark:text-white text-black text-center md:text-left text-2xl md:text-4xl poppins">
          I am a {""}
          <span className=" inline-block text-md text-sky-500">
            <Typewriter
              options={{
                strings: [
                  "Machine Learning Engineer",
                  "Data Scientist",
                  "Backend Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        <p className="text-neutral-50 font-light text-justify mx-20 md:mx-0 poppins-extralight">
          Experienced Machine Learning Engineer with 2 years of hands-on
          expertise in building full-stack generative AI projects using the MERN
          stack, Amazon Bedrock, Langchain, OpenAI, and Hugging Face. A valuable
          addition to any team, committed to delivering innovative solutions and
          driving success.
        </p>
        {/* <a href="https://www.resume.com/resume/builder/a0eca78d-30ea-497c-8ed0-65132929998d">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm mx-20 md:mx-0 ">
            My Resume
          </button>
        </a> */}
      </div>

      <motion.div
        initial={{ x: "100vw" }} // Start off-screen to the right
        animate={{ x: 0 }} // Slide in to x = 0
        transition={{ duration: 2, ease: "easeInOut" }} // Animation duration
        className="hidden md:flex md:max-w-96 md:max-h-100 "
      >
        <img
          src={profile}
          alt="Your Image"
          className=" object-cover rounded-xl"
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
