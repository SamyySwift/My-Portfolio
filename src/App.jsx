import { ProjectGrid } from "./sections/ProjectSection";
import HeroSection from "./sections/HeroSection";
import NavBarSection from "./sections/NavBarSection";
import CertificateGrid from "./sections/CertificateSection";
import Sidebar from "./sections/SideBar";
import { Experience } from "./sections/ExperienceSection";
import { InfiniteMovingSkills } from "./sections/SkillSection";

function App() {
  // bg-gradient-to-br from-black via-neutral-700 to-black bg-cover
  return (
    <>
      <div className="bg-black overflow-x-hidden">
        <NavBarSection />

        <main className="">
          <Sidebar />
          <section className="">
            <HeroSection />
          </section>
          <section className="bg-gradient-to-tr from-black via-neutral-900 to-black">
            <ProjectGrid />
          </section>
          <section className="">
            <InfiniteMovingSkills />
          </section>
          <section className="bg-gradient-to-tr from-black via-neutral-900 to-black">
            <Experience />
          </section>
          <section className="">
            <CertificateGrid />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
