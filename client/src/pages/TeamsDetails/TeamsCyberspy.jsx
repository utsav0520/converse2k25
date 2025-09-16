import TeamSection from "../../components/App/TeamSection";
import ashish from "../../assets/StudentsData/Faculty/ashishK.png";
import ankit from "../../assets/StudentsData/Faculty/ark.png";
import rahul from "../../assets/StudentsData/Cyberspy/Cyberspy_RahulSoni.png";
import rushel from "../../assets/StudentsData/Cyberspy/cyberspy_rusheeldhandhaly.png";
import manan from "../../assets/StudentsData/Cyberspy/CYBER-SPY_Manan shah.PNG";
import diya from "../../assets/StudentsData/Cyberspy/Cyberspy_DiyaPatel.png";
import dharmi from "../../assets/StudentsData/Cyberspy/Cyberspy_DharmiSonani.png";
import vanshika from "../../assets/StudentsData/Cyberspy/CyberSpy_VanshikaKoshiya-removebg-preview.png";
import yashvi from "../../assets/StudentsData/Cyberspy/CyberSpy_YashviBhatt-removebg-preview.png";
import BackToTeams from "../../components/App/BackToTeams";

function TeamsCyberspy() {
  const facultyCoordinators = [
    { name: "Prof. Ashish Kharwar", image: ashish },
    { name: "Prof. Ankit Kharwar", image: ankit },
  ];

  const eventCoordinators = [
    { name: "Rahul Soni", image: rahul },
    { name: "Rushel Dhandheliy", image: rushel },
    { name: "Manan Shah", image: manan },
  ];

  const eventVoluntree = [
    { name: "Diya Patel", image: diya },
    { name: "Dharmi Sonani", image: dharmi },
    { name: "Vanshika Koshiya", image: vanshika },
    { name: "Yashvi Bhatt", image: yashvi },
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

export default TeamsCyberspy;
