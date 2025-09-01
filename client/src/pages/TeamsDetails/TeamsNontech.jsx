import TeamSection from "../../components/App/TeamSection";
import neel from "../../assets/StudentsData/NonTech/nontech_neelman.png";
import manavA from "../../assets/StudentsData/NonTech/nontech_avaiya.png";
import rushabh from "../../assets/StudentsData/NonTech/BGMI_Rushabh_Devani.png";
import aryan from "../../assets/StudentsData/NonTech/BGMI__Aryan_Pandey.png";
import siddharth from "../../assets/StudentsData/NonTech/NonTech_siddhu.png";
import manavT from "../../assets/StudentsData/NonTech/NonTech_manavTarshariya.png";
import kadu from "../../assets/StudentsData/NonTech/NonTech_Kadu Parth.png";
import tejas from "../../assets/StudentsData/Not/maleNot.png";
import adarsh from "../../assets/StudentsData/Not/maleNot.png";
import digaj from "../../assets/StudentsData/NonTech/IPLAuction_Digaj_Patel.png";
import snehal from "../../assets/StudentsData/Not/maleNot.png";
import kush from "../../assets/StudentsData/Not/maleNot.png";
import dwarkesh from "../../assets/StudentsData/Not/maleNot.png";
import jal from "../../assets/StudentsData/NonTech/Traitors_Jal Parekh.png";
import roshan from "../../assets/StudentsData/NonTech/Traitors_Roshan Patel.png";
import priyanshi from "../../assets/StudentsData/NonTech/Mystic_Mover_Modi_Priyanshi.png";
import hetavi from "../../assets/StudentsData/NonTech/Mystic_Mover_Ganatra_Hetavi.png";
import manal from "../../assets/StudentsData/NonTech/Mystic_Mover_Parekh.png";
import dhruv from "../../assets/StudentsData/NonTech/FFM_Joraviya Dhruv H.png";
import karansinh from "../../assets/StudentsData/NonTech/FFM_KARANSINH_ADAMAR.png";
import darshan from "../../assets/StudentsData/NonTech/FFM_DARSHAN_PATEL.png";
import BackToTeams  from "../../components/App/BackToTeams";

function TeamsNontech() {
  const eventCoordinators = [
    { name: "Neel Mandakana", image: neel },
    { name: "Manav Avaiya", image: manavA },
  ];

  const eventVoluntree = [
    { name: "Rushabh Devani", image: rushabh },
    { name: "Aryan Pandey", image: aryan },
    { name: "Siddharth Ghoghari", image: siddharth },
    { name: "Manav Tarsariya", image: manavT },
    { name: "Kadu Parth", image: kadu },
    { name: "Dasari Tejas", image: tejas },
    { name: "Pasikanti Adarsh", image: adarsh },
    { name: "Digaj Patel", image: digaj },
    { name: "Snehal Rapolu", image: snehal },
    { name: "Jal Parekh", image: jal },
    { name: "Roshan Patel", image: roshan },
    { name: "Kush Patel", image: kush },
    { name: "Priyanshi Modi", image: priyanshi },
    { name: "Hetavi Ganatra", image: hetavi },
    { name: "Manal Parekh", image: manal },
    { name: "Gediya Dwarkesh", image: dwarkesh },
    { name: "Dhruv Joraviya", image: dhruv },
    { name: "Admar Karansinh", image: karansinh },
    { name: "Patel Darshan", image: darshan },
  ];

  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen text-white overflow-hidden bg-gradient-to-b from-black via-purple-950 to-black">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 w-full h-full animate-twinkling-stars bg-[url('/textures/starry-bg.png')] bg-cover opacity-50" />
      <div className="absolute inset-0 z-10 w-full h-full animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:rounded-full before:blur-3xl" />

      {/* Sections */}
      <div className="relative z-40 w-full max-w-7xl mx-auto">
        <TeamSection
          title="Non-Tech Coordinators"
          members={eventCoordinators}
          imageBgClass="bghead"
        />

        <TeamSection
          title="Non-Tech Event Heads"
          members={eventVoluntree}
          imageBgClass="bgvoluntree"
        />
      </div>
      <BackToTeams />
    </div>
  );
}

export default TeamsNontech;
