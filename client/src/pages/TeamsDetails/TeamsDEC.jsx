import TeamSection from "../../components/App/TeamSection";
import tisha from "../../assets/StudentsData/Decoration/Decoration_Tisha_Sutariya_-removebg-preview.png";
import rudra from "../../assets/StudentsData/Decoration/Decoration._Rudra_Lakhani.png";
import neki from "../../assets/StudentsData/Decoration/Decoration_Neki Lakhani .PNG";
import khushiB from "../../assets/StudentsData/Decoration/Decorations_Khushi_Bharodiya-removebg-preview.png";
import divya from "../../assets/StudentsData/Decoration/decoration-divya-sharma-removebg-preview.png";
import shreya from "../../assets/StudentsData/Decoration/Decoration_shreya_patel_1.png";
import mili from "../../assets/StudentsData/Decoration/Decoration_Mili_Moradiya-removebg-preview.png";
import dharmika from "../../assets/StudentsData/Decoration/Decoration_Dharmika_Gajera.png";
import ashvini from "../../assets/StudentsData/Decoration/Decoration_Ashvini_Dahivelkar-removebg-preview.png";
import dhruvil from "../../assets/StudentsData/Decoration/decoration_dhruvil_sardhara-removebg-preview.png";
import dangsiya from "../../assets/StudentsData/Decoration/Decoration_Dhruvi_Dangsiya.png";
import dhruviK from "../../assets/StudentsData/Decoration/Decoration_Dhruvi_Kuvadiya-removebg-preview.png";
import stuti from "../../assets/StudentsData/Not/girlNot.png";
import rushabh from "../../assets/StudentsData/Decoration/Decoration_Rushabh_Devani.png";
import harsh from "../../assets/StudentsData/Decoration/Decoration._Harsh_Ajudiya.png";
import shashank from "../../assets/StudentsData/Decoration/Decoration_Shashank_Pansuriya.png";
import dill from "../../assets/StudentsData/Decoration/Decoration_Dil_Jain.png";
import BackToTeams  from "../../components/App/BackToTeams";

function TeamsDEC() {
  const eventCoordinators = [
    { name: "Tisha Sutariya", image: tisha },
    { name: "Rudra Lakhani", image: rudra },
    { name: "Neki Lakhani", image: neki },
  ];

  const eventVoluntree = [
    { name: "Khushi Bharodiya", image: khushiB },
    { name: "Divya Sharma", image: divya },
    { name: "Shreya Patel", image: shreya },
    { name: "Mili Mordiya", image: mili },
    { name: "Dharmika Gajera", image: dharmika },
    { name: "Ashvini Dahivelkar", image: ashvini },
    { name: "Dhruvil Sardhara", image: dhruvil },
    { name: "Dangsiya Dhruvi", image: dangsiya },
    { name: "Dhruvi Kuvadiya", image: dhruviK },
    { name: "Stuti Kanani", image: stuti },
    { name: "Rushabh Devani", image: rushabh },
    { name: "Harsh Ajudiya", image: harsh },
    { name: "Shashank Pansuriya", image: shashank },
    { name: "Dill Jaiin", image: dill },
  ];

  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen text-white overflow-hidden bg-gradient-to-b from-black via-purple-950 to-black">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 w-full h-full animate-twinkling-stars bg-[url('/textures/starry-bg.png')] bg-cover opacity-50" />
      <div className="absolute inset-0 z-10 w-full h-full animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:rounded-full before:blur-3xl" />

      {/* Sections */}
      <div className="relative z-40 w-full max-w-7xl mx-auto">
        <TeamSection
          title="Decoration Team Coordinators"
          members={eventCoordinators}
          imageBgClass="bghead"
        />

        <TeamSection
          title="Decoration Team Members"
          members={eventVoluntree}
          imageBgClass="bgvoluntree"
        />
      </div>
      <BackToTeams />
    </div>
  );
}

export default TeamsDEC;
