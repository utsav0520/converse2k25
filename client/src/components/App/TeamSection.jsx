function TeamSection({ title, members, gradient, imageBgClass = '' }) {
  return (
    <div className={`w-full py-12 px-6 ${gradient || ''}`}>
      {/* Section Title */}
      <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-center mb-10 tracking-tighter animate-glitch-flicker text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300">
        {title}
      </h1>

      {/* Grid Wrapper */}
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full justify-center text-white text-[1.3rem]">
          {members.map((member) => (
            <div
              key={member.name}
              className="relative bg-gray-800/50 border border-gray-700 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/60 backdrop-blur-sm transition-transform duration-500 hover:scale-105 group"
            >
              {/* Image Container */}
              <div
                className={`w-full h-64 pt-5 flex items-center justify-center overflow-hidden rounded-t-3xl ${imageBgClass}`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Name */}
              <div className="p-6 text-center">
                <h2 className="text-2xl font-semibold text-white group-hover:text-cyan-300 group-hover:underline transition duration-200">
                  {member.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
