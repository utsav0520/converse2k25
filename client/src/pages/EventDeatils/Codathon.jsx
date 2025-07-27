import React from "react";
import RegisterButtonFotTeam from "../../components/App/RegisterButtonFotTeam.jsx";
import { codathon } from "../../constants/eventNames.js";

function Codathon() {
  return (
    <div>
      <RegisterButtonFotTeam event={codathon} />
    </div>
  );
}

export default Codathon;
