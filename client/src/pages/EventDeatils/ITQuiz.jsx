import React from 'react'
import RegisterButton from '../../components/App/RegisterButton'
import {itQuiz} from '../../constants/eventNames' 

function ITQuiz() {
  return (
    <div>
      <RegisterButton event={itQuiz} />
      
    </div>
  )
}

export default ITQuiz
