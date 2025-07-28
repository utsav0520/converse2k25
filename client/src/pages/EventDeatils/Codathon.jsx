import React from "react";
import RegisterButtonFotTeam from "../../components/App/RegisterButtonFotTeam.jsx";
import { codathon } from "../../constants/eventNames.js";

function Codathon() {
  return (
    <div>
      <RegisterButtonFotTeam event={codathon} min={1} max={2} />
    </div>
  );
}

export default Codathon;
