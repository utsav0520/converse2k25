import TeamSection from "../../components/App/TeamSection";
import facultyMita from "../../assets/StudentsData/Not/girlNot.png";
import facultyTushar from "../../assets/StudentsData/Faculty/tushar.png";
import facultyApurva from "../../assets/StudentsData/Faculty/apurav.png";

import headSahil from "../../assets/StudentsData/IT&AIQuizz/IT&AI_sahil sidhdhapara.png";
import headVasu from "../../assets/StudentsData/Not/maleNot.png";
import headDhruvkumar from "../../assets/StudentsData/IT&AIQuizz/ITAIQuiz_dhruvitkumar-removebg-preview.png";

import volPranjal from "../../assets/StudentsData/IT&AIQuizz/ITAIQuiz_pranjal-removebg-preview.png";
import volDrishi from "../../assets/StudentsData/IT&AIQuizz/IT&AI_Drishi Morkhia.png";
import volKhushi from "../../assets/StudentsData/IT&AIQuizz/IT_AI_Khushi_gajrawala_-removebg-preview.png";
import volManasvi from "../../assets/StudentsData/IT&AIQuizz/IT_AI_Manasvi_Bhesania-removebg-preview.png";
import volRishika from "../../assets/StudentsData/IT&AIQuizz/IT&AI_Rishika_Jain.png";
import BackToTeams from "../../components/App/BackToTeams";

function TeamsItaiquiz() {
  const facultyCoordinators = [
    { name: "Dr. Mita Parikh", image: facultyMita },
    { name: "Prof. Tushar Gohil", image: facultyTushar },
    { name: "Prof. Apurva Bharat Mandalaywala", image: facultyApurva },
  ];

  const eventCoordinators = [
    { name: "Sahil Sidhdhapara", image: headSahil },
    { name: "Vasu Navadiya", image: headVasu },
    { name: "Dhruvkumar Italiya", image: headDhruvkumar },
  ];

  const eventVoluntree = [
    { name: "Pranjal Hadiya", image: volPranjal },
    { name: "Drishi Morkhia", image: volDrishi },
    { name: "Khushi Gajrawala", image: volKhushi },
    { name: "Manasvi Bhesania", image: volManasvi },
    { name: "Rishika Jain", image: volRishika },
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

export default TeamsItaiquiz;
