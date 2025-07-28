import React from 'react'
import RegisterButton from '../../components/App/RegisterButton'
import {cyberSiege} from '../../constants/eventNames' 

function Cybersiege() {
  return (
    <div>
      <RegisterButton event={cyberSiege} />
    </div>
  )
}

export default Cybersiege
