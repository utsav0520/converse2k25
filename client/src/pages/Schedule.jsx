import React, { useState } from 'react';

const Schedule = () => {
  // Adjusted schedule data
  const schedule = [
    {
      day: 'Friday, 19th September, 2025',
      events: [
        { time: '8:30 am - 10:00 am', event: 'Inauguration Ceremony', location: 'Outside Lab 1' },
        { time: '10:00 am - 10:45 am', event: 'IT & AI Quiz', location: 'Lab 1,2,3' },
        { time: '11:00 am - 11:45 pm', event: 'Logo Hunt', location: 'Lab 1,2,4,5' },
        { time: '12:00 am - 1:00 pm', event: 'CodeWinglet (Round 1)', location: 'Lab 3,4,5' },
        { time: '12:00 am - 12:30 pm', event: 'Prompt Hunt (Round 1)', location: 'Lab 1,2' },
        { time: '12:45 pm - 1:15 pm', event: 'Cyber Spy (Round 1)', location: 'Lab 1,2' },
        { time: '1:15 pm - 1:45 pm', event: 'Lunch Break', location: '' },
        { time: '1:45 pm - 2:45 pm', event: 'PY-IT (Round 1)', location: 'Lab 1,2,3' },
        { time: '2:00 pm - 4:00 pm', event: 'CodeWinglet (Round 2)', location: 'Lab 4,5' },
        { time: '3:00 pm - 4:30 pm', event: 'Codathon', location: 'Lab 1,2,3' },
      ]
    },
    {
      day: 'Saturday, 20th September, 2025',
      events: [
        { time: '9:00 am - 9:30 am', event: 'Ai-Memes (Round 1)', location: 'Lab 1,2,3' },
        { time: '9:30 am - 10:15 am', event: 'AI-Memes (Round 2)', location: 'Lab 1,2,3' },
        { time: '10:30 am - 11:30 am', event: 'Bug Buzz (Round 1 and Round 2)', location: 'Lab 1,2,4' },
        { time: '10:30 am - 11:30 am', event: 'PY-IT (Round 2)', location: 'Lab 3' },
        { time: '11:30 am - 12:30 pm', event: 'Web Wave', location: 'Lab 4,5' },
        { time: '11:30 am - 12:30 pm', event: 'PY-IT (Round 3)', location: 'Lab 3' },
        { time: '12:30 pm - 1:30 pm', event: 'Prompt Hunt(Round 2)', location: 'Lab 1,2' },
        { time: '12:30 pm - 1:30 pm', event: 'Cyber Spy (Round 2)', location: 'Lab 4,5' },
        { time: '1:30 pm - 2:00 pm', event: 'Lunch Break', location: '' },
        { time: '2:30 pm - 4:00 pm', event: 'Valedictory, Prize & Certificate distribution', location: '' },
      ]
    },
  ];

  const [currentDay, setCurrentDay] = useState(0);

  const handleNext = () => {
    if (currentDay < schedule.length - 1) {
      setCurrentDay(currentDay + 1);
    }
  };

  const handlePrevious = () => {
    if (currentDay > 0) {
      setCurrentDay(currentDay - 1);
    }
  };

  const day = schedule[currentDay];

  return (
    <div className="teams-section">
      <div className="ex">
        <h2 className="animate-glitchFlicker text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300">
          Converse 2K25 Schedule
        </h2>
      </div>
      <div className="schedule-page">
        <div className="schedule-day animate-slideUp">
          <h2 className="animate-glitchFlicker text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
            {day.day}
          </h2>
          <div className="navigation-buttons flex justify-between mb-6">
            <button
              onClick={handlePrevious}
              disabled={currentDay === 0}
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg border-2 border-blue-700 hover:bg-blue-700 hover:border-blue-800 transition-all duration-200 disabled:opacity-50"
            >
              Previous Day
            </button>
            <button
              onClick={handleNext}
              disabled={currentDay === schedule.length - 1}
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg border-2 border-blue-700 hover:bg-blue-700 hover:border-blue-800 transition-all duration-200 disabled:opacity-50"
            >
              Next Day
            </button>
          </div>
          <table className="schedule-table">
            <thead>
              <tr>
                <th style={{ width: '30%' }}>Time</th>
                <th style={{ width: '40%' }}>Event</th>
                <th style={{ width: '30%' }}>Location</th>
              </tr>
            </thead>
            <tbody>
              {day.events.map((event, idx) => (
                <tr key={idx} className="animate-fadeIn">
                  <td>{event.time}</td>
                  <td>{event.event}</td>
                  <td>{event.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes neonGlow {
            0%, 100% { transform: scale(1) translate(-50%, -50%); opacity: 0.3; }
            50% { transform: scale(1.2) translate(-50%, -50%); opacity: 0.5; }
          }
          @keyframes glitchFlicker {
            0% { opacity: 1; text-shadow: none; }
            2% { opacity: 0.8; text-shadow: 3px 3px 6px rgba(255, 255, 255, 0.9), -3px -3px 6px rgba(0, 255, 255, 0.9); transform: skewX(-4deg); }
            4% { opacity: 1; text-shadow: none; transform: skewX(0); }
            6% { opacity: 0.9; text-shadow: -3px -3px 6px rgba(255, 255, 255, 0.9), 3px 3px 6px rgba(0, 255, 255, 0.9); transform: skewX(4deg); }
            8% { opacity: 1; text-shadow: none; transform: skewX(0); }
            100% { opacity: 1; text-shadow: none; }
          }
          .teams-section {
            min-height: 100vh;
            padding: 20px 0;
            background: linear-gradient(to bottom, #1a0033, #2a004d);
            position: relative;
            overflow: hidden;
            border-radius: 20px;
            margin-bottom: 20px;
          }
          .ex {
            text-align: center;
            margin-bottom: 30px;
          }
          .ex h2 {
            font-size: 2.5rem;
            font-weight: bold;
          }
          .schedule-page {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background: rgba(26, 0, 51, 0.9);
            border-radius: 15px;
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
          }
          .schedule-day {
            margin-bottom: 40px;
          }
          .schedule-day h2 {
            font-size: 1.8rem;
            margin-bottom: 15px;
          }
          .schedule-table {
            width: 100%;
            border-collapse: collapse;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
            overflow: hidden;
            table-layout: fixed; /* Ensures columns maintain fixed widths */
          }
          .schedule-table th,
          .schedule-table td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            word-wrap: break-word; /* Prevents text overflow */
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .schedule-table th {
            background: linear-gradient(to right, #4a148c, #1a0033);
            color: #b3e5fc;
            font-weight: bold;
          }
          .schedule-table td {
            color: #e0e0e0;
          }
          .navigation-buttons {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
          }
          .navigation-buttons button:hover {
            transform: scale(1.05);
            transition: transform 0.3s ease;
          }
          .animate-fadeIn { animation: fadeIn 1.3s ease-in-out; }
          .animate-slideUp { animation: slideUp 1.3s ease-in-out; }
          .animate-neon-glow::before {
            content: '';
            position: absolute;
            left: 50%;
            top: 50%;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, rgba(90, 24, 154, 0.5), rgba(0, 255, 255, 0.5));
            border-radius: 50%;
            filter: blur(120px);
            animation: neonGlow 3.5s infinite ease-in-out;
            z-index: -1;
          }
          @media (max-width: 768px) {
            .schedule-table {
              display: block;
              overflow-x: auto;
            }
            .ex h2 {
              font-size: 2rem;
            }
            .schedule-table th,
            .schedule-table td {
              font-size: 0.8rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Schedule;
