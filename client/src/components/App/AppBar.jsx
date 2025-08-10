import React from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import EventNoteIcon from "@mui/icons-material/EventNote";
import Groups2Icon from '@mui/icons-material/Groups2';
import CollectionsIcon from "@mui/icons-material/Collections";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector, useDispatch } from "react-redux";
import { LOGOUT } from "../../constants/actionTypes";
import { toast } from "react-toastify";


const IconDisplay = ({ icon, link, name }) => {
  return (
    <Link to={link} className="block text-center">
      <div className="icon-hover grid items-center justify-center p-2 sm:p-1 rounded-lg transition-transform hover:scale-105 hover:bg-gray-100">
        <div className="text-2xl sm:text-lg">{icon}</div>
        <div className="text-sm sm:text-xs font-medium">{name}</div>
      </div>
    </Link>
  );
};



function AppBar() {
  const user = useSelector((state) => state.auth?.authData?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    dispatch({ type: LOGOUT });
    toast.success("Logout !!", {
      position: "top-right",
      autoClose: 5000,
      theme: "dark",
    });
    navigate("/");
  };

  return (
    <div className="fixed bottom-0 w-full flex justify-center bg-transparent py-3 shadow-md z-50">
      <div className="bg-transperent border-primary text-primary px-1 py-1 md:px-2 rounded-2xl backdrop-blur-md text-sm border-3 flex gap-0.5">
        <IconDisplay icon={<HomeIcon />} name="home" link="/" />
        <IconDisplay icon={<EventNoteIcon />} name="Events" link="/events" />
        <IconDisplay icon={<Groups2Icon />} name="Teams" link="/teams" />
        <IconDisplay icon={<CollectionsIcon />} name="Aboute" link="/gallary" />

        {!user ? (
          <IconDisplay icon={<LoginIcon />} name="Sign In" link="/signin" />
        ) : (
          <>
            <IconDisplay icon={<PersonIcon />} name="Profile" link="/profile" />
            <div className="bg-divider h-full w-0.5 rounded-3xl"></div>
            <button onClick={handleLogout}>
              <div className="icon-hover border-0 rounded-4xl p-2">
                <LogoutIcon />
              </div>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default AppBar;
