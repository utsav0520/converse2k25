import React from 'react'
import RegisterButton from '../../../components/App/RegisterButton'
import {webWave} from '../../../constants/eventNames' 

function WebWaves() {
  return (
    <div>
      <RegisterButton event={webWave} />
    </div>
  )
}

export default WebWaves
