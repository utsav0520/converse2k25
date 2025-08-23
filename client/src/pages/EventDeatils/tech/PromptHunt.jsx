import React from 'react'
import RegisterButton from '../../../components/App/RegisterButton'
import {promptHunt} from '../../../constants/eventNames' 

function PromptHunt() {
  return (
    <div>
      <RegisterButton event={promptHunt} />
    </div>
  )
}

export default PromptHunt