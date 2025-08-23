import React from 'react'
import RegisterButton from '../../../components/App/RegisterButton'
import {itaiQuiz} from '../../../constants/eventNames' 

function ITQuiz() {
  return (
    <div>
      <RegisterButton event={itaiQuiz} />
    </div>
  )
}

export default ITQuiz
