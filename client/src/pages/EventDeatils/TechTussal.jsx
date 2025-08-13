import React from 'react'
import RegisterButtonFotTeam from "../../components/App/RegisterButtonFotTeam.jsx";
import { techTussle } from "../../constants/eventNames.js";

function TechTussal() {
  return (
    <div>
      <RegisterButtonFotTeam event={techTussle} min={1} max={2} />
    </div>
  )
}

export default TechTussal
