import React, {useEffect} from 'react'
import { Routes,Route } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { fetchUser } from './auth/auth.js';

import AppBar from './components/App/AppBar.jsx'
import AppFottor from './components/App/AppFottor.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import Schedule from './pages/Schedule.jsx'
import Events from './pages/Events.jsx'

import Signin from './pages/Signin.jsx'
import Profile from './pages/Profile.jsx'

import PYIT from './pages/EventDeatils/PYIT.jsx'
import Codathon from './pages/EventDeatils/Codathon.jsx'

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
      <AppBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/schedule' element={<Schedule/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/profile' element={<Profile/>} />

        {/* Event Page */}
        <Route path='/event/pyit' element={<PYIT/>}/>
        <Route path='/event/codathon' element={<Codathon/>}/>

      </Routes>
      <AppFottor/>
    </>
  )
}

export default App
