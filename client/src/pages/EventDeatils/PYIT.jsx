import React from 'react'
import RegisterButton from '../../components/App/RegisterButton'
import {pyIt} from '../../constants/eventNames' 

function PYIT() {
  return (
    <div>
      <RegisterButton event={pyIt} />
    </div>
  )
}

export default PYIT
