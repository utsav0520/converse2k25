import TeamSection from "../../components/App/TeamSection";
import ayush from "../../assets/StudentsData/Head/Head_Ayush.png";
import BackToTeams  from "../../components/App/BackToTeams";

function TeamsFinancial() {
    const eventCoordinators = [
    { name: "Ayush Vanani", image: ayush },
  ];

  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen text-white overflow-hidden bg-gradient-to-b from-black via-purple-950 to-black">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 w-full h-full animate-twinkling-stars bg-[url('/textures/starry-bg.png')] bg-cover opacity-50" />
      <div className="absolute inset-0 z-10 w-full h-full animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:rounded-full before:blur-3xl" />

      {/* Sections */}
      <div className="relative z-40 w-full max-w-7xl mx-auto">
        <TeamSection
          title="Financial Heads"
          members={eventCoordinators}
          imageBgClass="bghead"
        />
      </div>

      <BackToTeams />
    </div>
  );
}

export default TeamsFinancial;
