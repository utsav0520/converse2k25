import TeamSection from "../../components/App/TeamSection";
import dhyani from "../../assets/StudentsData/Faculty/dhayani.png";
import mitual from "../../assets/StudentsData/Faculty/mitul.png";
import jil from "../../assets/StudentsData/Bugbuzz/BugBuzz_Rupani Jil.png";
import sujalPandav from "../../assets/StudentsData/Bugbuzz/BugBuzz_SujalPandav.png";
import renil from "../../assets/StudentsData/Bugbuzz/BugBuzz_Renil_Dholariya.png";
import parth from "../../assets/StudentsData/Bugbuzz/BugBuzz_Kadu Parth.png";
import jenee from "../../assets/StudentsData/Bugbuzz/Bugbuzz_jeneechanchad.png";
import tisha from "../../assets/StudentsData/Bugbuzz/BugBuzz_Tisha Goti.png";
import sneha from "../../assets/StudentsData/Bugbuzz/BugBuzz_Sneha Donga .png";
import jevin from "../../assets/StudentsData/Bugbuzz/BugBuzz_Jevin.png";
import sapnil from "../../assets/StudentsData/Not/maleNot.png";
import BackToTeams from "../../components/App/BackToTeams";

function TeamsBugbuzz() {
  const facultyCoordinators = [
    { name: "Prof. Dhyani Joshi", image: dhyani },
    { name: "Prof. Mitul Patel", image: mitual },
  ];

  const eventCoordinators = [
    { name: "Jil Rupani", image: jil },
    { name: "Sujalkumar Pandav", image: sujalPandav },
    { name: "Renil Dholariya", image: renil },
  ];

  const eventVoluntree = [
    { name: "Kadu Parth", image: parth },
    { name: "Jenee Chanchad", image: jenee },
    { name: "Tisha Goti", image: tisha },
    { name: "Donga Sneha", image: sneha },
    { name: "Jevin Katrodiya", image: jevin },
    { name: "Sapnil Savani", image: sapnil },
  ];

  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen text-white overflow-hidden bg-gradient-to-b from-black via-purple-950 to-black">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 w-full h-full animate-twinkling-stars bg-[url('/textures/starry-bg.png')] bg-cover opacity-50" />
      <div className="absolute inset-0 z-10 w-full h-full animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:rounded-full before:blur-3xl" />

      {/* Sections */}
      <div className="relative z-40 w-full max-w-7xl mx-auto">
        <TeamSection
          title="Faculty Event Heads"
          members={facultyCoordinators}
          imageBgClass="bgfaculty"
        />

        <TeamSection
          title="Student Event Heads"
          members={eventCoordinators}
          imageBgClass="bghead"
        />

        <TeamSection
          title="Event Volunteers"
          members={eventVoluntree}
          imageBgClass="bgvoluntree"
        />
      </div>

      <BackToTeams />
    </div>
  );
}

export default TeamsBugbuzz;
