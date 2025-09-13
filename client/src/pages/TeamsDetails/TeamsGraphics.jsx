import TeamSection from "../../components/App/TeamSection";
import krisha from "../../assets/StudentsData/Graphics/GraphicsLead_KrishaKeraliya.png";
import shiven from "../../assets/StudentsData/Graphics/Graphics_shivenParamar.png";
import sanchi from "../../assets/StudentsData/Graphics/Graphics_SanchiSavani.png";
import twisha from "../../assets/StudentsData/Graphics/Graphics_Twisha Savani.png";
import kavya from "../../assets/StudentsData/Graphics/Graphics_Kavya_Bhalala.png";
import krushali from "../../assets/StudentsData/Graphics/Graphic_krushali.png";
import kangna from "../../assets/StudentsData/Graphics/graphics_Kangna_Gupta.png";
import arayan from "../../assets/StudentsData/Graphics/Graphics_Aryan Chopda.png";
import charmi from "../../assets/StudentsData/Graphics/Graphics_charmi mayani.png";
import riya from "../../assets/StudentsData/Graphics/Graphics_Riya Pipalwa.png";
import urja from "../../assets/StudentsData/Graphics/graphics_Urja_Mistry.png";
import BackToTeams  from "../../components/App/BackToTeams";


function TeamsGraphics() {
  const eventCoordinators = [
    { name: "Shiven Parmar", image: shiven },
    { name: "Sanchi Savani", image: sanchi },
    { name: "Krisha Keraliya", image: krisha },
  ];

  const eventVoluntree = [
    { name: "Twisha Savani", image: twisha },
    { name: "Kavya Bhalala", image: kavya },
    { name: "Krushali Gohil", image: krushali },
    { name: "Kangna Gupta", image: kangna },
    { name: "Arayan Chopra", image: arayan },
    { name: "Charmi Mayani", image: charmi },
    { name: "Riya Pipalwa", image: riya },
    { name: "Urja Mistry", image: urja },
  ];

  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen text-white overflow-hidden bg-gradient-to-b from-black via-purple-950 to-black">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 w-full h-full animate-twinkling-stars bg-[url('/textures/starry-bg.png')] bg-cover opacity-50" />
      <div className="absolute inset-0 z-10 w-full h-full animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:rounded-full before:blur-3xl" />

      {/* Sections */}
      <div className="relative z-40 w-full max-w-7xl mx-auto">
        <TeamSection
          title="Graphics Team Coordinators"
          members={eventCoordinators}
          imageBgClass="bghead"
        />

        <TeamSection
          title="Graphics Team Members"
          members={eventVoluntree}
          imageBgClass="bgvoluntree"
        />
      </div>
      <BackToTeams />
    </div>
  );
}

export default TeamsGraphics;
