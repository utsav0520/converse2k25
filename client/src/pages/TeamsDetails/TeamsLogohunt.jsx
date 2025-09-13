import TeamSection from "../../components/App/TeamSection";
import bhumika from "../../assets/StudentsData/Faculty/bhumika.png";
import palak from "../../assets/StudentsData/Faculty/plack.png";
import sujal from "../../assets/StudentsData/Logohunt/Logohunt_Sujal Thakkar.png";
import daksh from "../../assets/StudentsData/Logohunt/LogoHunt_Daksh_Aghera.png";
import shrey from "../../assets/StudentsData/Logohunt/Logohunt_shrey_dhola.png";
import rajbhoi from "../../assets/StudentsData/Logohunt/Logohunt_Dev Rajbhoi.png";
import drashti from "../../assets/StudentsData/Logohunt/Logohunt_Drashti Nimavat.png";
import shlok from "../../assets/StudentsData/Logohunt/Logohunt_ShlokSutariya.png";
import dhvanit from "../../assets/StudentsData/Logohunt/LogoHunt_Dhvanit Panchani.png";
import yamini from "../../assets/StudentsData/Logohunt/Logo_Hunt__Yamini_Tandel.png";
import devangi from "../../assets/StudentsData/Logohunt/Logo_Hunt_Devangi_Adalja.png";
import hetvi from "../../assets/StudentsData/Logohunt/Logo_hunt_Hetvi_Patel.png";
import BackToTeams from "../../components/App/BackToTeams";

function TeamsLogohunt() {
  const facultyCoordinators = [
    { name: "Prof. Bhumika Patel", image: bhumika },
    { name: "Prof. Palak Desai", image: palak },
  ];

  const eventCoordinators = [
    { name: "Sujal Thakkar", image: sujal },
    { name: "Daksh Aghera", image: daksh },
    { name: "Shrey Dhola", image: shrey },
  ];

  const eventVoluntree = [
    { name: "Rajbhoi Dev", image: rajbhoi },
    { name: "Drashti Nimavat", image: drashti },
    { name: "Shlok Sutariya", image: shlok },
    { name: "Dhvanit Panchani", image: dhvanit },
    { name: "Yamini Tandel", image: yamini },
    { name: "Devangi Adalja", image: devangi },
    { name: "Hetvi Patel", image: hetvi },
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

export default TeamsLogohunt;
