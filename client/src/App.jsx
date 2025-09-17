import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUser } from "./auth/auth.js";

import AppBar from "./components/App/AppBar.jsx";
import AppFottor from "./components/App/AppFottor.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import Schedule from "./pages/Schedule.jsx";
import Events from "./pages/Events.jsx";
import TeamsPage from "./pages/TeamsPage.jsx";

import Signin from "./pages/Signin.jsx";
import Profile from "./pages/Profile.jsx";

import LogoHunt from "./pages/EventDeatils/tech/LogoHunt.jsx";
import BugBuzz from "./pages/EventDeatils/tech/BugBuzz.jsx";
import Codathon from "./pages/EventDeatils/tech/Codathon.jsx";
import WebWaves from "./pages/EventDeatils/tech/WebWaves.jsx";
import CyberSpy from "./pages/EventDeatils/tech/CyberSpy.jsx";
import ITAIQuiz from "./pages/EventDeatils/tech/ITAIQuiz.jsx";
import PromptHunt from "./pages/EventDeatils/tech/PromptHunt.jsx";
import AIMemes from "./pages/EventDeatils/tech/AIMemes.jsx";
import PYIT from "./pages/EventDeatils/tech/PYIT.jsx";
import Codewinglet from "./pages/EventDeatils/tech/Codewinglet.jsx";

import BGMI from "./pages/EventDeatils/nontech/BGMI.jsx";
import ReelCraft from "./pages/EventDeatils/nontech/ReelCraft.jsx";
import IPLAuction from "./pages/EventDeatils/nontech/IPLAuction.jsx";
import EscapeRoom from "./pages/EventDeatils/nontech/EscapeRoom.jsx";
import Traitors from "./pages/EventDeatils/nontech/Traitors.jsx";
import MysticMover from "./pages/EventDeatils/nontech/MysticMover.jsx";
import FFM from "./pages/EventDeatils/nontech/FFM.jsx";
import Ezholiday from "./pages/EventDeatils/nontech/Ezholiday.jsx";

import TeamsConverse from './pages/TeamsDetails/TeamsConverse.jsx';
import TeamsFinancial from './pages/TeamsDetails/TeamsFinancial.jsx';
import TeamsGraphics from './pages/TeamsDetails/TeamsGraphics.jsx';
import TeamsWeb from './pages/TeamsDetails/TeamsWeb.jsx';
import TeamsMarketing from './pages/TeamsDetails/TeamsMarketing.jsx';
import TeamsDEC from './pages/TeamsDetails/TeamsDEC.jsx';
import TeamsNontech from './pages/TeamsDetails/TeamsNontech.jsx';
import TeamsLogohunt from "./pages/TeamsDetails/TeamsLogohunt.jsx";
import TeamsBugbuzz from "./pages/TeamsDetails/TeamsBugbuzz.jsx";
import TeamsCodathon from "./pages/TeamsDetails/TeamsCodathon.jsx";
import TeamsWebwave from "./pages/TeamsDetails/TeamsWebwave.jsx";
import TeamsCyberspy from "./pages/TeamsDetails/TeamsCyberspy.jsx";
import TeamsItaiquiz from "./pages/TeamsDetails/TeamsItaiquiz.jsx";
import TeamsPrompthunt from "./pages/TeamsDetails/TeamsPrompthunt.jsx";
import TeamsAimemes from "./pages/TeamsDetails/TeamsAimemes.jsx";
import TeamsPyit from "./pages/TeamsDetails/TeamsPyit.jsx";
import Teamsanchore from "./pages/TeamsDetails/Teamsanchore";

import ScrollToTop from "./components/App/ScrollToTop.jsx";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("profile");
    if (token) {
      dispatch(fetchUser());
    }
  }, [dispatch]);
  return (
    <>
      <AppBar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/events" element={<Events />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/teams" element={<TeamsPage />} />

        {/* Tech Event Page */}
        <Route path="/event/logohunt" element={<LogoHunt />} />
        <Route path="/event/bugbuzz" element={<BugBuzz />} />
        <Route path="/event/codathon" element={<Codathon/>} />
        <Route path="/event/webwave" element={<WebWaves />} />
        <Route path="/event/cyberspy" element={<CyberSpy />} />
        <Route path="/event/itaiquiz" element={<ITAIQuiz />} />
        <Route path="/event/prompthunt" element={<PromptHunt />} />
        <Route path="/event/aimemes" element={<AIMemes />} />
        <Route path="/event/pyit" element={<PYIT />} />
        <Route path="/event/codebridge" element={<Codewinglet />} />

        {/* Non Tech Event Page */}
        <Route path="/event/bgmi" element={<BGMI />} />
        <Route path="/event/reelcraft" element={<ReelCraft />} />
        <Route path="/event/iplauction" element={<IPLAuction />} />
        <Route path="/event/escaperoom" element={<EscapeRoom />} />
        <Route path="/event/traitors" element={<Traitors />} />
        <Route path="/event/mysticmover" element={<MysticMover />} />
        <Route path="/event/ffm" element={<FFM />} />
        <Route path="/event/ezholiday" element={<Ezholiday />} />

        {/* Teams Section */}
        <Route path="/team/converse" element={<TeamsConverse />} />
        <Route path="/team/financial" element={<TeamsFinancial />} />
        <Route path="/team/graphics" element={<TeamsGraphics />} />
        <Route path="/team/web" element={<TeamsWeb />} />
        <Route path="/team/marketing" element={<TeamsMarketing />} />
        <Route path="/team/dec" element={<TeamsDEC />} />
        <Route path="/team/nontech" element={<TeamsNontech />} />
        <Route path="/team/logohunt" element={<TeamsLogohunt />} />
        <Route path="/team/bugbuzz" element={<TeamsBugbuzz />} />
        <Route path="/team/codathon" element={<TeamsCodathon />} />
        <Route path="/team/webwave" element={<TeamsWebwave />} />
        <Route path="/team/cyberspy" element={<TeamsCyberspy />} />
        <Route path="/team/itaiquiz" element={<TeamsItaiquiz />} />
        <Route path="/team/prompthunt" element={<TeamsPrompthunt />} />
        <Route path="/team/aimemes" element={<TeamsAimemes />} />
        <Route path="/team/pyit" element={<TeamsPyit />} />
        <Route path="/team/anchore" element={<Teamsanchore />} />

        
      </Routes>
      <AppFottor />
    </>
  );
}

export default App;
