import React from 'react'
import RegisterButton from '../../../components/App/RegisterButton'
import {cyberSpy} from '../../../constants/eventNames' 

function CyberSpy() {
  return (
    <div>
      <RegisterButton event={cyberSpy} />
    </div>
  )
}

export default CyberSpy
