import TeamSection from "../../components/App/TeamSection";
import mitali from "../../assets/StudentsData/Faculty/mitali.png";
import krishma from "../../assets/StudentsData/Faculty/karishma.png";
import vibha from "../../assets/StudentsData/Faculty/vibha.png";
import vyoma from "../../assets/StudentsData/PromptHunt/prompthunt_vyomakapadia.png";
import twisha from "../../assets/StudentsData/PromptHunt/PromptHunt_Twisha_Savani.png";
import kevadiya from "../../assets/StudentsData/PromptHunt/Prompthunt_Dhruvit_Kevadiya.png";
import harshav from "../../assets/StudentsData/PromptHunt/PromptHunt_HarshavMoradiya.PNG";
import om from "../../assets/StudentsData/PromptHunt/PromptHunt_OmDavariya.png";
import dharm from "../../assets/StudentsData/PromptHunt/PromptHunt_DharmPatel.png";
import krisha from "../../assets/StudentsData/PromptHunt/PromptHunt_KrishaKoshiya.png";
import shreya from "../../assets/StudentsData/PromptHunt/PromptHunt_ShriyaAgrawal.png";
import bhavya from "../../assets/StudentsData/PromptHunt/PromptHunt_BhavyaLadumor.png";
import BackToTeams from "../../components/App/BackToTeams";

function TeamsPrompthunt() {
  const facultyCoordinators = [
    { name: "Dr. Mitali Desai", image: mitali },
    { name: "Prof. Krishma Desai", image: krishma },
    { name: "Dr. Vibha Patel", image: vibha },
  ];

  const eventCoordinators = [
    { name: "Vyoma Kapadiya", image: vyoma },
    { name: "Twisha Savani", image: twisha },
    { name: "Kevadiya Dhruvit", image: kevadiya },
  ];

  const eventVoluntree = [
    { name: "Harshav Moradiya", image: harshav },
    { name: "Om Davariya", image: om },
    { name: "Dharm Patel", image: dharm },
    { name: "Krisha Koshiya", image: krisha },
    { name: "Shreya Agrawal", image: shreya },
    { name: "Bhavya Ladumor", image: bhavya },
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

export default TeamsPrompthunt;
