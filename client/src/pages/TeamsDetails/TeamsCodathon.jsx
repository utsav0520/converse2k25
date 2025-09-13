import TeamSection from "../../components/App/TeamSection";
import HirenVavaiya from "../../assets/StudentsData/Faculty/hiren.png";
import AnkitPatel from "../../assets/StudentsData/Faculty/ankit.png";
import DeepPatel from "../../assets/StudentsData/Codathon/Codathon_Deep_H_Patel.png";
import VishwaGohil from "../../assets/StudentsData/Codathon/Codathon_vishwaGohil.png";
import MananChodvadiya from "../../assets/StudentsData/Codathon/codathon_Mananchodvadiya.png";
import ShlokSavaliya from "../../assets/StudentsData/Codathon/Codathon_Shlok_Savaliya.png";
import MokshaItaliya from "../../assets/StudentsData/Codathon/Codathon_Moksha_Italiya.png";
import KenviChaklasiya from "../../assets/StudentsData/Codathon/Codathon_Kenvi_Chaklasiya.png";
import KrishPatel from "../../assets/StudentsData/Not/maleNot.png";
import BansiGoyani from "../../assets/StudentsData/Codathon/codathon_bansi_goyani.png";
import BriyaMavani from "../../assets/StudentsData/Codathon/codathon_briya_mavani.png";
import BackToTeams from "../../components/App/BackToTeams";

function TeamsCodathon() {
  const facultyCoordinators = [
    { name: "Prof. Hiren Vavaiya", image: HirenVavaiya },
    { name: "Prof. Ankit Patel", image: AnkitPatel },
  ];

  const eventCoordinators = [
    { name: "Deep Patel", image: DeepPatel },
    { name: "Vishwa Gohil", image: VishwaGohil },
    { name: "Manan Chodvadiya", image: MananChodvadiya },
  ];

  const eventVoluntree = [
    { name: "Shlok Savaliya", image: ShlokSavaliya },
    { name: "Moksha Italiya", image: MokshaItaliya },
    { name: "Kenvi Chaklasiya", image: KenviChaklasiya },
    { name: "Krish Patel", image: KrishPatel },
    { name: "Bansi Goyani", image: BansiGoyani },
    { name: "Briya Mavani", image: BriyaMavani },
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

export default TeamsCodathon;
