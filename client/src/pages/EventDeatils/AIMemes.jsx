import React from 'react'
import RegisterButton from '../../components/App/RegisterButton'
import {aiMemes} from '../../constants/eventNames' 

function AIMemes() {
  return (
    <div>
      <RegisterButton event={aiMemes} />
    </div>
  )
}

export default AIMemes
