import React from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CollectionsIcon from "@mui/icons-material/Collections";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector, useDispatch } from "react-redux";
import { LOGOUT } from "../../constants/actionTypes";
import { toast } from "react-toastify";

const IconDisplay = ({ icon, link }) => {
  return (
    <Link to={link}>
      <div className="icon-hover border-0 rounded-4xl p-2">{icon}</div>
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
      <div className="bg-transperent border-primary text-primary px-4 py-2 rounded-3xl backdrop-blur-md text-sm border-3 flex gap-4">
        <IconDisplay icon={<HomeIcon />} link="/" />
        <IconDisplay icon={<EventNoteIcon />} link="/events" />
        <IconDisplay icon={<CollectionsIcon />} link="/gallary" />

        {!user ? (
          <IconDisplay icon={<LoginIcon />} link="/signin" />
        ) : (
          <>
            <IconDisplay icon={<PersonIcon />} link="/profile" />
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
