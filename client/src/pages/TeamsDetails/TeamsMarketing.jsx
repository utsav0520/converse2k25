import TeamSection from "../../components/App/TeamSection";
import siddharth from "../../assets/StudentsData/Marketing/marketing_siddhu.png";
import megh from "../../assets/StudentsData/Marketing/Marketing_MeghAdvani.PNG";
import BackToTeams  from "../../components/App/BackToTeams";

import manav from "../../assets/StudentsData/Marketing/marketing_manavTarshariya.png";
import khushiS from "../../assets/StudentsData/Marketing/MarketingTeam_Khushi Shah.png";
import jal from "../../assets/StudentsData/Marketing/Marketing_Jal Parekh.png";
import yasvi from "../../assets/StudentsData/Marketing/marketing_Yasvi_Kabariya.png";
import nupur from "../../assets/StudentsData/Marketing/Marketing_Nupur_Athaviya-removebg-preview.png";
import shreya from "../../assets/StudentsData/Marketing/marketing_shreya_patel-removebg-preview.png";
import mahiben from "../../assets/StudentsData/Marketing/Marketing_Mahi_Patel-removebg-preview.png";
import dhwani from "../../assets/StudentsData/Marketing/Marketing_Dhwani Athaviya.png";
import felicson from "../../assets/StudentsData/Marketing/MarketingTeam_Felicson.png";
import smit from "../../assets/StudentsData/Marketing/Marketing_Smit_Vyas-removebg-preview.png";
import dheeraj from "../../assets/StudentsData/Marketing/Marketing_Dheeraj Kumawat.png";
import pragati from "../../assets/StudentsData/Marketing/Marketing_Pragati_Patel-removebg-preview.png";
import kanishk from "../../assets/StudentsData/Not/maleNot.png";
import hetashvi from "../../assets/StudentsData/Marketing/Marketing_hetashvi_patil__1_-removebg-preview.png";
import khushiB from "../../assets/StudentsData/Marketing/Marketing_khushi_bhavsar-removebg-preview.png";
import firdosh from "../../assets/StudentsData/Marketing/Marketing_team__Firdosh_Pothiyawala__20250829_162027_0000-removebg-preview.png";
import roshan from "../../assets/StudentsData/Marketing/Marketing_Roshan Patel.png";
import dhyan from "../../assets/StudentsData/Marketing/Marketing_Dhyan_Chawda-removebg-preview.png";
import dev from "../../assets/StudentsData/Marketing/Marketing_Dev Suthar.png.PNG";
import kartavya from "../../assets/StudentsData/Marketing/Marketing_Kartavya_Vegad-removebg-preview.png";

function TeamsMarketing() {
  const eventCoordinators = [
    { name: "Siddharth Ghoghari", image: siddharth },
    { name: "Megh Advani", image: megh },
  ];

  const eventVoluntree = [
    { name: "Manav Tarsariya", image: manav },
    { name: "Khushi Shah", image: khushiS },
    { name: "Jal Parekh", image: jal },
    { name: "Yasvi Kabariya", image: yasvi },
    { name: "Nupur Athaviya", image: nupur },
    { name: "Shreya Patel", image: shreya },
    { name: "Mahiben Patel", image: mahiben },
    { name: "Dhwani Athaviya", image: dhwani },
    { name: "Felicson Savio", image: felicson },
    { name: "Smit Vyas", image: smit },
    { name: "Dheeraj Kumawat", image: dheeraj },
    { name: "Pragati Patel", image: pragati },
    { name: "Kanishk Dalal", image: kanishk },
    { name: "Hetashvi Patil", image: hetashvi },
    { name: "Khushi Bhavsar", image: khushiB },
    { name: "Firdosh Pothiyawala", image: firdosh },
    { name: "Roshan Patel", image: roshan },
    { name: "Dhyan Chawda", image: dhyan },
    { name: "Dev Suthar", image: dev },
    { name: "Kartavya Vegad", image: kartavya },
  ];

  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen text-white overflow-hidden bg-gradient-to-b from-black via-purple-950 to-black">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 w-full h-full animate-twinkling-stars bg-[url('/textures/starry-bg.png')] bg-cover opacity-50" />
      <div className="absolute inset-0 z-10 w-full h-full animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:rounded-full before:blur-3xl" />

      {/* Sections */}
      <div className="relative z-40 w-full max-w-7xl mx-auto">
        <TeamSection
          title="Marketing Team Coordinators"
          members={eventCoordinators}
          imageBgClass="bghead"
        />

        <TeamSection
          title="Marketing Team Members"
          members={eventVoluntree}
          imageBgClass="bgvoluntree"
        />
      </div>
      <BackToTeams />
    </div>
  );
}

export default TeamsMarketing;
