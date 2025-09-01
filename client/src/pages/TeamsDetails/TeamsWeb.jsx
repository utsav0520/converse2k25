import TeamSection from "../../components/App/TeamSection";
import ganjo from "../../assets/StudentsData/WebTeam/WebTeam_JayGanjawala.PNG";
import PV from "../../assets/StudentsData/WebTeam/WebTeam_PV.png";
import Rishi from "../../assets/StudentsData/WebTeam/WebTeam_Rishii_Ginoya.png";
import Yashvi from "../../assets/StudentsData/WebTeam/WebTeam_YashviDihora.png";
import Darshti from "../../assets/StudentsData/WebTeam/WebTeam_DrashtiKalathiya.png";
import Bhavya from "../../assets/StudentsData/WebTeam/WebTeam_BhavyaLadumor.png";
import BackToTeams  from "../../components/App/BackToTeams";


function TeamsWeb() {
  const eventCoordinators = [
    { name: "Jay Ganjawala", image: ganjo },
    { name: "Prince Viradiya", image: PV },
  ];

  const eventVoluntree = [
    { name: "Rishi Ginoya", image: Rishi },
    { name: "Yashvi Dihora", image: Yashvi },
    { name: "Drashti Kalathiya", image: Darshti },
    { name: "Bhavya Ladumor", image: Bhavya },
  ];

  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen text-white overflow-hidden bg-gradient-to-b from-black via-purple-950 to-black">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 w-full h-full animate-twinkling-stars bg-[url('/textures/starry-bg.png')] bg-cover opacity-50" />
      <div className="absolute inset-0 z-10 w-full h-full animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:rounded-full before:blur-3xl" />

      {/* Sections */}
      <div className="relative z-40 w-full max-w-7xl mx-auto">
        <TeamSection
          title="Web Team Coordinators"
          members={eventCoordinators}
          imageBgClass="bghead"
        />

        <TeamSection
          title="Web Team Members"
          members={eventVoluntree}
          imageBgClass="bgvoluntree"
        />
      </div>
      <BackToTeams />
    </div>
  );
}

export default TeamsWeb;
