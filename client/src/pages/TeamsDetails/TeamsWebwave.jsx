import TeamSection from "../../components/App/TeamSection";
import vivek from "../../assets/StudentsData/Faculty/vivek.png";
import mitul from "../../assets/StudentsData/Faculty/mitul.png";
import krishna from "../../assets/StudentsData/Webwave/WebWave_Panchal Krishna.png";
import manan from "../../assets/StudentsData/Webwave/WebWave_Manan_Chovatiya.png";
import nency from "../../assets/StudentsData/Webwave/Webwave_Nency_khunt.png";
import vishva from "../../assets/StudentsData/Webwave/Wabwave_Vishva_Bharodia.png";
import krish from "../../assets/StudentsData/Webwave/WebWave_Krish_kakadiya.png";
import utsav from "../../assets/StudentsData/Webwave/Webwave_utsav_davariya.png";
import sakshi from "../../assets/StudentsData/Webwave/Webwave_Sakshi_Jain.png";
import fenil from "../../assets/StudentsData/Webwave/Webwave_dhriti_jhaveri.png";
import BackToTeams from "../../components/App/BackToTeams";

function TeamsWebwave() {
  const facultyCoordinators = [
    { name: "Prof. Vivek Champaneriya", image: vivek },
    { name: "Prof. Mitul Patel", image: mitul },
  ];

  const eventCoordinators = [
    { name: "Krishna Panchal", image: krishna },
    { name: "Manan Chovatiya", image: manan },
    { name: "Nency Khunt", image: nency },
  ];

  const eventVoluntree = [
    { name: "Vishva Bharodia", image: vishva },
    { name: "Krish Kakadiya", image: krish },
    { name: "Utsav Davaria", image: utsav },
    { name: "Sakshi Jain", image: sakshi },
    { name: "Dhriti Mehul Jhaveri", image: fenil },
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

export default TeamsWebwave;
