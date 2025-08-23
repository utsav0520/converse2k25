import React from 'react'
import RegisterButton from '../../../components/App/RegisterButton'
import {logoHunt} from '../../../constants/eventNames'

function  LogoHunt() {
  return (
    <div>
      <RegisterButton event={logoHunt} />
    </div>
  )
}

export default LogoHunt
