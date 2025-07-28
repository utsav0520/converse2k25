import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EventListing } from "../constants/EventListing";

function Events() {
  const navigate = useNavigate();
  const [navigatingTo, setNavigatingTo] = useState(null);

  const handleClick = (slug, name) => {
    setNavigatingTo(name);
    setTimeout(() => {
      navigate(`/event/${slug.toLowerCase()}`);
    }, 2000);
  };

  return (
    <div className="relative min-h-screen py-10 px-4 bg-gradient-to-br from-gray-500 to-gray-950">
      <h1 className="text-3xl font-bold text-center mb-8">All Events</h1>

      {/* Navigation Overlay */}
      {navigatingTo && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="px-8 py-6 rounded-lg shadow-lg animate-pulse text-center">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Navigating to...
            </h2>
            <p className="text-lg font-bold text-blue-600">{navigatingTo}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {Object.values(EventListing).map((event) => (
          <div
            key={event.slug}
            onClick={() => handleClick(event.slug, event.name)}
            className="bg-white/50 backdrop-blur-md border border-gray-200 rounded-lg shadow-md hover:shadow-xl cursor-pointer transform hover:scale-105 transition-all duration-300 p-4 group"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-gray-800 group-hover:underline transition duration-200">
                {event.name}
              </h2>
              <p className="text-gray-600 text-sm italic group-hover:tracking-wide transition-all duration-300">
                {event.slogan}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
