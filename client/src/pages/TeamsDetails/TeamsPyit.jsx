import BackToTeams  from "../../components/App/BackToTeams";
import TeamSection from "../../components/App/TeamSection";
import man from "../../assets/StudentsData/Not/maleNot.png";
import girl from "../../assets/StudentsData/Not/girlNot.png";
import tanisha from "../../assets/StudentsData/PYIT/PYIT_Tanisha_Agarwal.png";
import het from "../../assets/StudentsData/PYIT/PYIT_het_salamvala.png";
import krishna from "../../assets/StudentsData/PYIT/PYIT_KrishnaShethna.png";
import harshil from "../../assets/StudentsData/PYIT/PYIT_Harshil_Parmar.png";
import huzefa from "../../assets/StudentsData/PYIT/PYIT_Huzefa_Mandviwala.png";
import vivek from "../../assets/StudentsData/PYIT/PYIT_Vivek_Panchal.png";
import aryan from "../../assets/StudentsData/PYIT/PYIT_Aryan_Patel.PNG";
import anushka from "../../assets/StudentsData/Not/girlNot.png";
import hetvi from "../../assets/StudentsData/Not/girlNot.png";

function TeamsPyit() {
  const facultyCoordinators = [
    { name: "Dr. Vivaksha Jariwala", image: girl },
    { name: "Prof. Mukesh Patel", image: man },
  ];

  const eventCoordinators = [
    { name: "Tanisha Agarwal", image: tanisha },
    { name: "Het Salamvala", image: het },
    { name: "Krishna Shethana", image: krishna },
  ];

  const eventVoluntree = [
    { name: "Harshil Parmar", image: harshil },
    { name: "Huzefa Mandviwala", image: huzefa },
    { name: "Vivek Panchal", image: vivek },
    { name: "Aryan Patel", image: aryan },
    { name: "Anushka Tandel", image: anushka },
    { name: "Hetvi Patel", image: hetvi },
  ];

  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen text-white overflow-hidden bg-gradient-to-b from-black via-purple-950 to-black">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 w-full h-full animate-twinkling-center bg-[url('/textures/starry-bg.png')] bg-cover opacity-50" />
      <div className="absolute inset-0 z-10 w-full h-full animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:rounded-full before:blur-3xl" />

      {/* Centered Content */}
      <div className="relative z-40 w-full flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-7xl flex flex-col items-center justify-center">
          <TeamSection
            title="Faculty Coordinator"
            members={facultyCoordinators}
            imageBgClass="bgfaculty"
          />

          <TeamSection
            title="Event Heads"
            members={eventCoordinators}
            imageBgClass="bghead"
          />

          <TeamSection
            title="Event Coordinators"
            members={eventVoluntree}
            imageBgClass="bgvoluntree"
          />
        </div>
      </div>
      <BackToTeams />
    </div>
  );
}

export default TeamsPyit;
