import TeamSection from "../../components/App/TeamSection";
import dhruti from "../../assets/StudentsData/Faculty/dhruti.png";
import snehal from "../../assets/StudentsData/Faculty/snehal.png";
import vishwa from "../../assets/StudentsData/AIMemes/AI-MEMES_Vishwa Jariwala.png";
import jemis from "../../assets/StudentsData/AIMemes/AI- MEMES_JEMIS KEVADIYA.png";
import soham from "../../assets/StudentsData/AIMemes/AI-MEMES_Soham Patel.PNG";
import dhruvil from "../../assets/StudentsData/AIMemes/AIMEMES_Dhruvil Sorathiya.png";
import tirth from "../../assets/StudentsData/Not/maleNot.png";
import muskaan from "../../assets/StudentsData/AIMemes/AI-memes_Muskaan Patel.png";
import tushar from "../../assets/StudentsData/AIMemes/AI-MEMES_Tushar Kapoor.png";
import karan from "../../assets/StudentsData/AIMemes/AI-memes_Karan Mehta.png";
import BackToTeams  from "../../components/App/BackToTeams";

function TeamsAimemes() {
  const facultyCoordinators = [
    { name: "Dr. Dhruti Sharma", image: dhruti },
    { name: "Prof. Snehal Kathale", image: snehal },
  ];

  const eventCoordinators = [
    { name: "Vishwa Jariwala", image: vishwa },
    { name: "Jemis Kevadiya", image: jemis },
    { name: "Soham Patel", image: soham },
  ];

  const eventVoluntree = [
    { name: "Dhruvil Sorathiya", image: dhruvil },
    { name: "Tirth Hirpara", image: tirth },
    { name: "Muskaan Patel", image: muskaan },
    { name: "Tushar Kapoor", image: tushar },
    { name: "Karan Mehta", image: karan },
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

export default TeamsAimemes;
