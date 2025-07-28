import React from 'react'
import RegisterButton from '../../components/App/RegisterButton'
import {aiQuiz} from '../../constants/eventNames' 

function AIQuiz() {
  return (
    <div>
      <RegisterButton event={aiQuiz} />
      
    </div>
  )
}

export default AIQuiz
