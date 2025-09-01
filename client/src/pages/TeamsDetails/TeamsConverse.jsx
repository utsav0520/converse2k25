import TeamSection from "../../components/App/TeamSection";
import man from "../../assets/StudentsData/Not/maleNot.png";
import girl from "../../assets/StudentsData/Not/girlNot.png";
import uv from "../../assets/StudentsData/Head/Head_UtsavVachhani.png";
import harshil from "../../assets/StudentsData/Head/head_harshil.png";
import shrutiK from "../../assets/StudentsData/Head/Head_shruti_kakadiya.png";
import suhani from "../../assets/StudentsData/Head/Head_SuhaniPadmani.png";
import BackToTeams  from "../../components/App/BackToTeams";

function TeamsConverse() {
  const facultyCoordinators = [
    { name: "Prof. Nitya Komalan", image: girl },
    { name: "Dr. Krishna Samarth Delvadia", image: girl },
    { name: "Prof. Ashishkumar Ranchhodbhai Chaudhari", image: man },
    { name: "Prof. Dhaval J. Rana", image: man },
  ];

  const eventCoordinators = [
    { name: "Utsav Vachhani", image: uv },
    { name: "Harshil Gajipara", image: harshil },
    { name: "Shruti Kakadiya", image: shrutiK },
    { name: "Suhani Padmani", image: suhani },
  ];

  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen text-white overflow-hidden bg-gradient-to-b from-black via-purple-950 to-black">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 w-full h-full animate-twinkling-stars bg-[url('/textures/starry-bg.png')] bg-cover opacity-50" />
      <div className="absolute inset-0 z-10 w-full h-full animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:rounded-full before:blur-3xl" />

      {/* Sections */}
      <div className="relative z-40 w-full max-w-7xl mx-auto">
        <TeamSection
          title="Faculty Coordinators"
          members={facultyCoordinators}
          imageBgClass="bgfaculty"
        />

        <TeamSection
          title="Student Coordinators"
          members={eventCoordinators}
          imageBgClass="bghead"
        />
      </div>

      <BackToTeams />
    </div>
  );
}

export default TeamsConverse;
