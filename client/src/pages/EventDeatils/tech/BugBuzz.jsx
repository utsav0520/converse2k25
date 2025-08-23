import React from 'react'
import RegisterButton from '../../../components/App/RegisterButton'
import {bugBuzz} from '../../../constants/eventNames' 

function BugBuzz() {
  return (
    <div>
      <RegisterButton event={bugBuzz} />
    </div>
  )
}

export default BugBuzz
